import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CreateTableGrades1660604369058 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'user_grade',
      columns: [
        {
          name: 'id',
          type: 'int',
          isPrimary: true,
          isGenerated: true,
          isNullable: false
        },
        {
          name: 'user_id',
          type: 'int',
          isNullable: false
        },
        {
          name: 'value',
          type: 'int',
          isNullable: false
        }
      ],
      foreignKeys:[
        new TableForeignKey({
          referencedTableName:'user',
          columnNames:['user_id'],
          referencedColumnNames:['id']
        })
      ]
    }));
  };

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('notes', true, true, true);
  };
};