/* TypeScript file generated from ToyRobot.re by genType. */
/* eslint-disable import/first */


const $$toJS223300147: { [key: string]: any } = {"0": "LEFT", "1": "RIGHT", "2": "REPORT"};

const $$toRE223300147: { [key: string]: any } = {"LEFT": 0, "RIGHT": 1, "REPORT": 2};

const $$toJS311681469: { [key: string]: any } = {"0": "NORTH", "1": "SOUTH", "2": "EAST", "3": "WEST"};

const $$toRE311681469: { [key: string]: any } = {"NORTH": 0, "SOUTH": 1, "EAST": 2, "WEST": 3};

// tslint:disable-next-line:no-var-requires
const CreateBucklescriptBlock = require('bs-platform/lib/es6/block.js');

// tslint:disable-next-line:no-var-requires
const Curry = require('bs-platform/lib/es6/curry.js');

// tslint:disable-next-line:no-var-requires
const ToyRobotBS = require('./ToyRobot.bs');

// tslint:disable-next-line:interface-over-type-literal
export type Robot_direction = "NORTH" | "SOUTH" | "EAST" | "WEST";

// tslint:disable-next-line:interface-over-type-literal
export type Robot_t = {
  readonly east: number; 
  readonly north: number; 
  readonly direction: Robot_direction
};

// tslint:disable-next-line:interface-over-type-literal
export type Table_t = { readonly width: number; readonly length: number };

// tslint:disable-next-line:interface-over-type-literal
export type Simulator_t = { readonly table: Table_t; readonly robot?: Robot_t };

// tslint:disable-next-line:interface-over-type-literal
export type Command_t = 
    "LEFT"
  | "RIGHT"
  | "REPORT"
  | { tag: "PLACE"; value: [number, number, Robot_direction] }
  | { tag: "MOVE"; value: number }
  | { tag: "INVALID"; value: string };

export const Robot_make: (_1:{
  readonly east: number; 
  readonly north: number; 
  readonly direction?: Robot_direction
}, _2:void) => Robot_t = function (Arg1: any, Arg2: any) {
  const result = Curry._4(ToyRobotBS.Robot.make, Arg1.east, Arg1.north, (Arg1.direction == null ? undefined : $$toRE311681469[Arg1.direction]), Arg2);
  return {east:result.east, north:result.north, direction:$$toJS311681469[result.direction]}
};

export const Robot_moveEast: (_1:Robot_t) => Robot_t = function (Arg1: any) {
  const result = ToyRobotBS.Robot.moveEast({east:Arg1.east, north:Arg1.north, direction:$$toRE311681469[Arg1.direction]});
  return {east:result.east, north:result.north, direction:$$toJS311681469[result.direction]}
};

export const Robot_moveWest: (_1:Robot_t) => Robot_t = function (Arg1: any) {
  const result = ToyRobotBS.Robot.moveWest({east:Arg1.east, north:Arg1.north, direction:$$toRE311681469[Arg1.direction]});
  return {east:result.east, north:result.north, direction:$$toJS311681469[result.direction]}
};

export const Robot_moveNorth: (_1:Robot_t) => Robot_t = function (Arg1: any) {
  const result = ToyRobotBS.Robot.moveNorth({east:Arg1.east, north:Arg1.north, direction:$$toRE311681469[Arg1.direction]});
  return {east:result.east, north:result.north, direction:$$toJS311681469[result.direction]}
};

export const Robot_moveSouth: (_1:Robot_t) => Robot_t = function (Arg1: any) {
  const result = ToyRobotBS.Robot.moveSouth({east:Arg1.east, north:Arg1.north, direction:$$toRE311681469[Arg1.direction]});
  return {east:result.east, north:result.north, direction:$$toJS311681469[result.direction]}
};

export const Robot_move: (_1:Robot_t) => Robot_t = function (Arg1: any) {
  const result = ToyRobotBS.Robot.move({east:Arg1.east, north:Arg1.north, direction:$$toRE311681469[Arg1.direction]});
  return {east:result.east, north:result.north, direction:$$toJS311681469[result.direction]}
};

export const Robot_nextMove: (_1:Robot_t, _2:number) => [number, number] = function (Arg1: any, Arg2: any) {
  const result = Curry._2(ToyRobotBS.Robot.nextMove, {east:Arg1.east, north:Arg1.north, direction:$$toRE311681469[Arg1.direction]}, Arg2);
  return result
};

