import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from "typeorm";

export class createPersonalMedicine1617227838800 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "personalmedicine",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
            generationStrategy: "uuid",
            default: "uuid_generate_v4()",
          },
          {
            name: "user_id",
            type: "uuid",
            isNullable: true,
          },
          {
            name: "medicine_id",
            type: "uuid",
            isNullable: true,
          },
          {
            name: "startedhour",
            type: "time",
          },
          {
            name: "intakeinterval",
            type: "time",
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
          {
            name: "updated_at",
            type: "timestamp",
            default: "now()",
          },
        ],
      })
    );

    await queryRunner.createForeignKeys("personalmedicine", [
      new TableForeignKey({
        name: "medicineUser",
        columnNames: ["user_id"],
        referencedColumnNames: ["id"],
        referencedTableName: "users",
        onDelete: "NO ACTION",
        onUpdate: "CASCADE",
      }),
      new TableForeignKey({
        name: "personalMedicneToMedicine",
        columnNames: ["medicine_id"],
        referencedColumnNames: ["id"],
        referencedTableName: "medicine",
        onDelete: "NO ACTION",
        onUpdate: "CASCADE",
      }),
    ]);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey("personalmedicine", "medicineUser");
    await queryRunner.dropForeignKey(
      "personalmedicine",
      "personalMedicneToMedicine"
    );

    await queryRunner.dropTable("personalmedicine");
  }
}
