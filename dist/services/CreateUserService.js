"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _bcryptjs = require("bcryptjs");

var _typeorm = require("typeorm");

var _AppError = _interopRequireDefault(require("../errors/AppError"));

var _User = _interopRequireDefault(require("./../models/User"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class CreateUserService {
  async execute({
    name,
    email,
    password
  }) {
    const usersRepository = (0, _typeorm.getRepository)(_User.default);
    const checkUserExists = await usersRepository.findOne({
      where: {
        email
      }
    });

    if (checkUserExists) {
      throw new _AppError.default("Email já utilizado!");
    }

    const hashedPassword = await (0, _bcryptjs.hash)(password, 8);
    const user = usersRepository.create({
      name,
      email,
      password: hashedPassword
    });
    await usersRepository.save(user);
    return user;
  }

}

var _default = CreateUserService;
exports.default = _default;