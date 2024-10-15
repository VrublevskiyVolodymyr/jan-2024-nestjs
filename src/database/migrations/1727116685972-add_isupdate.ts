import { MigrationInterface, QueryRunner } from "typeorm";

export class AddIsupdate1727116685972 implements MigrationInterface {
    name = 'AddIsupdate1727116685972'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "isUpdated" boolean NOT NULL DEFAULT false`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "isUpdated"`);
    }

}
