"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ensureAuth;

var _jsonwebtoken = require("jsonwebtoken");

var _auth = _interopRequireDefault(require("../config/auth"));

var _AppError = _interopRequireDefault(require("../errors/AppError"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ensureAuth(request, response, next) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new _AppError.default("Token JWT não informado.", 401);
  }

  const [, token] = authHeader.split(" ");

  try {
    const decoded = (0, _jsonwebtoken.verify)(token, _auth.default.jwt.secret);
    const {
      sub
    } = decoded;
    request.user = {
      id: sub
    };
    return next();
  } catch {
    throw new _AppError.default("Token JWT inválido", 401);
  }
}