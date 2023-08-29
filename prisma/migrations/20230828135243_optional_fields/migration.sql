-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Task" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "name" TEXT NOT NULL,
    "history" TEXT NOT NULL DEFAULT 'tbd',
    "tags" TEXT,
    "content" TEXT,
    "status" TEXT,
    "dueDate" DATETIME
);
INSERT INTO "new_Task" ("content", "createdAt", "dueDate", "history", "id", "name", "status", "tags", "updatedAt") SELECT "content", "createdAt", "dueDate", "history", "id", "name", "status", "tags", "updatedAt" FROM "Task";
DROP TABLE "Task";
ALTER TABLE "new_Task" RENAME TO "Task";
CREATE TABLE "new_Link" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "name" TEXT NOT NULL,
    "history" TEXT NOT NULL DEFAULT 'tbd',
    "tags" TEXT,
    "content" TEXT,
    "url" TEXT NOT NULL,
    "category" TEXT,
    "image" TEXT,
    "published" BOOLEAN NOT NULL DEFAULT false
);
INSERT INTO "new_Link" ("category", "content", "createdAt", "history", "id", "image", "name", "published", "tags", "updatedAt", "url") SELECT "category", "content", "createdAt", "history", "id", "image", "name", "published", "tags", "updatedAt", "url" FROM "Link";
DROP TABLE "Link";
ALTER TABLE "new_Link" RENAME TO "Link";
CREATE TABLE "new_Person" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "name" TEXT NOT NULL,
    "history" TEXT NOT NULL DEFAULT 'tbd',
    "tags" TEXT,
    "content" TEXT,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "phone" TEXT,
    "email" TEXT,
    "address" TEXT
);
INSERT INTO "new_Person" ("address", "content", "createdAt", "email", "firstName", "history", "id", "lastName", "name", "phone", "tags", "updatedAt") SELECT "address", "content", "createdAt", "email", "firstName", "history", "id", "lastName", "name", "phone", "tags", "updatedAt" FROM "Person";
DROP TABLE "Person";
ALTER TABLE "new_Person" RENAME TO "Person";
CREATE UNIQUE INDEX "Person_phone_key" ON "Person"("phone");
CREATE UNIQUE INDEX "Person_email_key" ON "Person"("email");
CREATE TABLE "new_Event" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "name" TEXT NOT NULL,
    "history" TEXT NOT NULL DEFAULT 'tbd',
    "tags" TEXT,
    "content" TEXT,
    "allDay" BOOLEAN NOT NULL DEFAULT false,
    "start" DATETIME NOT NULL,
    "end" DATETIME NOT NULL,
    "type" TEXT,
    "image" TEXT
);
INSERT INTO "new_Event" ("allDay", "content", "createdAt", "end", "history", "id", "image", "name", "start", "tags", "type", "updatedAt") SELECT "allDay", "content", "createdAt", "end", "history", "id", "image", "name", "start", "tags", "type", "updatedAt" FROM "Event";
DROP TABLE "Event";
ALTER TABLE "new_Event" RENAME TO "Event";
CREATE TABLE "new_Note" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "name" TEXT NOT NULL,
    "history" TEXT NOT NULL DEFAULT 'tbd',
    "tags" TEXT,
    "content" TEXT,
    "category" TEXT,
    "published" BOOLEAN NOT NULL DEFAULT false,
    "publishedURL" TEXT,
    "heroImage" TEXT,
    "thumbnailImage" TEXT,
    "publishDate" DATETIME,
    "publishUpdated" DATETIME
);
INSERT INTO "new_Note" ("category", "content", "createdAt", "heroImage", "history", "id", "name", "publishDate", "publishUpdated", "published", "publishedURL", "tags", "thumbnailImage", "updatedAt") SELECT "category", "content", "createdAt", "heroImage", "history", "id", "name", "publishDate", "publishUpdated", "published", "publishedURL", "tags", "thumbnailImage", "updatedAt" FROM "Note";
DROP TABLE "Note";
ALTER TABLE "new_Note" RENAME TO "Note";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