export const Robot_turnLeft: (_1:Robot_t) => Robot_t = function (Arg1: any) {
  const result = ToyRobotBS.Robot.turnLeft({east:Arg1.east, north:Arg1.north, direction:$$toRE311681469[Arg1.direction]});
  return {east:result.east, north:result.north, direction:$$toJS311681469[result.direction]}
};

export const Robot_turnRight: (_1:Robot_t) => Robot_t = function (Arg1: any) {
  const result = ToyRobotBS.Robot.turnRight({east:Arg1.east, north:Arg1.north, direction:$$toRE311681469[Arg1.direction]});
  return {east:result.east, north:result.north, direction:$$toJS311681469[result.direction]}
};

export const Robot_report: (_1:Robot_t) => string = function (Arg1: any) {
  const result = ToyRobotBS.Robot.report({east:Arg1.east, north:Arg1.north, direction:$$toRE311681469[Arg1.direction]});
  return result
};

export const Table_make: (_1:{ readonly width: number; readonly length: number }) => Table_t = function (Arg1: any) {
  const result = Curry._2(ToyRobotBS.Table.make, Arg1.width, Arg1.length);
  return result
};

export const Table_validLocation: (_1:Table_t, _2:{ readonly east: number; readonly north: number }) => boolean = function (Arg1: any, Arg2: any) {
  const result = Curry._3(ToyRobotBS.Table.validLocation, Arg1, Arg2.east, Arg2.north);
  return result
};

export const Simulator_make: (_1:{ readonly table: Table_t }) => Simulator_t = function (Arg1: any) {
  const result = ToyRobotBS.Simulator.make(Arg1.table);
  return {table:result.table, robot:(result.robot == null ? result.robot : {east:result.robot.east, north:result.robot.north, direction:$$toJS311681469[result.robot.direction]})}
};

export const Simulator_place: (_1:Simulator_t, _2:{
  readonly east: number; 
  readonly north: number; 
  readonly facing: Robot_direction
}) => Simulator_t = function (Arg1: any, Arg2: any) {
  const result = Curry._4(ToyRobotBS.Simulator.place, {table:Arg1.table, robot:(Arg1.robot == null ? undefined : {east:Arg1.robot.east, north:Arg1.robot.north, direction:$$toRE311681469[Arg1.robot.direction]})}, Arg2.east, Arg2.north, $$toRE311681469[Arg2.facing]);
  return {table:result.table, robot:(result.robot == null ? result.robot : {east:result.robot.east, north:result.robot.north, direction:$$toJS311681469[result.robot.direction]})}
};

export const Simulator_move: (_1:Simulator_t, _2:number) => Simulator_t = function (Arg1: any, Arg2: any) {
  const result = Curry._2(ToyRobotBS.Simulator.move, {table:Arg1.table, robot:(Arg1.robot == null ? undefined : {east:Arg1.robot.east, north:Arg1.robot.north, direction:$$toRE311681469[Arg1.robot.direction]})}, Arg2);
  return {table:result.table, robot:(result.robot == null ? result.robot : {east:result.robot.east, north:result.robot.north, direction:$$toJS311681469[result.robot.direction]})}
};

export const Simulator_turnLeft: (_1:Simulator_t) => Simulator_t = function (Arg1: any) {
  const result = ToyRobotBS.Simulator.turnLeft({table:Arg1.table, robot:(Arg1.robot == null ? undefined : {east:Arg1.robot.east, north:Arg1.robot.north, direction:$$toRE311681469[Arg1.robot.direction]})});
  return {table:result.table, robot:(result.robot == null ? result.robot : {east:result.robot.east, north:result.robot.north, direction:$$toJS311681469[result.robot.direction]})}
};

export const Simulator_turnRight: (_1:Simulator_t) => Simulator_t = function (Arg1: any) {
  const result = ToyRobotBS.Simulator.turnRight({table:Arg1.table, robot:(Arg1.robot == null ? undefined : {east:Arg1.robot.east, north:Arg1.robot.north, direction:$$toRE311681469[Arg1.robot.direction]})});
  return {table:result.table, robot:(result.robot == null ? result.robot : {east:result.robot.east, north:result.robot.north, direction:$$toJS311681469[result.robot.direction]})}
};

