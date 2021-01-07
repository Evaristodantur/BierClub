-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 06-01-2021 a las 21:05:40
-- Versión del servidor: 10.4.14-MariaDB
-- Versión de PHP: 7.4.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `bierclub_db`
--

--
-- Volcado de datos para la tabla `carts`
--

INSERT INTO `carts` (`id`, `status`, `createdAt`, `updatedAt`) VALUES
(1, 1, '2020-12-22 03:27:06', '2020-12-22 03:27:06'),
(2, 0, '2020-12-22 03:27:21', '2020-12-22 03:27:21'),
(3, 1, '2020-12-22 03:27:29', '2020-12-22 03:27:29');

--
-- Volcado de datos para la tabla `categories`
--

INSERT INTO `categories` (`id`, `name`, `status`, `createdAt`, `updatedAt`) VALUES
(1, 'Lupuladas', 1, '2020-12-22 03:06:58', '2020-12-22 03:06:58'),
(2, 'No Lupuladas', 1, '2020-12-22 03:07:32', '2020-12-22 03:07:32'),
(3, 'Cerveza', 1, '2020-12-23 02:19:44', '2020-12-23 02:19:44'),
(4, 'Vino', 1, '2020-12-23 02:20:04', '2020-12-23 02:20:04'),
(5, 'asdasd', 0, '2020-12-23 04:42:58', '2020-12-23 04:42:58'),
(6, 'KIPPES', 0, '2020-12-23 04:44:22', '2020-12-23 04:44:22'),
(7, 'pepito clavo 3 clavitos', 0, '2021-01-04 19:28:39', '2021-01-04 19:28:39');

--
-- Volcado de datos para la tabla `images`
--

INSERT INTO `images` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
(1, 'imagen 1', '2020-12-22 03:12:21', '2020-12-22 03:12:21'),
(2, 'imagen 2', '2020-12-22 03:12:39', '2020-12-22 03:12:39'),
(3, 'imagen 3', '2020-12-22 03:12:47', '2020-12-22 03:12:47'),
(4, 'imagen 4', '2020-12-22 03:12:53', '2020-12-22 03:12:53'),
(5, 'imagen 5', '2020-12-22 03:12:58', '2020-12-22 03:12:58'),
(10, 'producto-1608789934178.png', '2020-12-24 06:05:34', '2020-12-24 06:05:34'),
(11, 'producto-1608790001640.png', '2020-12-24 06:06:41', '2020-12-24 06:06:41'),
(12, 'producto-1608790001641.png', '2020-12-24 06:06:41', '2020-12-24 06:06:41'),
(13, 'producto-1608790001641.png', '2020-12-24 06:06:41', '2020-12-24 06:06:41'),
(14, 'producto-1608790001641.png', '2020-12-24 06:06:41', '2020-12-24 06:06:41'),
(15, 'producto-1608791771011.png', '2020-12-24 06:36:11', '2020-12-24 06:36:11'),
(16, 'producto-1608791771011.png', '2020-12-24 06:36:11', '2020-12-24 06:36:11'),
(17, 'producto-1608791771012.png', '2020-12-24 06:36:11', '2020-12-24 06:36:11'),
(18, 'producto-1608796357238.png', '2020-12-24 07:52:37', '2020-12-24 07:52:37'),
(19, 'producto-1608798005109.png', '2020-12-24 08:20:05', '2020-12-24 08:20:05'),
(20, 'producto-1608798005110.png', '2020-12-24 08:20:05', '2020-12-24 08:20:05'),
(21, 'producto-1608798005110.png', '2020-12-24 08:20:05', '2020-12-24 08:20:05'),
(22, 'producto-1608798005110.png', '2020-12-24 08:20:05', '2020-12-24 08:20:05'),
(23, 'producto-1608831630339.jpg', '2020-12-24 17:40:30', '2020-12-24 17:40:30'),
(24, 'producto-1608831630360.jpg', '2020-12-24 17:40:30', '2020-12-24 17:40:30'),
(25, 'producto-1608831630364.jpg', '2020-12-24 17:40:30', '2020-12-24 17:40:30'),
(26, 'producto-1608831630371.jpg', '2020-12-24 17:40:30', '2020-12-24 17:40:30'),
(27, 'producto-1608832737447.jpg', '2020-12-24 17:58:57', '2020-12-24 17:58:57'),
(28, 'producto-1608832737451.jpg', '2020-12-24 17:58:57', '2020-12-24 17:58:57'),
(29, 'producto-1608832737462.jpg', '2020-12-24 17:58:57', '2020-12-24 17:58:57'),
(30, 'producto-1608832774673.jpg', '2020-12-24 17:59:34', '2020-12-24 17:59:34'),
(31, 'producto-1608832774682.jpg', '2020-12-24 17:59:34', '2020-12-24 17:59:34'),
(32, 'producto-1608832774647.jpg', '2020-12-24 17:59:34', '2020-12-24 17:59:34'),
(33, 'producto-1608832774693.jpg', '2020-12-24 17:59:34', '2020-12-24 17:59:34'),
(34, 'producto-1608832802897.jpg', '2020-12-24 18:00:02', '2020-12-24 18:00:02'),
(35, 'producto-1608832802905.jpg', '2020-12-24 18:00:02', '2020-12-24 18:00:02'),
(36, 'producto-1608832802913.jpg', '2020-12-24 18:00:02', '2020-12-24 18:00:02'),
(37, 'producto-1608832802927.jpg', '2020-12-24 18:00:02', '2020-12-24 18:00:02'),
(38, 'producto-1608832830503.jpg', '2020-12-24 18:00:30', '2020-12-24 18:00:30'),
(39, 'producto-1608832830510.jpg', '2020-12-24 18:00:30', '2020-12-24 18:00:30');

