import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTableNotes1660604369058 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'notes',
      columns: [
        {
          name: 'id',
          type: 'int',
          isPrimary: true,
          isGenerated: true,
          isNullable: false
        },
        {
          name: 'description',
          type: 'varchar',
          length: '100',
          isNullable: false
        },
        {
          name: 'value',
          type: 'int',
          isNullable: false
        }
      ]
    }));
  };

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('notes', true, true, true);
  };
};