export const Simulator_report: (_1:Simulator_t) => (null | undefined | string) = function (Arg1: any) {
  const result = ToyRobotBS.Simulator.report({table:Arg1.table, robot:(Arg1.robot == null ? undefined : {east:Arg1.robot.east, north:Arg1.robot.north, direction:$$toRE311681469[Arg1.robot.direction]})});
  return result
};

export const Command_run: (_1:string) => Command_t = function (Arg1: any) {
  const result = ToyRobotBS.Command.run(Arg1);
  return typeof(result) === 'object'
    ? result.tag===0
      ? {tag:"PLACE", value:[result.slice()[0], result.slice()[1], $$toJS311681469[result.slice()[2]]]}
      : result.tag===1
      ? {tag:"MOVE", value:result[0]}
      : {tag:"INVALID", value:result[0]}
    : $$toJS223300147[result]
};

export const CLI_loadCommands: (_1:string) => Command_t[] = function (Arg1: any) {
  const result = ToyRobotBS.CLI.loadCommands(Arg1);
  return result.map(function _element(ArrayItem: any) { return typeof(ArrayItem) === 'object'
    ? ArrayItem.tag===0
      ? {tag:"PLACE", value:[ArrayItem.slice()[0], ArrayItem.slice()[1], $$toJS311681469[ArrayItem.slice()[2]]]}
      : ArrayItem.tag===1
      ? {tag:"MOVE", value:ArrayItem[0]}
      : {tag:"INVALID", value:ArrayItem[0]}
    : $$toJS223300147[ArrayItem]})
};

export const CLI_runCommands: (_1:Simulator_t, _2:Command_t[]) => (null | undefined | string) = function (Arg1: any, Arg2: any) {
  const result = Curry._2(ToyRobotBS.CLI.runCommands, {table:Arg1.table, robot:(Arg1.robot == null ? undefined : {east:Arg1.robot.east, north:Arg1.robot.north, direction:$$toRE311681469[Arg1.robot.direction]})}, Arg2.map(function _element(ArrayItem: any) { return typeof(ArrayItem) === 'object'
    ? ArrayItem.tag==="PLACE"
      ? CreateBucklescriptBlock.__(0, [ArrayItem.value[0], ArrayItem.value[1], $$toRE311681469[ArrayItem.value[2]]])
      : ArrayItem.tag==="MOVE"
      ? CreateBucklescriptBlock.__(1, [ArrayItem.value])
      : CreateBucklescriptBlock.__(2, [ArrayItem.value])
    : $$toRE223300147[ArrayItem]}));
  return result
};

export const Table: { validLocation: (_1:Table_t, _2:{ readonly east: number; readonly north: number }) => boolean; make: (_1:{ readonly width: number; readonly length: number }) => Table_t } = ToyRobotBS.Table

export const Robot: {
  turnLeft: (_1:Robot_t) => Robot_t; 
  moveEast: (_1:Robot_t) => Robot_t; 
  turnRight: (_1:Robot_t) => Robot_t; 
  moveWest: (_1:Robot_t) => Robot_t; 
  report: (_1:Robot_t) => string; 
  move: (_1:Robot_t) => Robot_t; 
  nextMove: (_1:Robot_t, _2:number) => [number, number]; 
  make: (_1:{
    readonly east: number; 
    readonly north: number; 
    readonly direction?: Robot_direction
  }, _2:void) => Robot_t; 
  moveNorth: (_1:Robot_t) => Robot_t; 
  moveSouth: (_1:Robot_t) => Robot_t
} = ToyRobotBS.Robot

export const Simulator: {
  turnLeft: (_1:Simulator_t) => Simulator_t; 
  place: (_1:Simulator_t, _2:{
    readonly east: number; 
    readonly north: number; 
    readonly facing: Robot_direction
  }) => Simulator_t; 
  turnRight: (_1:Simulator_t) => Simulator_t; 
  report: (_1:Simulator_t) => (null | undefined | string); 
  move: (_1:Simulator_t, _2:number) => Simulator_t; 
  make: (_1:{
    readonly table: Table_t
  }) => Simulator_t
} = ToyRobotBS.Simulator

export const Command: { run: (_1:string) => Command_t } = ToyRobotBS.Command

export const CLI: { runCommands: (_1:Simulator_t, _2:Command_t[]) => (null | undefined | string); loadCommands: (_1:string) => Command_t[] } = ToyRobotBS.CLI
