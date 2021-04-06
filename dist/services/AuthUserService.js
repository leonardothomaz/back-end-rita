"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _bcryptjs = require("bcryptjs");

var _jsonwebtoken = require("jsonwebtoken");

var _typeorm = require("typeorm");

var _AppError = _interopRequireDefault(require("../errors/AppError"));

var _User = _interopRequireDefault(require("./../models/User"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class AuthUserService {
  async execute({
    email,
    password
  }) {
    const usersRepository = (0, _typeorm.getRepository)(_User.default);
    const user = await usersRepository.findOne({
      where: {
        email
      }
    });

    if (!user) {
      throw new _AppError.default("Usuário ou senha incorreto.", 401);
    }

    const passwordMatched = await (0, _bcryptjs.compare)(password, user.password);

    if (!passwordMatched) {
      throw new _AppError.default("Usuário ou senha incorreto.", 401);
    }

    const SECRET = process.env.SECRET || '';
    const token = (0, _jsonwebtoken.sign)({}, SECRET, {
      subject: user.id,
      expiresIn: process.env.expiresIn
    });
    return {
      user,
      token
    };
  }

}

var _default = AuthUserService;
exports.default = _default;