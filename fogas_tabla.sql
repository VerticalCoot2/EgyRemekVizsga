-- Létrehozzuk a fogás táblát
CREATE TABLE IF NOT EXISTS `fogas` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `fogas_nev` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Létrehozzuk a fogás és étel közötti kapcsolatot tároló táblát
CREATE TABLE IF NOT EXISTS `fogas_etel` (
  `fogas_id` INT(11) NOT NULL,
  `etel_id` INT(11) NOT NULL,
  FOREIGN KEY (`fogas_id`) REFERENCES `fogas`(`id`),
  FOREIGN KEY (`etel_id`) REFERENCES `vizsgadb`(`id`),
  PRIMARY KEY (`fogas_id`, `etel_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Példa fogás hozzáadása
INSERT INTO `fogas` (`fogas_nev`) 
VALUES ('Első fogás');

-- Példa étel hozzárendelése a fogáshoz
INSERT INTO `fogas_etel` (`fogas_id`, `etel_id`) 
VALUES (1, 1), 
       (1, 2), 
       (1, 3);

-- Lekérdezés, hogy az 1-es számú fogás mely ételeket tartalmaz
SELECT f.fogas_nev, v.Name AS etel_nev
FROM fogas f
JOIN fogas_etel fe ON f.id = fe.fogas_id
JOIN vizsgadb v ON fe.etel_id = v.id
WHERE f.id = 1;