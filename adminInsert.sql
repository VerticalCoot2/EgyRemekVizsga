
CREATE TABLE `adminInsert` (
  `id` int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `Name` varchar(255) NOT NULL,
  `Calories` smallint(6) NOT NULL,
  `Fat_g_` decimal(20,6) DEFAULT NULL,
  `Protein_g_` decimal(20,6) DEFAULT NULL,
  `Carbohydrate_g_` decimal(20,6) DEFAULT NULL,
  `Sugars_g_` varchar(10) DEFAULT NULL,
  `Fiber_g_` varchar(10) DEFAULT NULL,
  `_200_Calorie_Weight_g_` varchar(10) DEFAULT NULL
)