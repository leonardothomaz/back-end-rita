"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createPersonalMedicine1617227838800 = void 0;

var _typeorm = require("typeorm");

class createPersonalMedicine1617227838800 {
  async up(queryRunner) {
    await queryRunner.createTable(new _typeorm.Table({
      name: "personalmedicine",
      columns: [{
        name: "id",
        type: "uuid",
        isPrimary: true,
        generationStrategy: "uuid",
        default: "uuid_generate_v4()"
      }, {
        name: "user_id",
        type: "uuid",
        isNullable: true
      }, {
        name: "medicine_id",
        type: "uuid",
        isNullable: true
      }, {
        name: "startedhour",
        type: "time"
      }, {
        name: "intakeinterval",
        type: "time"
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
    await queryRunner.createForeignKeys("personalmedicine", [new _typeorm.TableForeignKey({
      name: "medicineUser",
      columnNames: ["user_id"],
      referencedColumnNames: ["id"],
      referencedTableName: "users",
      onDelete: "NO ACTION",
      onUpdate: "CASCADE"
    }), new _typeorm.TableForeignKey({
      name: "personalMedicneToMedicine",
      columnNames: ["medicine_id"],
      referencedColumnNames: ["id"],
      referencedTableName: "medicine",
      onDelete: "NO ACTION",
      onUpdate: "CASCADE"
    })]);
  }

  async down(queryRunner) {
    await queryRunner.dropForeignKey("personalmedicine", "medicineUser");
    await queryRunner.dropForeignKey("personalmedicine", "personalMedicneToMedicine");
    await queryRunner.dropTable("personalmedicine");
  }

}

exports.createPersonalMedicine1617227838800 = createPersonalMedicine1617227838800;