import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class createDoctors1622125774016 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'doctors',
        columns: [
          {
            name: 'id',
            type: 'integer',
            unsigned: true,
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          { name: 'name', type: 'varchar' },
          { name: 'crm', type: 'text' },
          { name: 'phone', type: 'text' },
          { name: 'cellphone', type: 'text' },
          { name: 'cep', type: 'text' },
          { name: 'specialities', type: 'text' },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('doctors');
  }
}
