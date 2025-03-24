SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

CREATE DATABASE IF NOT EXISTS `eteldb` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `eteldb`;

CREATE TABLE `etelek` (
  `id` int(11) AUTO_INCREMENT NOT NULL,
  `nev` varchar(255) NOT NULL,
  `kaloria` int(11) NOT NULL,
  `etkezes_típus` varchar(50) DEFAULT NULL,
  `recept_link` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `etelek` (`id`, `nev`, `kaloria`, `etkezes_típus`, `recept_link`) VALUES
('Zöldséges csirkeragu', 450, 'Ebéd', 'https://www.nosalty.hu/recept/zoldseges-csirkeragu'),
('Rakott krumpli', 600, 'Ebéd', 'https://www.nosalty.hu/recept/rakott-krumpli'),
('Zöldségfasírt', 250, 'Vacsora', 'https://www.nosalty.hu/recept/zoldsegfasirt'),
('Túrós csusza', 700, 'Ebéd', 'https://www.nosalty.hu/recept/turos-csusza'),
('Szilvás gombóc', 400, 'Desszert', 'https://www.nosalty.hu/recept/szilvas-gomboc'),
('Cézár saláta', 350, 'Ebéd', 'https://www.nosalty.hu/recept/cezar-salata'),
('Káposztás tészta', 550, 'Ebéd', 'https://www.nosalty.hu/recept/kaposztas-teszta'),
('Hummusz', 200, 'Snack', 'https://www.nosalty.hu/recept/hummusz'),
('Almás pité', 350, 'Desszert', 'https://www.nosalty.hu/recept/almas-pite'),
('Gulyásleves', 700, 'Ebéd', 'https://www.nosalty.hu/recept/gulyasleves'),
('Sült édesburgonya', 200, 'Vacsora', 'https://www.nosalty.hu/recept/sult-edesburgonya'),
('Avokádó saláta', 250, 'Snack', 'https://www.nosalty.hu/recept/avokado-salata'),
('Pikáns csirkeszárnyak', 400, 'Vacsora', 'https://www.nosalty.hu/recept/pikans-csirkeszarnyak'),
('Lazacos spagetti', 500, 'Ebéd', 'https://www.nosalty.hu/recept/lazacos-spagetti'),
('Kínai tojásos rizs', 400, 'Ebéd', 'https://www.nosalty.hu/recept/kínai-tojásos-rizs'),
('Túrós rakott palacsinta', 400, 'Desszert', 'https://www.nosalty.hu/recept/turos-rakott-palacsinta'),
('Fasírt', 300, 'Ebéd', 'https://www.nosalty.hu/recept/fasirt'),
('Tojásos nokedli', 400, 'Ebéd', 'https://www.nosalty.hu/recept/tojasos-nokedli'),
('Sajtos túrós pogácsa', 250, 'Snack', 'https://www.nosalty.hu/recept/sajtos-turos-pogacsa'),
('Paradicsomos rakott tészta', 650, 'Ebéd', 'https://www.nosalty.hu/recept/paradicsomos-rakott-teszta'),
('Fűszeres csirkecomb', 450, 'Vacsora', 'https://www.nosalty.hu/recept/fuszeres-csirkecomb'),
('Csokis muffin', 400, 'Desszert', 'https://www.nosalty.hu/recept/csokis-muffin'),
('Francia hagymaleves', 350, 'Vacsora', 'https://www.nosalty.hu/recept/francia-hagymaleves'),
('Körtés pite', 400, 'Desszert', 'https://www.nosalty.hu/recept/kortes-pite'),
('Pizzás csiga', 350, 'Snack', 'https://www.nosalty.hu/recept/pizzas-csiga'),
('Tejfölös burgonya', 400, 'Vacsora', 'https://www.nosalty.hu/recept/tejfolos-burgonya'),
('Töltött káposzta', 700, 'Ebéd', 'https://www.nosalty.hu/recept/toltott-kaposzta');


/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
