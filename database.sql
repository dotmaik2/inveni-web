CREATE DATABASE  IF NOT EXISTS `inveni` /*!40100 DEFAULT CHARACTER SET utf8 */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `inveni`;
-- MySQL dump 10.13  Distrib 8.0.26, for Win64 (x86_64)
--
-- Host: localhost    Database: inveni
-- ------------------------------------------------------
-- Server version	8.0.26

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
-- Table structure for table `autos`
--

DROP TABLE IF EXISTS `autos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `autos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `NOMBRE` varchar(120) DEFAULT NULL,
  `RFC` varchar(120) DEFAULT NULL,
  `DOMICILIO` varchar(120) DEFAULT NULL,
  `COLONI` varchar(120) DEFAULT NULL,
  `CP` varchar(120) DEFAULT NULL,
  `PLACA` varchar(120) DEFAULT NULL,
  `NUMSERIE` varchar(120) DEFAULT NULL,
  `MODELO` varchar(120) DEFAULT NULL,
  `MARCA` varchar(120) DEFAULT NULL,
  `LINEA` varchar(120) DEFAULT NULL,
  `MUNICIPIO` varchar(120) DEFAULT NULL,
  `ESTADO` varchar(120) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=98 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `autos`
--


--
-- Table structure for table `clientes`
--

DROP TABLE IF EXISTS `clientes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `clientes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) DEFAULT NULL,
  `direccion` varchar(45) DEFAULT NULL,
  `telefono` varchar(45) DEFAULT NULL,
  `rfc` varchar(45) DEFAULT NULL,
  `usuario` varchar(45) DEFAULT NULL,
  `password` varchar(45) DEFAULT NULL,
  `activo` tinyint DEFAULT NULL,
  `permisos` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `clientes`
--


--
-- Table structure for table `matrimonios`
--

