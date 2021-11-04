-- CreateTable
CREATE TABLE "studioInfo" (
    "studioId" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "studioName" TEXT NOT NULL,
    "studioAddress" TEXT NOT NULL,
    "studioEmail" TEXT NOT NULL,
    "studioPhone" INTEGER NOT NULL,
    "ClassTypeOffered" TEXT NOT NULL,
    "schoolAgeLevelsOffered" TEXT NOT NULL,
    "adultLevelsOffered" TEXT NOT NULL,
    "openClassesOffered" TEXT NOT NULL
);
