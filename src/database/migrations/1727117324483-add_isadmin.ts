import { MigrationInterface, QueryRunner } from "typeorm";

export class AddIsadmin1727117324483 implements MigrationInterface {
    name = 'AddIsadmin1727117324483'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "isAdmin" boolean NOT NULL DEFAULT false`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "isAdmin"`);
    }

}
