import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CreateTableUser1659567561005 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'user',
      columns: [
        {
          name: 'id',
          type: 'int',
          isPrimary: true,
          isGenerated: true,
          isNullable: false
        },
        {
          name: 'name',
          type: 'varchar',
          length: '100',
          isNullable: false
        },
        {
          name: 'email',
          type: 'varchar',
          length: '100',
          isNullable: false
        },
        {
          name: 'password',
          type: 'varchar',
          length: '100',
          isNullable: false
        }
      ]
    }));
  };

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('user', true, true, true);
  };
};