--
-- Volcado de datos para la tabla `image_product`
--

INSERT INTO `image_product` (`id`, `product_id`, `image_id`, `createdAt`, `updatedAt`) VALUES
(29, 55, 23, '2020-12-24 17:40:30', '2020-12-24 17:40:30'),
(30, 55, 24, '2020-12-24 17:40:30', '2020-12-24 17:40:30'),
(31, 55, 25, '2020-12-24 17:40:30', '2020-12-24 17:40:30'),
(32, 55, 26, '2020-12-24 17:40:30', '2020-12-24 17:40:30'),
(33, 56, 27, '2020-12-24 17:58:57', '2020-12-24 17:58:57'),
(34, 56, 28, '2020-12-24 17:58:57', '2020-12-24 17:58:57'),
(35, 56, 29, '2020-12-24 17:58:57', '2020-12-24 17:58:57'),
(36, 57, 30, '2020-12-24 17:59:34', '2020-12-24 17:59:34'),
(37, 57, 31, '2020-12-24 17:59:34', '2020-12-24 17:59:34'),
(38, 57, 33, '2020-12-24 17:59:34', '2020-12-24 17:59:34'),
(39, 57, 32, '2020-12-24 17:59:34', '2020-12-24 17:59:34'),
(40, 58, 35, '2020-12-24 18:00:02', '2020-12-24 18:00:02'),
(41, 58, 37, '2020-12-24 18:00:02', '2020-12-24 18:00:02'),
(42, 58, 34, '2020-12-24 18:00:02', '2020-12-24 18:00:02'),
(43, 58, 36, '2020-12-24 18:00:02', '2020-12-24 18:00:02'),
(44, 59, 38, '2020-12-24 18:00:30', '2020-12-24 18:00:30'),
(45, 59, 39, '2020-12-24 18:00:30', '2020-12-24 18:00:30');

--
-- Volcado de datos para la tabla `products`
--

