module Robot = {
  [@gentype]
  type direction =
    | NORTH
    | SOUTH
    | EAST
    | WEST;

  [@gentype]
  type t = {
    mutable east: int,
    mutable north: int,
    mutable direction,
  };

  [@gentype]
  let make = (~east, ~north, ~direction=NORTH, ()) => {
    east,
    north,
    direction,
  };

  [@genType]
  let moveEast = robot => {
    robot.east = robot.east + 1;
    robot;
  };

  [@genType]
  let moveWest = robot => {
    robot.east = robot.east - 1;
    robot;
  };

  [@genType]
  let moveNorth = robot => {
    robot.north = robot.north + 1;
    robot;
  };

  [@genType]
  let moveSouth = robot => {
    robot.north = robot.north - 1;
    robot;
  };

  [@gentype]
  let move = robot => {
    switch (robot.direction) {
    | NORTH => moveNorth(robot)
    | SOUTH => moveSouth(robot)
    | EAST => moveEast(robot)
    | WEST => moveWest(robot)
    };
  };

  [@gentype]
  let nextMove = robot => {
    switch (robot.direction) {
    | NORTH => (robot.east, robot.north + 1)
    | SOUTH => (robot.east, robot.north - 1)
    | EAST => (robot.east + 1, robot.north)
    | WEST => (robot.east - 1, robot.north)
    };
  };

  [@gentype]
  let turnLeft = robot => {
    robot.direction = (
      switch (robot.direction) {
      | NORTH => WEST
      | WEST => SOUTH
      | SOUTH => EAST
      | EAST => NORTH
      }
    );
    robot;
  };

  [@gentype]
  let turnRight = robot => {
    robot.direction = (
      switch (robot.direction) {
      | NORTH => EAST
      | WEST => NORTH
      | SOUTH => WEST
      | EAST => SOUTH
      }
    );
    robot;
  };

  let directionOfString = string => {
    switch (string) {
    | "NORTH" => Some(NORTH)
    | "SOUTH" => Some(SOUTH)
    | "EAST" => Some(EAST)
    | "WEST" => Some(WEST)
    | _ => None
    };
  };

  let stringOfDirection = direction => {
    switch (direction) {
    | NORTH => "NORTH"
    | SOUTH => "SOUTH"
    | EAST => "EAST"
    | WEST => "WEST"
    };
  };

  [@gentype]
  let report = robot => {
    let east = robot.east |> string_of_int;
    let north = robot.north |> string_of_int;
    let direction = robot.direction |> stringOfDirection;

    {j|$east,$north,$direction|j};
  };
};

module Table = {
  [@gentype]
  type t = {
    width: int,
    length: int,
  };

  [@gentype]
  let make = (~width, ~length) => {width, length};

  [@gentype]
  let validLocation = (table, ~east, ~north) => {
    east >= 0 && east < table.width && north >= 0 && north < table.length;
  };
};

module Simulator = {
  [@gentype]
  type t = {
    table: Table.t,
    mutable robot: option(Robot.t),
  };

  [@gentype]
  let make = (~table): t => {table, robot: None};

  [@gentype]
  let place = (simulator, ~east, ~north, ~facing) => {
    if (Table.validLocation(simulator.table, ~east, ~north)) {
      let newRobot = Robot.make(~east, ~north, ~direction=facing, ());
      simulator.robot = Some(newRobot);
    };
    simulator;
  };

  [@genType]
  let move = simulator => {
    switch (simulator.robot) {
    | Some(robot) =>
      let (east, north) = Robot.nextMove(robot);
      if (Table.validLocation(simulator.table, ~east, ~north)) {
        Robot.move(robot) |> ignore;
      };
    | None => ()
    };
    simulator;
  };

  [@genType]
  let turnLeft = simulator => {
    simulator.robot->Belt.Option.map(Robot.turnLeft) |> ignore;
    simulator;
  };

  [@genType]
  let turnRight = simulator => {
    simulator.robot->Belt.Option.map(Robot.turnRight) |> ignore;
    simulator;
  };

  [@genType]
  let report = simulator => {
    simulator.robot->Belt.Option.map(Robot.report);
  };
};

module Utilities = {};

module Command = {
  [@gentype]
  type t =
    | PLACE(int, int, Robot.direction)
    | MOVE
    | LEFT
    | RIGHT
    | REPORT
    | INVALID(string);

  [@genType]
  let process = (command: string) => {
    let moveMatches = Js.String.match([%re "/MOVE/"], command);
    let leftMatches = Js.String.match([%re "/LEFT/"], command);
    let rightMatches = Js.String.match([%re "/RIGHT/"], command);
    let reportMatches = Js.String.match([%re "/REPORT/"], command);
    let placeMatches =
      Js.String.match([%re "/PLACE (\\d+),(\\d+),(\\w+)/"], command);

    switch (
      moveMatches,
      leftMatches,
      rightMatches,
      reportMatches,
      placeMatches,
    ) {
    | (Some(_), _, _, _, _) => MOVE
    | (_, Some(_), _, _, _) => LEFT
    | (_, _, Some(_), _, _) => RIGHT
    | (_, _, _, Some(_), _) => REPORT
    | (_, _, _, _, Some(matches)) =>
      switch (Robot.directionOfString(matches[3])) {
      | Some(facing) =>
        PLACE(int_of_string(matches[1]), int_of_string(matches[2]), facing)
      | None => INVALID(command)
      }
    | _ => INVALID(command)
    };
  };
};

module CLI = {
  let splitByLines = (text: string) =>
    Js.String.split("\n", text)
    ->Belt.Array.reduce([||], (current, result) =>
        switch (Js.String.trim(result)) {
        | "" => current
        | stripped => Array.append(current, [|stripped|])
        }
      );

  [@genType]
  let loadCommands = (text: string) => {
    text |> splitByLines |> Array.map(Command.process);
  };

  [@genType]
  let runCommands = (simulator: Simulator.t, commands: array(Command.t)) => {
    commands->Belt.Array.reduce(simulator, (current, command) =>
      switch (command) {
      | Command.PLACE(east, north, facing) =>
        Simulator.place(current, ~east, ~north, ~facing)
      | Command.MOVE => Simulator.move(current)
      | Command.LEFT => Simulator.turnLeft(current)
      | Command.RIGHT => Simulator.turnRight(current)
      | Command.REPORT =>
        Simulator.report(current) |> ignore;
        current;
      | Command.INVALID(_) => current
      }
    );
  };
};
