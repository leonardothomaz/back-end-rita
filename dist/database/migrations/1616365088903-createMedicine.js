"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createMedicine1616365088903 = void 0;

var _typeorm = require("typeorm");

class createMedicine1616365088903 {
  async up(queryRunner) {
    await queryRunner.createTable(new _typeorm.Table({
      name: "medicine",
      columns: [{
        name: "id",
        type: "uuid",
        isPrimary: true,
        generationStrategy: "uuid",
        default: "uuid_generate_v4()"
      }, {
        name: "name",
        type: "varchar"
      }, {
        name: "dosage",
        type: "varchar"
      }, {
        name: "laboratory",
        type: "varchar"
      }, {
        name: "created_at",
        type: "timestamp",
        default: "now()"
      }, {
        name: "updated_at",
        type: "timestamp",
        default: "now()"
      }]
    }));
  }

  async down(queryRunner) {
    await queryRunner.dropTable("medicine");
  }

}

exports.createMedicine1616365088903 = createMedicine1616365088903;