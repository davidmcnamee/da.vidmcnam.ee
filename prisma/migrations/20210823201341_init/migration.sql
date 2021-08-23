-- CreateTable
CREATE TABLE `VisitLog` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `ip` VARCHAR(191),
    `userAgent` VARCHAR(191),
    `referrer` VARCHAR(191),
    `themePreference` VARCHAR(191),
    `naturalThemePreference` VARCHAR(191),
    `headers` VARCHAR(191),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