INSERT INTO `products` (`id`, `name`, `price`, `discount`, `stock`, `description`, `category_id`, `createdAt`, `updatedAt`) VALUES
(55, 'ippa Sippa (TDH Imperial Aussie IP)', 90, 10, 645645, 'Amarillo pálido, algo turbia y muy refrescante! Este híbrido entre una West Coast y una East Coast IPA tiene lo mejor de los dos mundos: de cuerpo medio, con aromas y sabores cítricos tropicales (ananá 🍍, maracuyá y mandarina 🍊).', 1, '2020-12-24 17:40:30', '2020-12-24 17:40:30'),
(56, 'Saison de Triomphe - Hoppy Saison', 115, 0, 0, 'Fermentada con un blend de 4 levaduras rurales, con maltas de cebada artesanales de La Plata y granos sin maltear de trigo y avena que le dan esa rusticidad típica del estilo, esta saison fue ademas lupulada con Enigma 🇦🇺Australiano!', 1, '2020-12-24 17:58:57', '2020-12-24 17:58:57'),
(57, 'William Wallace Scottish', 82, 5, 663, 'Una verdadera IPA de la costa oeste, inundación de lupulina americana en tus papilas gustativas con intensos sabores y aromas resinosos y cítricos (pino húmedo, cáscara de naranja 🍊, lima/limón 🍋y pomelo).', 2, '2020-12-24 17:59:34', '2020-12-24 17:59:34'),
(58, 'Mumbai 1947', 99, 20, 10, 'Una birra purasangre, muscular hasta explotar con ridículas cantidades de Galaxy y Cashmere.\\r\\nDe color amarillo pálido, turbia, jugosa, espesa e hiper lupulada, con intensas notas a maracuyá, mango, lima-limón, durazno y cascara de sandia #neverpony.', 3, '2020-12-24 18:00:02', '2020-12-24 18:00:02'),
(59, 'German Pills', 125, 10, 45, 'Esta IIPA esta cargada a tope con cantidades copiosas de los lupulos Vic Secret y Galaxy.\\r\\nDe color naranja intenso, turbia, jugosa, estimula tus papilas gustativas con intensas notas a naranja, durazno, mango, ananá. Sabores Cítricos/Tropicales brillan sobre la base maltosa.', 2, '2020-12-24 18:00:30', '2020-12-24 18:00:30'),
(60, 'Rippa Sippa (TDH Imperial Aussie IPA)', 150, 0, 0, '', 3, '2020-12-24 18:01:07', '2020-12-24 18:01:07'),
(61, 'Prickly Dingo - Catharina Sour con Cactus', 110, 50, 2, 'De color naranja intenso, cual noctiluca rabiosa, la prickly dingo es una catharina sour con cactus.\\r\\nUna cerveza acida, balanceada por el dulzor del cactus que le da sabores y aromas a chicle de tutti-frutti, sandia y kiwi.', 2, '2020-12-24 18:01:28', '2020-12-24 18:01:28');

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `suscription_status`, `admin`, `verify`, `verify_code`, `createdAt`, `updatedAt`) VALUES
(77, 'KIPPES', 'kippes.diego@gmail.com', '$2a$10$PI/p3ov/fTlTGIOe0jpxR.XsvxdYlERMp6KMRQe8/F1YN02Kd7e5a', 0, 1, 1, '61kghn6hcs', '2021-01-06 19:28:45', '2021-01-06 19:28:45'),
(78, 'User-comun', 'user@user.com', '$2a$10$9z6neGiOZKrB2EuJyRyYiOC2v0301XZaxIS8HgY2Bp.MtDf9kBgL.', 0, 0, 1, '7gi440yh3w', '2021-01-06 20:02:08', '2021-01-06 20:02:08'),
(79, 'admin', 'admin@admin.com', '$2a$10$n2FSwB7/AaBfK.GXv.dWo.LK3mu/GJqKkCeNobUTvc0u8jwvGwvkS', 0, 1, 1, 'pr6kf9s33f', '2021-01-06 20:02:26', '2021-01-06 20:02:26'),
(80, 'usuario-no-verificado', 'user-no-verificado@user.com', '$2a$10$F1.x741JLTWIQbTrpJroCekqGMNSVjPcTvLBxVjeT013X3txavS2O', 0, 0, 0, 'j6sdmgsvj5', '2021-01-06 20:02:56', '2021-01-06 20:02:56');

--
-- Volcado de datos para la tabla `user_cart`
--

INSERT INTO `user_cart` (`id`, `user_id`, `cart_id`, `createdAt`, `updatedAt`) VALUES
(1, 77, 2, '2021-01-06 19:46:00', '2021-01-06 19:46:00'),
(2, 77, 3, '2021-01-06 19:46:07', '2021-01-06 19:46:07');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
