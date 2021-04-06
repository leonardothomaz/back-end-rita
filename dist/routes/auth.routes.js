"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _AuthUserService = _interopRequireDefault(require("./../services/AuthUserService"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const authRouter = (0, _express.Router)();
authRouter.post("/", async (request, response) => {
  const {
    email,
    password
  } = request.body;
  const authUserService = new _AuthUserService.default();
  const {
    user,
    token
  } = await authUserService.execute({
    email,
    password
  }); // @ts-expect-error

  delete user.password;
  return response.json({
    user,
    token
  });
});
var _default = authRouter;
exports.default = _default;