-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Course" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "courseID" TEXT NOT NULL,
    "courseName" TEXT NOT NULL,
    "code" TEXT,
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
INSERT INTO "new_Course" ("courseID", "courseName", "id") SELECT "courseID", "courseName", "id" FROM "Course";
DROP TABLE "Course";
ALTER TABLE "new_Course" RENAME TO "Course";
CREATE UNIQUE INDEX "Course_courseID_key" ON "Course"("courseID");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
