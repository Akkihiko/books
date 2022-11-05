/*
  Warnings:

  - You are about to drop the column `description` on the `Book` table. All the data in the column will be lost.
  - Added the required column `shortDescription` to the `Book` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Book" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "shortDescription" TEXT NOT NULL,
    "publishedAt" TEXT NOT NULL,
    "categoryId" TEXT,
    CONSTRAINT "Book_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Book" ("author", "categoryId", "id", "publishedAt", "title") SELECT "author", "categoryId", "id", "publishedAt", "title" FROM "Book";
DROP TABLE "Book";
ALTER TABLE "new_Book" RENAME TO "Book";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
