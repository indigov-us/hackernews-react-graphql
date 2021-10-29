/*
  Warnings:

  - You are about to drop the column `text` on the `Tag` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Tag" DROP COLUMN "text",
ADD COLUMN     "label" TEXT NOT NULL DEFAULT E'',
ADD COLUMN     "value" TEXT NOT NULL DEFAULT E'';
