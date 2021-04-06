"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _users = _interopRequireDefault(require("./users.routes"));

var _auth = _interopRequireDefault(require("./auth.routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const routes = (0, _express.Router)();
routes.use("/users", _users.default);
routes.use('/auth', _auth.default);
var _default = routes;
exports.default = _default;