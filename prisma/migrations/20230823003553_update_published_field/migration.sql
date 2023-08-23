/*
  Warnings:

  - You are about to drop the column `private` on the `Link` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Note" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "name" TEXT NOT NULL,
    "history" TEXT NOT NULL,
    "tags" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "published" BOOLEAN NOT NULL DEFAULT false,
    "publishedURL" TEXT NOT NULL,
    "heroImage" TEXT NOT NULL,
    "thumbnailImage" TEXT NOT NULL,
    "publishDate" DATETIME NOT NULL,
    "publishUpdated" DATETIME NOT NULL
);
INSERT INTO "new_Note" ("category", "content", "createdAt", "heroImage", "history", "id", "name", "publishDate", "publishUpdated", "published", "publishedURL", "tags", "thumbnailImage", "updatedAt") SELECT "category", "content", "createdAt", "heroImage", "history", "id", "name", "publishDate", "publishUpdated", "published", "publishedURL", "tags", "thumbnailImage", "updatedAt" FROM "Note";
DROP TABLE "Note";
ALTER TABLE "new_Note" RENAME TO "Note";
CREATE TABLE "new_Link" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "name" TEXT NOT NULL,
    "history" TEXT NOT NULL,
    "tags" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "published" BOOLEAN NOT NULL DEFAULT false
);
INSERT INTO "new_Link" ("category", "content", "createdAt", "history", "id", "image", "name", "tags", "updatedAt", "url") SELECT "category", "content", "createdAt", "history", "id", "image", "name", "tags", "updatedAt", "url" FROM "Link";
DROP TABLE "Link";
ALTER TABLE "new_Link" RENAME TO "Link";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
