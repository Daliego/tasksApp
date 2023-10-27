import { MigrationInterface, QueryRunner } from "typeorm";

export class PrimaryGeneratedColumnMigration1698398672567 implements MigrationInterface {
    name = 'PrimaryGeneratedColumnMigration1698398672567'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "task" DROP CONSTRAINT "FK_f316d3fe53497d4d8a2957db8b9"`);
        await queryRunner.query(`ALTER TABLE "task" DROP CONSTRAINT "PK_fb213f79ee45060ba925ecd576e"`);
        await queryRunner.query(`ALTER TABLE "task" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "task" ADD "id" SERIAL NOT NULL`);
        await queryRunner.query(`ALTER TABLE "task" ADD CONSTRAINT "PK_fb213f79ee45060ba925ecd576e" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "task" DROP COLUMN "userId"`);
        await queryRunner.query(`ALTER TABLE "task" ADD "userId" integer`);
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "PK_cace4a159ff9f2512dd42373760"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "id" SERIAL NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "task" ADD CONSTRAINT "FK_f316d3fe53497d4d8a2957db8b9" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "task" DROP CONSTRAINT "FK_f316d3fe53497d4d8a2957db8b9"`);
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "PK_cace4a159ff9f2512dd42373760"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "id" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "task" DROP COLUMN "userId"`);
        await queryRunner.query(`ALTER TABLE "task" ADD "userId" character varying`);
        await queryRunner.query(`ALTER TABLE "task" DROP CONSTRAINT "PK_fb213f79ee45060ba925ecd576e"`);
        await queryRunner.query(`ALTER TABLE "task" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "task" ADD "id" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "task" ADD CONSTRAINT "PK_fb213f79ee45060ba925ecd576e" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "task" ADD CONSTRAINT "FK_f316d3fe53497d4d8a2957db8b9" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
