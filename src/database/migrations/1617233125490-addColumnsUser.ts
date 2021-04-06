import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class addColumnsUser1617233125490 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumns("users", [
      new TableColumn({
        name: "latitude",
        type: "varchar",
        isNullable: true,
      }),
      new TableColumn({
        name: "longitude",
        type: "varchar",
        isNullable: true,
      }),
      new TableColumn({
        name: "type",
        type: "varchar",
        comment: "0 - Usuário; 1 - Fármacia",
      }),
    ]);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn("users", "latitude");
    await queryRunner.dropColumn("users", "longitude");
    await queryRunner.dropColumn("users", "type");
  }
}
