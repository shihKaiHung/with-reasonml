// Generated by BUCKLESCRIPT VERSION 5.0.3, PLEASE EDIT WITH CARE

import * as Curry from "bs-platform/lib/es6/curry.js";
import * as React from "react";
import * as Header from "../components/Header.bs.js";
import * as Counter from "../components/Counter.bs.js";
import * as Pervasives from "bs-platform/lib/es6/pervasives.js";

function Index(Props) {
  var onServer = Props.onServer;
  return React.createElement("div", undefined, React.createElement(Header.make, { }), React.createElement("p", undefined, "HOME PAGE is here!"), React.createElement("p", undefined, "onServer: " + Pervasives.string_of_bool(onServer)), React.createElement(Counter.make, { }));
}

function getInitialProps(context) {
  var match = context.req;
  return {
          onServer: !(match == null)
        };
}

var inject = ( (cls, fn) => cls.getInitialProps = fn );

Curry._2(inject, Index, getInitialProps);

var make = Index;

var $$default = Index;

export {
  make ,
  $$default ,
  $$default as default,
  getInitialProps ,
  inject ,
  
}
/* inject Not a pure module */
