/*
  Warnings:

  - You are about to drop the column `courseID` on the `Course` table. All the data in the column will be lost.
  - You are about to drop the column `courseName` on the `Course` table. All the data in the column will be lost.
  - Added the required column `name` to the `Course` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Course" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "code" TEXT,
    "name" TEXT NOT NULL,
    "category" TEXT,
    "description" TEXT,
    "instructor" TEXT,
    "instructorId" TEXT,
    "openForRegistration" BOOLEAN NOT NULL DEFAULT true,
    "status" TEXT NOT NULL DEFAULT 'open',
    "availableSeats" INTEGER NOT NULL DEFAULT 0,
    "prerequisites" JSONB,
    CONSTRAINT "Course_instructorId_fkey" FOREIGN KEY ("instructorId") REFERENCES "Instructor" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Course" ("availableSeats", "category", "code", "description", "id", "instructor", "instructorId", "openForRegistration", "prerequisites", "status") SELECT "availableSeats", "category", "code", "description", "id", "instructor", "instructorId", "openForRegistration", "prerequisites", "status" FROM "Course";
DROP TABLE "Course";
ALTER TABLE "new_Course" RENAME TO "Course";
CREATE UNIQUE INDEX "Course_code_key" ON "Course"("code");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
