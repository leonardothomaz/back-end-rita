"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addColumnsUser1617233125490 = void 0;

var _typeorm = require("typeorm");

class addColumnsUser1617233125490 {
  async up(queryRunner) {
    await queryRunner.addColumns("users", [new _typeorm.TableColumn({
      name: "latitude",
      type: "varchar",
      isNullable: true
    }), new _typeorm.TableColumn({
      name: "longitude",
      type: "varchar",
      isNullable: true
    }), new _typeorm.TableColumn({
      name: "type",
      type: "varchar",
      comment: "0 - Usuário; 1 - Fármacia"
    })]);
  }

  async down(queryRunner) {
    await queryRunner.dropColumn("users", "latitude");
    await queryRunner.dropColumn("users", "longitude");
    await queryRunner.dropColumn("users", "type");
  }

}

exports.addColumnsUser1617233125490 = addColumnsUser1617233125490;