DROP TABLE IF EXISTS `matrimonios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `matrimonios` (
  `id` int NOT NULL AUTO_INCREMENT,
  `NOM_ESPOSO` varchar(120) DEFAULT NULL,
  `NOM_ESPOSA` varchar(120) DEFAULT NULL,
  `AO_ENLACE` varchar(120) DEFAULT NULL,
  `MUNICIPIO` varchar(120) DEFAULT NULL,
  `ESTADO` varchar(120) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=74 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `matrimonios`
--


--
-- Table structure for table `patronal`
--

DROP TABLE IF EXISTS `patronal`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `patronal` (
  `id` int NOT NULL AUTO_INCREMENT,
  `NOMBRE` varchar(120) DEFAULT NULL,
  `DOMICILIO` varchar(120) DEFAULT NULL,
  `COLONIA` varchar(120) DEFAULT NULL,
  `CP` varchar(120) DEFAULT NULL,
  `NUMERO_PATRONAL` varchar(120) DEFAULT NULL,
  `GIRO` varchar(120) DEFAULT NULL,
  `MUNICIPIO` varchar(120) DEFAULT NULL,
  `ESTADO` varchar(120) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1193 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `patronal`
--

--
-- Table structure for table `poblacion`
--

DROP TABLE IF EXISTS `poblacion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `poblacion` (
  `id` int NOT NULL AUTO_INCREMENT,
  `NOMBRE` varchar(120) DEFAULT NULL,
  `DOMICILIO` varchar(120) DEFAULT NULL,
  `COLONIA` varchar(120) DEFAULT NULL,
  `CP` varchar(120) DEFAULT NULL,
  `FEC_NAC` varchar(120) DEFAULT NULL,
  `CURP` varchar(120) DEFAULT NULL,
  `MUNICIPIO` varchar(120) DEFAULT NULL,
  `ESTADO` varchar(120) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `poblacion`
--

--
-- Table structure for table `seguro`
--

DROP TABLE IF EXISTS `seguro`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `seguro` (
  `id` int NOT NULL AUTO_INCREMENT,
  `NOMBRE` varchar(120) DEFAULT NULL,
  `SALARIO` varchar(120) DEFAULT NULL,
  `CURP` varchar(120) DEFAULT NULL,
  `NUM_PATRON` varchar(120) DEFAULT NULL,
  `NUM AFILIACION` varchar(120) DEFAULT NULL,
  `MUNICIPIO` varchar(120) DEFAULT NULL,
  `ESTADO` varchar(120) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `seguro`
--


--
-- Table structure for table `sessions`
--

DROP TABLE IF EXISTS `sessions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sessions` (
  `session_id` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `expires` int unsigned NOT NULL,
  `data` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin,
  PRIMARY KEY (`session_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sessions`
--

LOCK TABLES `sessions` WRITE;
/*!40000 ALTER TABLE `sessions` DISABLE KEYS */;
INSERT INTO `sessions` VALUES ('ENodNmirQYnhPE4wXCJCRAlmeXIXRP61',1643655941,'{\"cookie\":{\"originalMaxAge\":259200000,\"expires\":\"2022-01-31T19:05:40.670Z\",\"secure\":false,\"httpOnly\":false,\"path\":\"/\"},\"passport\":{}}'),('FApmO1lV3N-iW2jE--vtvb9JvI8M4DL_',1643579727,'{\"cookie\":{\"originalMaxAge\":259200000,\"expires\":\"2022-01-30T17:35:13.121Z\",\"secure\":false,\"httpOnly\":false,\"path\":\"/\"},\"passport\":{\"user\":{\"id\":1,\"username\":\"a\",\"password\":\"$2a$10$XzBjp/yKpkrL/QEBMxMu2uF2oPNfRltF4TrLFNcMm.hw.L126GUe.\",\"role\":\"SUPER USER\",\"email\":\"dotmaik1@gmail.com\",\"nivel\":1}},\"flash\":{}}'),('IRVKv9pXHgF2LsVkhHorSOr0q6XEvOwA',1643741402,'{\"cookie\":{\"originalMaxAge\":259200000,\"expires\":\"2022-01-31T19:05:45.515Z\",\"secure\":false,\"httpOnly\":false,\"path\":\"/\"},\"passport\":{\"user\":{\"id\":1,\"username\":\"a\",\"password\":\"$2a$10$XzBjp/yKpkrL/QEBMxMu2uF2oPNfRltF4TrLFNcMm.hw.L126GUe.\",\"role\":\"SUPER USER\",\"email\":\"dotmaik1@gmail.com\",\"nivel\":1}},\"flash\":{}}'),('JDE0QyM16XAVkey7AX7Ar2G5Uxi5Pney',1643655941,'{\"cookie\":{\"originalMaxAge\":259200000,\"expires\":\"2022-01-31T19:05:40.704Z\",\"secure\":false,\"httpOnly\":false,\"path\":\"/\"},\"passport\":{}}'),('TDnBFphvkTt1UPrA2Z6BYyj1FsBQDWQh',1643495705,'{\"cookie\":{\"originalMaxAge\":259200000,\"expires\":\"2022-01-29T20:15:30.667Z\",\"secure\":false,\"httpOnly\":false,\"path\":\"/\"},\"passport\":{}}'),('cPnK3DEfuN8tYEnaKWWJv_KUzL4L6SFX',1643507003,'{\"cookie\":{\"originalMaxAge\":259200000,\"expires\":\"2022-01-30T00:52:55.888Z\",\"secure\":false,\"httpOnly\":false,\"path\":\"/\"},\"passport\":{\"user\":{\"id\":1,\"username\":\"a\",\"password\":\"$2a$10$XzBjp/yKpkrL/QEBMxMu2uF2oPNfRltF4TrLFNcMm.hw.L126GUe.\",\"role\":\"SUPER USER\",\"email\":\"dotmaik1@gmail.com\",\"nivel\":1}},\"flash\":{}}'),('vuRCsm01uVycNlcsWxWXDOBg3ByRVTcw',1643495835,'{\"cookie\":{\"originalMaxAge\":259200000,\"expires\":\"2022-01-29T18:31:53.265Z\",\"secure\":false,\"httpOnly\":false,\"path\":\"/\"},\"passport\":{\"user\":{\"id\":1,\"username\":\"a\",\"password\":\"$2a$10$XzBjp/yKpkrL/QEBMxMu2uF2oPNfRltF4TrLFNcMm.hw.L126GUe.\",\"role\":\"SUPER USER\",\"email\":\"dotmaik1@gmail.com\",\"nivel\":1}},\"flash\":{}}');
/*!40000 ALTER TABLE `sessions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `telefonia`
--

DROP TABLE IF EXISTS `telefonia`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `telefonia` (
  `id` int NOT NULL AUTO_INCREMENT,
  `TELEFONO` varchar(120) DEFAULT NULL,
  `NOMBRE` varchar(120) DEFAULT NULL,
  `DOMICILIO` varchar(120) DEFAULT NULL,
  `COLONIA` varchar(120) DEFAULT NULL,
  `CP` varchar(120) DEFAULT NULL,
  `COMPAA` varchar(120) DEFAULT NULL,
  `MUNICIPIO` varchar(120) DEFAULT NULL,
  `ESTADO` varchar(120) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `telefonia`
--

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(45) NOT NULL,
  `password` varchar(60) NOT NULL,
  `role` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `nivel` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (1,'a','$2a$10$XzBjp/yKpkrL/QEBMxMu2uF2oPNfRltF4TrLFNcMm.hw.L126GUe.','SUPER USER','dotmaik1@gmail.com',1);
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-01-29 15:34:41
