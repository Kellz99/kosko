/* global AggregateError */
"use strict";

module.exports =
  typeof AggregateError === "undefined"
    ? require("./dist/AggregateError.js").default
    : AggregateError;
