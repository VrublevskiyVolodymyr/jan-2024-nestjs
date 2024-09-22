import { MigrationInterface, QueryRunner } from "typeorm";

export class AddIsUpdated1726952023783 implements MigrationInterface {
    name = 'AddIsUpdated1726952023783'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "isUpdated" boolean NOT NULL DEFAULT false`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "isUpdated"`);
    }

}
