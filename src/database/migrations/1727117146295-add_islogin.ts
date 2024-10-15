import { MigrationInterface, QueryRunner } from "typeorm";

export class AddIslogin1727117146295 implements MigrationInterface {
    name = 'AddIslogin1727117146295'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "isLogin" boolean NOT NULL DEFAULT false`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "isLogin"`);
    }

}
