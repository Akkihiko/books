/*
  Warnings:

  - You are about to drop the `Category` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the column `categoryId` on the `Book` table. All the data in the column will be lost.
  - Added the required column `genre` to the `Book` table without a default value. This is not possible if the table is not empty.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Category";
PRAGMA foreign_keys=on;

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Book" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "shortDescription" TEXT NOT NULL,
    "publishedAt" TEXT NOT NULL,
    "genre" TEXT NOT NULL
);
INSERT INTO "new_Book" ("author", "id", "publishedAt", "shortDescription", "title") SELECT "author", "id", "publishedAt", "shortDescription", "title" FROM "Book";
DROP TABLE "Book";
ALTER TABLE "new_Book" RENAME TO "Book";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
