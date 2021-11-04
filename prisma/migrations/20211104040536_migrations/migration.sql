-- CreateTable
CREATE TABLE "userInfo" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "userName" TEXT NOT NULL,
    "emailAddress" TEXT NOT NULL,
    "avatar" TEXT NOT NULL
);

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

-- CreateTable
CREATE TABLE "ClassInfo" (
    "classId" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "classType" TEXT NOT NULL,
    "classLevel" TEXT NOT NULL,
    "classTime" DATETIME NOT NULL,
    "classLocation" TEXT NOT NULL,
    "userInfoId" INTEGER,
    CONSTRAINT "ClassInfo_userInfoId_fkey" FOREIGN KEY ("userInfoId") REFERENCES "userInfo" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "EventInfo" (
    "eventId" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "eventName" TEXT NOT NULL,
    "eventTime" DATETIME NOT NULL,
    "eventLocation" TEXT NOT NULL,
    "eventInfo" TEXT NOT NULL,
    "userInfoId" INTEGER NOT NULL,
    CONSTRAINT "EventInfo_userInfoId_fkey" FOREIGN KEY ("userInfoId") REFERENCES "userInfo" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
