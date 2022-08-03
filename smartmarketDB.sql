CREATE DATABASE  IF NOT EXISTS `bdsmartmarket` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;
USE `bdsmartmarket`;
-- MySQL dump 10.13  Distrib 8.0.28, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: bdsmartmarket
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.24-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categories` (
  `categories_id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) CHARACTER SET utf8mb4 NOT NULL,
  PRIMARY KEY (`categories_id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

INSERT INTO `bdsmartmarket`.`categories` (`categories_id`, `name`) VALUES ('1', 'almacen');
INSERT INTO `bdsmartmarket`.`categories` (`categories_id`, `name`) VALUES ('2', 'bebidas');
INSERT INTO `bdsmartmarket`.`categories` (`categories_id`, `name`) VALUES ('3', 'bebidas-con-alcohol');
INSERT INTO `bdsmartmarket`.`categories` (`categories_id`, `name`) VALUES ('4', 'carnes');
INSERT INTO `bdsmartmarket`.`categories` (`categories_id`, `name`) VALUES ('5', 'higiene');
INSERT INTO `bdsmartmarket`.`categories` (`categories_id`, `name`) VALUES ('6', 'lacteos');
INSERT INTO `bdsmartmarket`.`categories` (`categories_id`, `name`) VALUES ('7', 'limpieza');
INSERT INTO `bdsmartmarket`.`categories` (`categories_id`, `name`) VALUES ('8', 'verduleria');

--
-- Table structure for table `order_details`
--


DROP TABLE IF EXISTS `order_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `order_details` (
  `order_details_id` int(11) NOT NULL AUTO_INCREMENT,
  `order_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `total_price` decimal(10,0) NOT NULL,
  PRIMARY KEY (`order_details_id`),
  KEY `order_id` (`order_id`),
  KEY `product_id` (`product_id`),
  CONSTRAINT `order_id` FOREIGN KEY (`order_id`) REFERENCES `orders` (`order_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `product_id` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order_details`
--

LOCK TABLES `order_details` WRITE;
/*!40000 ALTER TABLE `order_details` DISABLE KEYS */;
/*!40000 ALTER TABLE `order_details` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders`
--


DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orders` (
  `order_id` int(11) NOT NULL AUTO_INCREMENT,
  `users_id` int(11) NOT NULL,
  `order_address` varchar(80) CHARACTER SET utf8mb4 NOT NULL,
  `order_date` date NOT NULL,
  `order_status` varchar(45) CHARACTER SET utf8mb4 NOT NULL,
  PRIMARY KEY (`order_id`),
  KEY `users_id` (`users_id`),
  CONSTRAINT `users_id` FOREIGN KEY (`users_id`) REFERENCES `users` (`users_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--


DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `categories_id` int(11) NOT NULL,
  `name` varchar(80) CHARACTER SET utf8mb4 NOT NULL,
  `price` decimal(10,0) NOT NULL,
  `descriptions` varchar(300) CHARACTER SET utf8mb4 NOT NULL,
  `image` varchar(300) CHARACTER SET utf8mb4 NOT NULL,
  `stock` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `category_id` (`categories_id`),
  CONSTRAINT `category_id` FOREIGN KEY (`categories_id`) REFERENCES `categories` (`categories_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=185 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

INSERT INTO `bdsmartmarket`.`products` (
    `id`,
    `categories_id`,
    `name`,
    `price`,
    `descriptions`,
    `image`,
    `stock`
)
VALUES
(
  '1',
  '1',
  'Pan de Mesa Lactal',
  '250',
  'Pan De Mesa Blanco Lactal Bsa 500 Grm',
  'pan 1.jpg',
  '0'
 ),
 (
  '2',
  '1',
  'Pan de Mesa Fargo',
  '250',
  'Pan Salvado Plus Chico Fargo Bsa 350 Grm',
  'pan 2.jpg',
  '0'
 ),
 (
  '3',
  '1',
  'Papas Fritas Lays',
  '430',
  'Papas Fritas Clásicas Lays Paq 249 Grm',
  'papas fritas.jpg',
  '0'
 ),
 (
  '4',
  '1',
  'Fideos Lucchetti',
  '70',
  'Tirabuzon LUCCHETTI Paquete 500 Gr',
  'fideos 1.jpg',
  '0'
 ),
 (
  '5',
  '1',
  'Fideos Lucchetti',
  '130',
  'Tirabuzon verduras LUCCHETTI Paquete 500 Gr',
  'fideos 2.jpg',
  '0'
 ),
 (
  '6',
  '1',
  'Fideos La Campagnola',
  '110',
  'Fid.Semola De Trig Tallarin La Campagnola Paq 500 Grm',
  'fideos 3.jpg',
  '0'
 ),
 (
  '7',
  '1',
  'Fideos Lucchetti',
  '100',
  'Coditos LUCCHETTI Paquete 500 Gr',
  'fideos 4.jpg',
  '0'
 ),
 (
  '8',
  '1',
  'Fideos Lucchetti',
  '100',
  'Mostachol LUCCHETTI Paquete 500 Gr',
  'fideos 5.jpg',
  '0'
 ),
 (
  '9',
  '1',
  'Lasagna Matarazzo',
  '260',
  'Lasagna Matarazzo Paq 400 Grm',
  'lasagna.jpg',
  '0'
 ),
 (
  '10',
  '1',
  'Ñoquis La Salteña',
  '400',
  'Ñoquis . La Salteña Ban 900 Grm',
  'ñoquis.jpg',
  '0'
 ),
 (
  '11',
  '1',
  'Capelletini Giacomo',
  '330',
  'Capelletini Verdura Giacomo Paq 500 Grm',
  'capelletini.jpg',
  '0'
 ),
 (
  '12',
  '1',
  'Arroz Ciudad del Lago',
  '100',
  'Arroz Largo Fino CIUDAD DEL LAGO Paquete 1 Kg',
  'arroz 1.jpg',
  '0'
 ),
 (
  '13',
  '1',
  'Arroz Gallo',
  '115',
  'Arroz Largo Fino GALLO Versátil Paquete 1 Kg',
  'arroz 2.jpg',
  '0'
 ),
 (
  '14',
  '1',
  'Arroz Lucchetti',
  '125',
  'Arroz Parboil LUCCHETTI Estuche X1 Kg',
  'arroz 3.jpg',
  '0'
 ),
 (
  '15',
  '1',
  'Arroz Molinos',
  '160',
  'Arroz Integ. . MOLINOS ALA Paq 1 Kgm',
  'arroz 4.jpg',
  '0'
 ),
 (
  '16',
  '1',
  'Harina Favorita',
  '70',
  'Harina Trigo 000 FAVORITA Paq 1 Kgm',
  'harina 1.jpg',
  '0'
 ),
 (
  '17',
  '1',
  'Harina Cañuelas',
  '70',
  'Harina Ultra Refinada Cañuelas Paq 1 Kgm',
  'harina 2.jpg',
  '0'
 ),
 (
  '18',
  '1',
  'Harina Pureza',
  '150',
  'Harina Leudante Ultra Refinada Pureza Paq 1 Kgm',
  'harina 3.jpg',
  '0'
 ),
 (
  '19',
  '1',
  'Galletitas Criollitas',
  '105',
  'Galletitas . Criollitas Paq 300 Grm',
  'galles 1.jpg',
  '0'
 ),
 (
  '20',
  '1',
  'Galletitas OREO',
  '65',
  'Galletitas OREO Mini Clásica 50gr',
  'galles 2.jpg',
  '0'
 ),
 (
  '21',
  '1',
  'Galletitas Chocolinas',
  '105',
  'Gall.Dulces Chocolat Chocolinas Paq 250 Grm',
  'galles 3.jpg',
  '0'
 ),
 (
  '22',
  '1',
  'Galletitas Don Satur',
  '120',
  'Pepas DON SATUR Bsa 300 Grm',
  'galles 4.jpg',
  '0'
 ),
 (
  '23',
  '1',
  'Galletitas Opera',
  '130',
  'Gall.Rellena Opera Opera Pak 220 Grm',
  'galles 5.jpg',
  '0'
 ),
 (
  '24',
  '1',
  'Galletitas Bagley',
  '210',
  'Gall.Dulces Surtido Bagley Paq 390 Grm',
  'galles 6.jpg',
  '0'
 ),
 (
  '25',
  '1',
  'Galletitas Terrabusi',
  '350',
  'Galletitas Terrabusi VARIEDAD Clásica 610grs',
  'galles 7.jpg',
  '0'
 ),
 (
  '26',
  '1',
  'Galletitas 9 de Oro',
  '100',
  'Bizcochos Clásicos 9 De Oro Paq 215 Grm',
  'galles 8.jpg',
  '0'
 ),
 (
  '27',
  '1',
  'Galletitas 9 de Oro',
  '100',
  'Bizcochos Agridulces 9 De Oro Paq 215 Grm',
  'galles 9.jpg',
  '0'
 ),
 (
  '28',
  '1',
  'Galletitas Oreo',
  '430',
  'Galletitas Rellena Veggie Tripack Oreo Paq 354 Grm',
  'galles 10.jpg',
  '0'
 ),
 (
  '29',
  '1',
  'Chocolate Milka Oreo',
  '530',
  'Chocolate Milka Oreo 100grm',
  'chocolate.jpg',
  '0'
 ),
 (
  '30',
  '1',
  'Chocolate Milka',
  '450',
  'Chocolate Con Almendras Milka Fwp 110 Grm',
  'chocolate 2.jpg',
  '0'
 ),
 (
  '31',
  '1',
  'Alfajor Milka',
  '100',
  'Alfajor MILKA Chocolate 70 Gr X 1 Uni',
  'chocolate 3.jpg',
  '0'
 ),
 (
  '32',
  '1',
  'Chocolate Milka',
  '230',
  'Chocolate MILKA C/ Dulce De Leche Tab 67.5 Grm',
  'chocolate 4.jpg',
  '0'
 ),
 (
  '33',
  '1',
  'Turron Mani Arcor',
  '30',
  'Turron Mani ARCOR Paq 25 Grm',
  'turron.jpg',
  '0'
 ),
 (
  '34',
  '1',
  'Gomitas Mogul',
  '70',
  'Pastillas De Goma Rodajas Ácidas Mogul Fwp 50 Grm',
  'gomitas.jpg',
  '0'
 ),
 (
  '35',
  '1',
  'Alfajor Bon o Bon',
  '70',
  'Alfajor Bon O Bon 40 Gr X 1 Uni',
  'alfajor.jpg',
  '0'
 ),
 (
  '36',
  '1',
  'Sugus Confitados',
  '100',
  'Caramelos Sugus Confitados Est 50 Grm',
  'confites.jpg',
  '0'
 ),
 (
  '37',
  '1',
  'Yerba Mate Amanda',
  '180',
  'Yerba Mate AMANDA Paquete 500 Gr',
  'yerba 1.jpg',
  '0'
 ),
 (
  '38',
  '1',
  'Yerba Mate Cruz de Malta',
  '220',
  'Yerba Mate CRUZ DE MALTA Con Palo Paquete 500 Gr',
  'yerba 2.jpg',
  '0'
 ),
 (
  '39',
  '1',
  'Yerba Mate Mañanita',
  '230',
  'Yerba Mate 4 Flex MAÑANITA 1 Kg',
  'yerba 3.jpg',
  '0'
 ),
 (
  '40',
  '1',
  'Café Arlistan',
  '230',
  'Café Instantaneo Torrado Selección Arlistan Fra 50 Grm',
  'cafe 1.jpg',
  '0'
 ),
 (
  '41',
  '1',
  'Café La Virginia',
  '310',
  'Café Molido LA VIRGINIA Paquete 250 Gr',
  'cafe 2.jpg',
  '0'
 ),
 (
  '42',
  '1',
  'Café Nescafe',
  '750',
  'Cafe Instantaneo Suave Nescafe Fra 100 Grm',
  'cafe 3.jpg',
  '0'
 ),
 (
  '43',
  '1',
  'Té Taragui',
  '300',
  'Te X100 Saq Filtr Taragui Est 100 Uni',
  'te 1.jpg',
  '0'
 ),
 (
  '44',
  '1',
  'Té La Virginia',
  '130',
  'Te Verde Citrus LA VIRGINIA Est 20 Uni',
  'te 2.jpg',
  '0'
 ),
 (
  '45',
  '1',
  'Té Virgin Islands',
  '100',
  'Te Clasico Virgin Islands Est 25 Saq',
  'te 3.jpg',
  '0'
 ),
 (
  '46',
  '1',
  'Cereal Bocaditos Granix',
  '250',
  'Cer.Avena Bocaditos Rell Granix Pou 180 Grm',
  'cereal 1.jpg',
  '0'
 ),
 (
  '47',
  '1',
  'Cereal Zucaritas Kellogs',
  '710',
  'Cereal Kelloggs Zucaritas Est 730 Grm',
  'cereal 2.jpg',
  '0'
 ),
 (
  '48',
  '1',
  'Atún Ciudad del Lago',
  '110',
  'Atún Al Natural CIUDAD DEL LAGO Desmenuzado 170 Gr',
  'atun.jpg',
  '0'
 ),
 (
  '49',
  '1',
  'Arvejas Coto',
  '210',
  'Arvejas . Coto Bsa 300 Grm',
  'arvejas.jpg',
  '0'
 ),
 (
  '50',
  '1',
  'Mayonesa Natura',
  '150',
  'Mayonesa NATURA Pouch 475 Gr',
  'mayonesa.jpg',
  '0'
 ),
 (
  '51',
  '1',
  'Mostaza Natura',
  '90',
  'Mostaza NATURA Pouch 250 Gr',
  'mostaza.jpg',
  '0'
 ),
 (
  '52',
  '1',
  'Ketchup Natura',
  '100',
  'Ketchup NATURA Pouch 250 Gr',
  'ketchup.jpg',
  '0'
 ),
 (
  '53',
  '1',
  'Chimichurri La Parmesana',
  '110',
  'Salsa Chimichurri LA PARMESANA Pet 300 Ml',
  'chimi.jpg',
  '0'
 ),
 (
  '54',
  '1',
  'Aceite de Girasol Cocinero',
  '300',
  'Aceite Girasol Plus Omega 9 Cocinero Pet 900 Ml',
  'aceite.jpg',
  '0'
 ),
 (
  '55',
  '1',
  'Aceite de Oliva Cañuelas',
  '430',
  'Aceite Oliva Extra Virgen CAÑUELAS Intenso 500 Ml',
  'aceite 2.jpg',
  '0'
 ),
 (
  '56',
  '1',
  'Sal fina Dos Anclas',
  '50',
  'Sal Fina . Dos Anclas Paq 500 Grm',
  'sal.jpg',
  '0'
 ),
 (
  '57',
  '3',
  'Schneider',
  '136',
  'Cerveza Schneider 1lt. Lager',
  'schneider 150.jpg',
  '0'
 ),
 (
  '58',
  '3',
  'Heineken',
  '327',
  'Cerveza Heineken 1lt. Lager',
  'heineken 340.jpg',
  '0'
 ),
 (
  '59',
  '3',
  'Stella Artois',
  '365',
  'Cerveza Stella Artois 1lt. Lager',
  'stella 380.jpg',
  '0'
 ),
 (
  '60',
  '3',
  'Saint Felicien',
  '1754',
  'Vino tinto, malbec. Saint Felicien 750cc',
  'saint felic malbec 750 cc 1890.jpg',
  '0'
 ),
 (
  '61',
  '3',
  'Portillo',
  '515',
  'Vino blanco, chardonnay. Portillo 750cc',
  'portillo blanco 750cc 530 chardonnay.jpg',
  '0'
 ),
 (
  '62',
  '3',
  'Fernet Branca',
  '869',
  'Fernet Branca 750cc',
  'fernet 750cc 970.jpg',
  '0'
 ),
 (
  '63',
  '3',
  'Bombay Sapphire',
  '3015',
  'Gin Bombay Sapphire 750cc',
  'gin 750cc 3050.jpg',
  '0'
 ),
 (
  '64',
  '3',
  'Tanqueray',
  '2783',
  'Gin Tanqueray 700cc',
  'tanqueray 700cc 2900.jpg',
  '0'
 ),
 (
  '65',
  '3',
  'Corona',
  '345',
  'Cerveza Corona 710cc',
  'corona 710cc 365.jpg',
  '0'
 ),
 (
  '66',
  '3',
  'Bacardí',
  '1239',
  'Ron Bacardí Oro 750cc',
  'ron oro 750cc 1300.jpg',
  '0'
 ),
 (
  '67',
  '2',
  'Coca-Cola',
  '250',
  'Gaseosa Coca 2.25lts Sabor Cola',
  'coca 2.25.png',
  '0'
 ),
 (
  '68',
  '2',
  'Coca-Cola Light',
  '250',
  'Gaseosa Coca 2.25lts Sabor Cola sin azucares',
  'Coca light 2.25.png',
  '0'
 ),
 (
  '69',
  '2',
  'Fanta',
  '230',
  'Gaseosa Fanta 2.25lts Sabor Naranja',
  'fanta 2.25.png',
  '0'
 ),
 (
  '70',
  '2',
  'Fanta Light',
  '230',
  'Gaseosa Fanta 2.25lts Sabor Naranja. Sin azúcares',
  'fanta light 2.25.png',
  '0'
 ),
 (
  '71',
  '2',
  'Sprite',
  '230',
  'Gaseosa Sprite 2.25lts Sabor Lima Limón',
  'sprite 2.25.png',
  '0'
 ),
 (
  '72',
  '2',
  'Sprite Light',
  '230',
  'Gaseosa Sprite 2.25lts Sabor Lima Limón. Sin azúcares',
  'sprite light 2.25.png',
  '0'
 ),
 (
  '73',
  '2',
  'Pepsi',
  '245',
  'Gaseosa Pepsi 2.25lts Sabor Cola',
  'pepsi 2.25.png',
  '0'
 ),
 (
  '74',
  '2',
  'Pepsi Light',
  '245',
  'Gaseosa Pepsi 2.25lts Sabor Cola. Sin azúcares',
  'pepsi light 2.25.png',
  '0'
 ),
 (
  '75',
  '4',
  'Roast Beef',
  '815',
  'Roast Beef Estancias Coto X KG',
  'carne 1.jpg',
  '0'
 ),
 (
  '76',
  '4',
  'Tapa de Asado',
  '890',
  'Tapa De Asado Especial X KG',
  'carne 2.jpg',
  '0'
 ),
 (
  '77',
  '4',
  'Tapa de Nalga',
  '930',
  'Tapa De Nalga Estancias Coto X KG',
  'carne 3.jpg',
  '0'
 ),
 (
  '78',
  '4',
  'Asado',
  '1000',
  'Asado Del Medio Estancias Coto X KG',
  'carne 4.jpg',
  '0'
 ),
 (
  '79',
  '4',
  'Picanha',
  '1000',
  'Picanha Estancias Coto X Kg',
  'carne 5.jpg',
  '0'
 ),
 (
  '80',
  '4',
  'Vacio',
  '1125',
  'Vacío Del Centro Estancias Coto X KG',
  'carne 6.jpg',
  '0'
 ),
 (
  '81',
  '4',
  'Carne Picada',
  '1200',
  'Picada Desgrasada Estancias Coto X KG',
  'carne 7.jpg',
  '0'
 ),
 (
  '82',
  '4',
  'Entraña',
  '1045',
  'Entraña Estancias Coto X KG',
  'carne 8.jpg',
  '0'
 ),
 (
  '83',
  '4',
  'Lomo',
  '1225',
  'Lomo Estancias Coto X KG',
  'carne 9.jpg',
  '0'
 ),
 (
  '84',
  '4',
  'Cuadril',
  '925',
  'Cuadril Selección X KG',
  'carne 10.jpg',
  '0'
 ),
 (
  '85',
  '4',
  'Costillar de Cordero',
  '830',
  'Costillar De Cordero Congelado X Kg',
  'cordero 1.jpg',
  '0'
 ),
 (
  '86',
  '4',
  'Carré de Cerdo',
  '860',
  'Carré De Cerdo Deshuesado Finas Hierbas X KG',
  'cerdo 1.jpg',
  '0'
 ),
 (
  '87',
  '4',
  'Chorizo de Cerdo',
  '900',
  'Chorizo De Cerdo COTO Envasado Al Vacio X Kg',
  'cerdo 2.jpg',
  '0'
 ),
 (
  '88',
  '4',
  'Bondiola de Cerdo',
  '875',
  'Bondiola De Cerdo Finas Hierbas X KG',
  'cerdo 3.jpg',
  '0'
 ),
 (
  '89',
  '4',
  'Molleja',
  '1230',
  'Molleja X KG',
  'cerdo 4.jpg',
  '0'
 ),
 (
  '90',
  '4',
  'Maicere de Cerdo',
  '930',
  'Matambre De Cerdo X KG',
  'cerdo 5.jpg',
  '0'
 ),
 (
  '91',
  '4',
  'Bola de Lomo de Cerdo',
  '750',
  'Bola De Lomo De Cerdo X KG',
  'cerdo 6.jpg',
  '0'
 ),
 (
  '92',
  '4',
  'Pollo entero',
  '800',
  'Pollo Entero Fresco X Uni 3 Kg',
  'pollo 1.jpg',
  '0'
 ),
 (
  '93',
  '4',
  'Medallones de Pollo y Espinaca',
  '830',
  'Medallones Pollo Y Espinaca Coto X Kg',
  'pollo 2.jpg',
  '0'
 ),
 (
  '94',
  '4',
  'Pechuga con Piel',
  '820',
  'Pechuga Con Piel X Uni (1.5 Kg) Refrigerados',
  'pollo 3.jpg',
  '0'
 ),
 (
  '95',
  '4',
  'Suprema sin Piel',
  '800',
  'Suprema Sin Piel X Kg Congelado',
  'pollo 4.jpg',
  '0'
 ),
 (
  '96',
  '4',
  'Suprema JyQ',
  '640',
  'Supremas Jamón Y Queso Coto X Kg',
  'pollo 5.jpg',
  '0'
 ),
 (
  '97',
  '5',
  'P.Higiénico Campanita',
  '305',
  'Papel higiénico Campanita 80mts x 4',
  'papel.jpg',
  '0'
 ),
 (
  '98',
  '5',
  'P.Higiénico Higienol',
  '550',
  'Papel higiénico Higienol Dúo 50mts x 4',
  'papel 2.jpg',
  '0'
 ),
 (
  '99',
  '5',
  'Rollo cocina Elite',
  '210',
  'Rollo de cocina Elite D/H 2 Uni.',
  'rollo cocina.jpg',
  '0'
 ),
 (
  '100',
  '5',
  'Cepillo dental Colgate',
  '70',
  'Cepillo dental Colgate Essential Clean suave 1 Uni.',
  'cepillo dientes 2.jpg',
  '0'
 ),
 (
  '101',
  '5',
  'Cepillo dental Colgate',
  '185',
  'Cepillo dental Colgate zig-zag suave 2 Uni.',
  'cepillo dientes.jpg',
  '0'
 ),
 (
  '102',
  '5',
  'Crema Dental Colgate',
  '110',
  'Crema dental Colgate Triple Acción Xtra blancura 50g.',
  'pasta dental.jpg',
  '0'
 ),
 (
  '103',
  '5',
  'Creiceental Sensodyne',
  '265',
  'Crema dental Sensodyne Original 50g.',
  'pasta dental 2.jpg',
  '0'
 ),
 (
  '104',
  '5',
  'Desodorante Rexona Men',
  '300',
  'Des. Antitranspirante Rexona Xtracool aerosol 150ml',
  'desodorante hom.jpg',
  '0'
 ),
 (
  '105',
  '5',
  'Desodorante Rexona Women',
  '355',
  'Desodorante Antitranspirante Rexona en aerosol 110ml',
  'desodorante muj.jpg',
  '0'
 ),
 (
  '106',
  '5',
  'Jabón en barra Rexona',
  '75',
  'Jabón en barra Rexona cotton 125g',
  'jabon s.jpg',
  '0'
 ),
 (
  '107',
  '5',
  'Jabón en barra Lux',
  '140',
  'Jabón en barra Lux Flor de Vainilla 3 x 135g',
  'jabon s2.jpg',
  '0'
 ),
 (
  '108',
  '5',
  'Jabón Líquido Villeneuve',
  '230',
  'Jabón Líquido Villeneuve Coconut 240ml',
  'jabon l.jpg',
  '0'
 ),
 (
  '109',
  '5',
  'Toallitas Siempre Libre',
  '400',
  'Toallitas Adaptables Ultrafina Siempre Libre 16 Uni',
  'toallitas fem.jpg',
  '0'
 ),
 (
  '110',
  '5',
  'Toallitas Always',
  '365',
  'Toallitas Always protección triple suave 16 Uni',
  'toallitas fem2.jpg',
  '0'
 ),
 (
  '111',
  '6',
  'Leche Ciudad del Lago',
  '100',
  'Leche Larga Vida Entera CIUDAD DEL LAGO Ttb 1 L',
  'leche 1.jpg',
  '0'
 ),
 (
  '112',
  '6',
  'Leche Ciudad del Lago',
  '100',
  'Leche Larga Vida Descremada CIUDAD DEL LAGO Ttb 1 L',
  'leche 2.jpg',
  '0'
 ),
 (
  '113',
  '6',
  'Leche La Serenísima',
  '130',
  'Leche Ent.Lv Vit A/C/D/B9 X La Serenisi Ttb 1 Ltr',
  'leche 3.jpg',
  '0'
 ),
 (
  '114',
  '6',
  'Leche La Serenísima',
  '130',
  'Leche Par. Descremada LA SERENISIMA Larga Vida 1l',
  'leche 4.jpg',
  '0'
 ),
 (
  '115',
  '6',
  'Leche Sancor Bebé',
  '325',
  'Leche Inf. 4 Años Sancor Bebe Ttb 1 Ltr',
  'leche 5.jpg',
  '0'
 ),
 (
  '116',
  '6',
  'Leche Sancor Bebé',
  '335',
  'Leche Inf. 1 Año Sancor Bebe Ttb 1 Ltr',
  'leche 6.jpg',
  '0'
 ),
 (
  '117',
  '6',
  'Leche Alm. La Serenísima',
  '375',
  'LA SERENISIMA 100% Vegetal Almendra 1l',
  'leche 7.jpg',
  '0'
 ),
 (
  '118',
  '6',
  'Leche Gran. La Serenísima',
  '475',
  'Bebida Vegetal Granola La Serenisima Ttb 1 Ltr',
  'leche 8.jpg',
  '0'
 ),
 (
  '119',
  '6',
  'Leche Choc. Cindor',
  '425',
  'Leche Chocolatada Vit B3 Cindor Ttb 1 Ltr',
  'chocolatada.jpg',
  '0'
 ),
 (
  '120',
  '6',
  'Yogur Bebible Sancor',
  '125',
  'Yogur Bebible Entero Frutilla Lechelita Sch 900 Grm',
  'yogur b1.jpg',
  '0'
 ),
 (
  '121',
  '6',
  'Yogur Bebible La Serenísima',
  '125',
  'Yogur Bebible Des. La Serenisima Frutilla 900 Gr',
  'yogur b2.jpg',
  '0'
 ),
 (
  '122',
  '6',
  'Yogur Bebible Sancor',
  '125',
  'Yogur Bebible Entero Vainilla Lechelita Sch 900 Grm',
  'yogur b3.jpg',
  '0'
 ),
 (
  '123',
  '6',
  'Yogur Bebible Ser',
  '245',
  'Yogur Bebible Descremado Probioticos Naturales Multifruta Ser Bot 190 Grm',
  'yogur b4.jpg',
  '0'
 ),
 (
  '124',
  '6',
  'Yogur Cremoso Milkaut',
  '45',
  'Yogur Cremoso Entero Vainilla Milkaut Pot 120 Grm',
  'yogur s1.jpg',
  '0'
 ),
 (
  '125',
  '6',
  'Yogur Cremoso Milkaut',
  '45',
  'Yogur Cremoso Entero Frutilla Milkaut Pot 120 Grm',
  'yogur s2.jpg',
  '0'
 ),
 (
  '126',
  '6',
  'Yogur Cremoso La Serenísima',
  '45',
  'Yogur Cremoso Light La Serenisima Vainilla 120 Gr',
  'yogur s3.jpg',
  '0'
 ),
 (
  '127',
  '6',
  'Queso Cremoso',
  '850',
  'Cremoso PRIMERA MARCA Xkg',
  'queso crem 1.jpg',
  '0'
 ),
 (
  '128',
  '6',
  'Queso Cremon La Serenísima',
  '1050',
  'Queso Cremon Cremoso LA SERENISIMA X Kg',
  'queso crem 2.jpg',
  '0'
 ),
 (
  '129',
  '6',
  'Queso Cremon La Serenísima',
  '1130',
  'Queso Cremon Light LA SERENISIMA X Kg',
  'queso crem 3.jpg',
  '0'
 ),
 (
  '130',
  '6',
  'Queso crema Casancrem',
  '430',
  'Queso Crema Clásico Casancrem Pot 290 Grm',
  'queso crema 1.jpg',
  '0'
 ),
 (
  '131',
  '6',
  'Queso crema Casancrem',
  '430',
  'Queso Crema Light Casancrem Pot 290 Grm',
  'queso crema 2.jpg',
  '0'
 ),
 (
  '132',
  '6',
  'Manteca Ciudad del Lago',
  '150',
  'Manteca CIUDAD DEL LAGO 200 Gr',
  'manteca 1.jpg',
  '0'
 ),
 (
  '133',
  '6',
  'Manteca Primer Premio',
  '175',
  'Manteca PRIMER PREMIO 200 Gr',
  'manteca 2.jpg',
  '0'
 ),
 (
  '134',
  '6',
  'Manteca La Serenísima',
  '145',
  'Manteca Multivitaminas LA SERENISIMA 100gr',
  'manteca 3.jpg',
  '0'
 ),
 (
  '135',
  '6',
  'Manteca La Serenísima',
  '325',
  'Manteca Light La Serenisima Pan 200 Grm',
  'manteca 4.jpg',
  '0'
 ),
 (
  '136',
  '6',
  'Crema de Leche La Paulina',
  '225',
  'Crema De Leche LA PAULINA 350 CC',
  'crema 1.jpg',
  '0'
 ),
 (
  '137',
  '6',
  'Crema de Leche Milkaut',
  '230',
  'Crema Leche . Milkaut Pot 330 Cmq',
  'crema 2.jpg',
  '0'
 ),
 (
  '138',
  '6',
  'Crema de Leche Tregar',
  '230',
  'Crema Leche Doble Tregar Pot 350 Grm',
  'crema 3.jpg',
  '0'
 ),
 (
  '139',
  '6',
  'Postre Serenito Rocklets',
  '305',
  'Postre Sabor Vainilla Con Rocklets Pot 120 Grm',
  'postre 1.jpg',
  '0'
 ),
 (
  '140',
  '6',
  'Postre Serenito Choco',
  '305',
  'Postre Sabor Vainilla Con Choco Bombas Pot 118 Grm',
  'postre 2.jpg',
  '0'
 ),
 (
  '141',
  '6',
  'Postre Ser',
  '130',
  'Postre Sab.Dulce D/Le Ser Pot 100 Grm',
  'postre 3.jpg',
  '0'
 ),
 (
  '142',
  '6',
  'Postre Ser',
  '130',
  'Postre Sab.Vainilla Ser Pot 100 Grm',
  'postre 4.jpg',
  '0'
 ),
 (
  '143',
  '7',
  'Jabón Líquido ALA',
  '195',
  'Jabón Líq.Ropa Fina ALA Camellito Lav. A Mano 450 Ml',
  'jabon ropa 1.jpg',
  '0'
 ),
 (
  '144',
  '7',
  'Jabón en Polvo ALA',
  '250',
  'Jabón En Polvo Ala Lavado A Mano Con Perlas Suavizantes 800 G',
  'jabon ropa 2.jpg',
  '0'
 ),
 (
  '145',
  '7',
  'Jabón Líquido Matic',
  '680',
  'Jabón Líquido Matic Drive Colores Radiantes 3 Lts',
  'jabon ropa 3.jpg',
  '0'
 ),
 (
  '146',
  '7',
  'Suavizante Vivere',
  '530',
  'Suavizante Concentrado Vivere Intense Abrazo Apretado 1 L',
  'suavizante.jpg',
  '0'
 ),
 (
  '147',
  '7',
  'Lavandina Ayudín',
  '55',
  'Lavandina Liquida AYUDÍN Botella 1 L',
  'lavandina 1.jpg',
  '0'
 ),
 (
  '148',
  '7',
  'Lavandina Ayudín',
  '400',
  'Lavandina Ayudín Clásica Botella 4 Lts',
  'lavandina 2.jpg',
  '0'
 ),
 (
  '149',
  '7',
  'Lavandina Ayudín',
  '145',
  'Lavandina En Gel Lavanda Ayudin Bot 700 Ml',
  'lavandina 3.jpg',
  '0'
 ),
 (
  '150',
  '7',
  'Lavavajillas Zorro',
  '125',
  'Lavavajillas Cremoso Colage Zorro Bot 750 Ml',
  'lavavajillas 1.jpg',
  '0'
 ),
 (
  '151',
  '7',
  'Lavavajillas ALA',
  '160',
  'Lavavajillas Cristalino Lim Ala Bot 750 Ml',
  'lavavajillas 2.jpg',
  '0'
 ),
 (
  '152',
  '7',
  'Lavavajillas Magistral',
  '725',
  'Lavavajillas Multiuso Limón Magistral Bot 1.4 Ltr',
  'lavavajillas 3.jpg',
  '0'
 ),
 (
  '153',
  '7',
  'Lavavajillas Magistral',
  '725',
  'Lavavajillas Multiuso Marin Magistral Bot 1.4 Ltr',
  'lavavajillas 4.jpg',
  '0'
 ),
 (
  '154',
  '7',
  'Limp. de Sup. Lysoform',
  '280',
  'Limp. Líq. Desinfectante LYSOFORM Lavanda 1.8l',
  'limpia pisos 1.jpg',
  '0'
 ),
 (
  '155',
  '7',
  'Limp. de Sup. Ayudín',
  '325',
  'Limpiador Desinfectante AYUDÍN Lavanda 1,8 L',
  'limpia pisos 2.jpg',
  '0'
 ),
 (
  '156',
  '7',
  'Limp. de Superficies Poett',
  '235',
  'Limp. Desinfectante POETT Flores De Primavera 1.8 L',
  'limpia pisos 3.jpg',
  '0'
 ),
 (
  '157',
  '7',
  'Limp. de Superficies Poett',
  '530',
  'Limpiador Desinfectante POETT Solo Para Tí 4 L',
  'limpia pisos 4.jpg',
  '0'
 ),
 (
  '158',
  '7',
  'Des. Ambientes Lysoform',
  '240',
  'Des. De Ambientes, Elimina Olores Lysoform 360ml',
  'desinfectante.jpg',
  '0'
 ),
 (
  '159',
  '7',
  'Arom. Amb. Lysoform',
  '1890',
  'Arom. De Ambientes LYSOFORM 175 Gr',
  'aromatizante.jpg',
  '0'
 ),
 (
  '160',
  '7',
  'L. Inodoros Lysoform',
  '130',
  'Limpia Inodoros Lysoform Cja 3 X 10 Grm',
  'inodoros.jpg',
  '0'
 ),
 (
  '161',
  '8',
  'Banana',
  '150',
  'Banana Cavendish Xkg',
  'banana.jpg',
  '0'
 ),
 (
  '162',
  '8',
  'Manzana Verde',
  '310',
  'Manzana.G.Smith . Xkg',
  'manzana 1.jpg',
  '0'
 ),
 (
  '163',
  '8',
  'Manzana Roja',
  '230',
  'Manzana Royal Gala Xkg',
  'manzana 2.jpg',
  '0'
 ),
 (
  '164',
  '8',
  'Naranja',
  '150',
  'Naranja Ombl. Xkg',
  'naranja.jpg',
  '0'
 ),
 (
  '165',
  '8',
  'Frutilla',
  '280',
  'Frutillas X 250 Gr',
  'frutilla.jpg',
  '0'
 ),
 (
  '166',
  '8',
  'Kiwi',
  '630',
  'Kiwi Selección X Kg',
  'kiwi.jpg',
  '0'
 ),
 (
  '167',
  '8',
  'Limón',
  '145',
  'Limon Bolsita Xkg',
  'limon.jpg',
  '0'
 ),
 (
  '168',
  '8',
  'Piña',
  '205',
  'Pina X Kg',
  'anana.jpg',
  '0'
 ),
 (
  '169',
  '8',
  'Ciruela',
  '225',
  'Ciruela X Kg',
  'ciruela.jpg',
  '0'
 ),
 (
  '170',
  '8',
  'Pera',
  '195',
  'Pera Packams X Kg',
  'pera.jpg',
  '0'
 ),
 (
  '171',
  '8',
  'Uva',
  '270',
  'Uva Red Globe Xkg',
  'uva.jpg',
  '0'
 ),
 (
  '172',
  '8',
  'Mandarina',
  '65',
  'Mandarina Nova X Kg',
  'mandarina.jpg',
  '0'
 ),
 (
  '173',
  '8',
  'Palta',
  '625',
  'Palta Hass Xkg',
  'palta.jpg',
  '0'
 ),
 (
  '174',
  '8',
  'Tomate',
  '665',
  'Tomate Larga Vida Racimo X Kg',
  'tomate.jpg',
  '0'
 ),
 (
  '175',
  '8',
  'Zapallo',
  '80',
  'Zapallo Anco Batata X Kg 1 Kgm',
  'zapallo.jpg',
  '0'
 ),
 (
  '176',
  '8',
  'Zapallo',
  '130',
  'Zapallo Anco En Rodajas Las Parchit Bja 350 Grm',
  'zapallo 2.jpg',
  '0'
 ),
 (
  '177',
  '8',
  'Cebolla',
  '140',
  'Cebolla Seleccionada En Bolsita X Kg',
  'cebolla.jpg',
  '0'
 ),
 (
  '178',
  '8',
  'Cebolla de Verdeo',
  '130',
  'Cebolla De Verdeo X Uni',
  'cebolla ver.jpg',
  '0'
 ),
 (
  '179',
  '8',
  'Zanahoria',
  '205',
  'Zanahoria Bolsita X Kg',
  'zanahoria.jpg',
  '0'
 ),
 (
  '180',
  '8',
  'Lechuga',
  '345',
  'Lechuga Francesa X Kg',
  'lechuga.jpg',
  '0'
 ),
 (
  '181',
  '8',
  'Lechuga',
  '330',
  'Lechuga Capuchina X Kg',
  'lechuga 2.jpg',
  '0'
 ),
 (
  '182',
  '8',
  'Batata',
  '90',
  'Batata Xkg Xkg',
  'batata.jpg',
  '0'
 ),
 (
  '183',
  '8',
  'Papa',
  '145',
  'Papa Blanca Bolsa X 2 Kg',
  'papa bl.jpg',
  '0'
 ),
 (
  '184',
  '8',
  'Papa',
  '80',
  'Papa Negra Selec Xkg',
  'papa neg.jpg',
  '0'
);

--
-- Table structure for table `users`
--


DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `users_id` int(11) NOT NULL AUTO_INCREMENT,
  `status_id` int(11) NOT NULL,
  `email` varchar(60) CHARACTER SET utf8mb4 NOT NULL,
  `password` varchar(80) CHARACTER SET utf8mb4 NOT NULL,
  `full_name` varchar(80) CHARACTER SET utf8mb4 NOT NULL,
  `address` varchar(500) CHARACTER SET utf8mb4 NOT NULL,
  `country` varchar(45) CHARACTER SET utf8mb4 NOT NULL,
  `profile_image` varchar(150) CHARACTER SET utf8mb4 NOT NULL,
  PRIMARY KEY (`users_id`),
  UNIQUE KEY `users_id` (`users_id`),
  KEY `users_status` (`status_id`),
  CONSTRAINT `status_id` FOREIGN KEY (`status_id`) REFERENCES `users_status` (`status_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

INSERT INTO `bdsmartmarket`.`users` (`users_id`, `status_id`, `email`, `password`, `full_name`, `address`, `country`, `profile_image`) 
VALUES 
(
 '1',
 '3',
 'pipebrocca@gmail.com',
 '$2a$10$xqFU68Qu1dI147BFktcu1.v55bHNwfjxVxo/sKpMFZJH6zT2iTFMe', 
 'Felipe Brocca', 
 'Gallo 1421, Capital Federal', 
 'Argentina', 
 '1656440830755_imagen.jpg'
 ),
 (
 '2',
 '3',
 'lilopadilla22@gmail.com',
 '$2a$10$GLaUfNUGVKazqJoWvLyp5ucQ9h5jt.p0VbjSeJ9fOEJRQ3Q34r0HS',
 'Lilia Padilla',
 'tv9',
 'colombia',
 '1656447330404_imagen.jpg'
 ),
 (
 '3',
 '3', 
 'lenislipari@gmail.com', 
 '$2a$10$ngHSgEZykmkwAqlyAYISC.80oz7HEdR5M.o5Mj6J8QpnYQeDCNYze', 
 'Lenis Lipari', 
 'armada argentina 2483', 
 'Argentina', 
 '1658953003494_imagen.jpg'
 );


--
-- Table structure for table `users_status`
--


DROP TABLE IF EXISTS `users_status`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users_status` (
  `status_id` int(11) NOT NULL AUTO_INCREMENT,
  `status` varchar(60) CHARACTER SET utf8mb4 NOT NULL,
  PRIMARY KEY (`status_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users_status`
--

LOCK TABLES `users_status` WRITE;
/*!40000 ALTER TABLE `users_status` DISABLE KEYS */;
/*!40000 ALTER TABLE `users_status` ENABLE KEYS */;
UNLOCK TABLES;

INSERT INTO `bdsmartmarket`.`users_status` (`status_id`, `status`) VALUES ('1', 'Cliente');
INSERT INTO `bdsmartmarket`.`users_status` (`status_id`, `status`) VALUES ('2', 'Empleado');
INSERT INTO `bdsmartmarket`.`users_status` (`status_id`, `status`) VALUES ('3', 'Administrador');

/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-07-18 11:15:05






 









