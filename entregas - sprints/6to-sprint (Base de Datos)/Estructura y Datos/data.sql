-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 25-02-2021 a las 06:46:30
-- Versión del servidor: 10.4.17-MariaDB
-- Versión de PHP: 8.0.2

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
-- Volcado de datos para la tabla `categories`
--

INSERT INTO `categories` (`id`, `name`, `status`, `createdAt`, `updatedAt`) VALUES
(1, 'Lupuladas', 1, '2020-12-22 03:06:58', '2020-12-22 03:06:58'),
(2, 'No Lupuladas', 1, '2020-12-22 03:07:32', '2020-12-22 03:07:32'),
(3, 'Cerveza', 1, '2020-12-23 02:19:44', '2020-12-23 02:19:44'),
(4, 'Vino', 1, '2020-12-23 02:20:04', '2020-12-23 02:20:04'),
(5, 'asdasd', 0, '2020-12-23 04:42:58', '2020-12-23 04:42:58'),
(6, 'KIPPES', 0, '2020-12-23 04:44:22', '2020-12-23 04:44:22');

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
(39, 'producto-1608832830510.jpg', '2020-12-24 18:00:30', '2020-12-24 18:00:30'),
(40, 'producto-1611397116021.png', '2021-01-23 10:18:36', '2021-01-23 10:18:36'),
(41, 'producto-1611397116022.jpg', '2021-01-23 10:18:36', '2021-01-23 10:18:36'),
(42, 'producto-1611397116022.png', '2021-01-23 10:18:36', '2021-01-23 10:18:36'),
(43, 'producto-1611397116023.png', '2021-01-23 10:18:36', '2021-01-23 10:18:36'),
(44, 'producto-1613851276771.jpg', '2021-02-20 20:01:16', '2021-02-20 20:01:16'),
(45, 'producto-1614140225888.jpg', '2021-02-24 04:17:05', '2021-02-24 04:17:05');

--
-- Volcado de datos para la tabla `products`
--

INSERT INTO `products` (`id`, `name`, `price`, `discount`, `stock`, `description`, `category_id`, `createdAt`, `updatedAt`) VALUES
(55, 'ippa Sippa (TDH Imperial Aussie IP)', 90, 10, 645643, 'Amarillo pálido, algo turbia y muy refrescante! Este híbrido entre una West Coast y una East Coast IPA tiene lo mejor de los dos mundos: de cuerpo medio, con aromas y sabores cítricos tropicales (ananá 🍍, maracuyá y mandarina 🍊).', 1, '2020-12-24 17:40:30', '2020-12-24 17:40:30'),
(56, 'Saison de Triomphe - Hoppy Saison', 115, 0, 0, 'Fermentada con un blend de 4 levaduras rurales, con maltas de cebada artesanales de La Plata y granos sin maltear de trigo y avena que le dan esa rusticidad típica del estilo, esta saison fue ademas lupulada con Enigma 🇦🇺Australiano!', 1, '2020-12-24 17:58:57', '2020-12-24 17:58:57'),
(57, 'William Wallace Scottish', 82, 5, 598, 'Una verdadera IPA de la costa oeste, inundación de lupulina americana en tus papilas gustativas con intensos sabores y aromas resinosos y cítricos (pino húmedo, cáscara de naranja 🍊, lima/limón 🍋y pomelo).', 2, '2020-12-24 17:59:34', '2020-12-24 17:59:34'),
(58, 'Mumbai 1947', 99, 20, 0, 'Una birra purasangre, muscular hasta explotar con ridículas cantidades de Galaxy y Cashmere.\\r\\nDe color amarillo pálido, turbia, jugosa, espesa e hiper lupulada, con intensas notas a maracuyá, mango, lima-limón, durazno y cascara de sandia #neverpony.', 3, '2020-12-24 18:00:02', '2020-12-24 18:00:02'),
(59, 'German Pills', 125, 10, 4, 'Esta IIPA esta cargada a tope con cantidades copiosas de los lupulos Vic Secret y Galaxy.\\r\\nDe color naranja intenso, turbia, jugosa, estimula tus papilas gustativas con intensas notas a naranja, durazno, mango, ananá. Sabores Cítricos/Tropicales brillan sobre la base maltosa.', 2, '2020-12-24 18:00:30', '2020-12-24 18:00:30'),
(61, 'Prickly Dingo - Catharina Sour con Cactus', 110, 50, 0, 'De color naranja intenso, cual noctiluca rabiosa, la prickly dingo es una catharina sour con cactus.\\r\\nUna cerveza acida, balanceada por el dulzor del cactus que le da sabores y aromas a chicle de tutti-frutti, sandia y kiwi.', 2, '2020-12-24 18:01:28', '2020-12-24 18:01:28'),
(64, 'de prueba 1', 0, 0, 0, '', 1, '2021-01-19 03:49:19', '2021-01-19 03:49:19'),
(65, 'de prueba 2', 0, 0, 0, '', 1, '2021-01-19 03:49:24', '2021-01-19 03:49:24'),
(66, 'de prueba 3', 0, 0, 0, '', 1, '2021-01-21 02:26:49', '2021-01-21 02:26:49'),
(67, 'de prueba 4', 0, 0, 0, '', 1, '2021-01-21 02:26:55', '2021-01-21 02:26:55'),
(69, 'asddas', 43, 2, 0, 'asdasdasdasdaaaaaaaaaaaaaaaaaaasdasdasdasdaaaaaaaaaaaaaaaaaaasdasdasdasdaaaaaaaaaaaaaaaaaaasdasdasdasdaaaaaaaaaaaaaaaaaaasdasdasdasdaaaaaaaaaaaaaaaaaaasdasdasdasdaaaaaaaaaaaaaaaaaaasdasdasdasdaaaaaaaaaaaaaaaaaaasdasdasdasaaasdasdasdasdaa', 3, '2021-01-23 03:29:57', '2021-01-23 03:29:57'),
(70, 'dasasd', 0, 0, 0, '', 1, '2021-01-23 09:07:09', '2021-01-23 09:07:09'),
(72, 'dss', 0, 0, 0, '', 1, '2021-01-23 10:19:06', '2021-01-23 10:19:06'),
(73, 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', 30, 0, 62, '', 1, '2021-01-28 02:13:41', '2021-01-28 02:13:41'),
(78, 'Germanica', 100, 0, 96, 'Nuevo producto!', 3, '2021-02-24 04:17:05', '2021-02-24 04:17:05'),
(79, 'Holandeza', 150, 20, 248, 'holandeza', 3, '2021-02-24 04:17:42', '2021-02-24 04:17:42');

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `suscription_status`, `newsletter_status`, `admin`, `verify`, `verify_code`, `createdAt`, `updatedAt`) VALUES
(79, 'ADMIN PIOLA', 'admin@admin.com', '$2a$10$n2FSwB7/AaBfK.GXv.dWo.LK3mu/GJqKkCeNobUTvc0u8jwvGwvkS', 0, 0, 0, 1, 'pr6kf9s33f', '2021-01-06 20:02:26', '2021-01-06 20:02:26'),
(80, 'usuario-no-verificado', 'user-no-verificado@user.com', '$2a$10$F1.x741JLTWIQbTrpJroCekqGMNSVjPcTvLBxVjeT013X3txavS2O', 0, 0, 0, 0, 'j6sdmgsvj5', '2021-01-06 20:02:56', '2021-01-06 20:02:56'),
(97, 'KIPPES', 'asdasd@gmail.com', '$2a$10$U2fcl2ZTM1HXGorku4JtZObLD/XQt.WPoFRSz/lsIWBG47EzO6KCS', 0, 0, 0, 0, 'e17afrr1es', '2021-01-15 22:53:00', '2021-01-15 22:53:00'),
(105, 'KIPPES', 'kippes.diego@gmail.com', '$2a$10$ahtS4e3Ea2ixGg4/iYN.WOGVUXAgw2sZLCH2orTDBqrgyiucvCwDS', 0, 1, 1, 1, 'o34zirwsvd', '2021-02-16 21:18:49', '2021-02-16 21:18:49'),
(106, 'KIPPES', 'kippeso@gmail.com', '$2a$10$qJW/SN9AvfoBPjtbL1eGqe9WTyeEL08nhmdGQv0H6lkDFxdnQ8zhS', 0, 0, 0, 0, 'm3yaiwqnpw', '2021-02-21 00:35:06', '2021-02-21 00:35:06'),
(115, 'KIPPES', 'diegokippes9@gmail.com', '$2a$10$J0mE9QFtCRFnClB90qIsbOaWLx8sY6Lv8cnW1r6CZO06nR6vPBSvO', 0, 0, 0, 1, 'rjcnej336m', '2021-02-24 14:33:19', '2021-02-24 14:33:19');


--
-- Volcado de datos para la tabla `carts`
--

INSERT INTO `carts` (`id`, `status`, `user_id`, `shipping_type`, `place`, `createdAt`, `updatedAt`) VALUES
(53, 1, 105, NULL, NULL, '2021-02-16 21:19:06', '2021-02-16 21:19:06'),
(54, 1, 105, 0, NULL, '2021-02-20 01:08:06', '2021-02-20 01:08:06'),
(55, 1, 105, 0, NULL, '2021-02-24 00:07:47', '2021-02-24 00:07:47'),
(56, 1, 105, 0, NULL, '2021-02-24 00:09:00', '2021-02-24 00:09:00'),
(57, 1, 105, 0, NULL, '2021-02-24 01:26:30', '2021-02-24 01:26:30'),
(58, 1, 105, 0, NULL, '2021-02-24 01:27:50', '2021-02-24 01:27:50'),
(59, 1, 105, 0, NULL, '2021-02-24 01:28:16', '2021-02-24 01:28:16'),
(60, 1, 105, 0, NULL, '2021-02-24 01:29:21', '2021-02-24 01:29:21'),
(61, 1, 105, 0, NULL, '2021-02-24 01:35:05', '2021-02-24 01:35:05'),
(62, 1, 105, 0, NULL, '2021-02-24 01:36:05', '2021-02-24 01:36:05'),
(63, 1, 105, 0, NULL, '2021-02-24 01:44:38', '2021-02-24 01:44:38'),
(64, 1, 105, 0, NULL, '2021-02-24 01:45:50', '2021-02-24 01:45:50'),
(65, 1, 105, 0, NULL, '2021-02-24 01:53:56', '2021-02-24 01:53:56'),
(68, 1, 105, 0, NULL, '2021-02-24 02:47:43', '2021-02-24 02:47:43'),
(69, 1, 105, 0, NULL, '2021-02-24 02:49:18', '2021-02-24 02:49:18'),
(70, 1, 105, 0, NULL, '2021-02-24 02:59:49', '2021-02-24 02:59:49'),
(71, 1, 105, 0, NULL, '2021-02-24 02:59:57', '2021-02-24 02:59:57'),
(72, 1, 105, 0, NULL, '2021-02-24 03:00:51', '2021-02-24 03:00:51'),
(73, 1, 105, 1, 'Tafí Viejo', '2021-02-24 03:02:42', '2021-02-24 03:02:42'),
(74, 1, 105, 1, 'La Cocha', '2021-02-24 03:03:49', '2021-02-24 03:03:49'),
(75, 1, 105, 0, NULL, '2021-02-24 04:07:32', '2021-02-24 04:07:32'),
(76, 1, 105, 1, 'Río Chico', '2021-02-24 04:08:33', '2021-02-24 04:08:33'),
(79, 1, 115, 1, 'Graneros', '2021-02-24 14:34:18', '2021-02-24 14:34:18'),
(80, 1, 115, 0, NULL, '2021-02-24 14:35:22', '2021-02-24 14:35:22'),
(81, 0, 105, NULL, NULL, '2021-02-25 02:44:22', '2021-02-25 02:44:22'),
(82, 0, 115, NULL, NULL, '2021-02-25 05:11:49', '2021-02-25 05:11:49');

--
-- Volcado de datos para la tabla `cart_product`
--

INSERT INTO `cart_product` (`id`, `stock_order`, `product_id`, `cart_id`, `createdAt`, `updatedAt`) VALUES
(185, 1, 73, 53, '2021-02-20 01:07:58', '2021-02-20 01:07:58'),
(186, 1, 59, 53, '2021-02-20 01:08:00', '2021-02-20 01:08:00'),
(187, 1, 57, 53, '2021-02-20 01:08:02', '2021-02-20 01:08:02'),
(210, 3, 73, 54, '2021-02-23 21:18:29', '2021-02-23 21:18:29'),
(211, 4, 59, 54, '2021-02-23 21:18:34', '2021-02-23 21:18:34'),
(216, 1, 73, 63, '2021-02-24 01:45:43', '2021-02-24 01:45:43'),
(217, 1, 59, 63, '2021-02-24 01:45:45', '2021-02-24 01:45:45'),
(218, 2, 73, 64, '2021-02-24 01:53:30', '2021-02-24 01:53:30'),
(224, 1, 73, 65, '2021-02-24 02:47:04', '2021-02-24 02:47:04'),
(225, 1, 73, 68, '2021-02-24 02:49:13', '2021-02-24 02:49:13'),
(226, 1, 73, 69, '2021-02-24 02:59:16', '2021-02-24 02:59:16'),
(227, 1, 73, 70, '2021-02-24 02:59:55', '2021-02-24 02:59:55'),
(228, 1, 73, 71, '2021-02-24 03:00:48', '2021-02-24 03:00:48'),
(229, 1, 73, 72, '2021-02-24 03:02:38', '2021-02-24 03:02:38'),
(230, 1, 73, 73, '2021-02-24 03:03:43', '2021-02-24 03:03:43'),
(231, 2, 59, 74, '2021-02-24 04:07:22', '2021-02-24 04:07:22'),
(232, 6, 59, 75, '2021-02-24 04:08:25', '2021-02-24 04:08:25'),
(233, 5, 73, 79, '2021-02-24 14:34:32', '2021-02-24 14:34:32'),
(234, 4, 78, 79, '2021-02-24 14:34:33', '2021-02-24 14:34:33'),
(235, 1, 79, 79, '2021-02-24 14:34:34', '2021-02-24 14:34:34'),
(244, 1, 73, 76, '2021-02-24 20:43:50', '2021-02-24 20:43:50'),
(245, 1, 79, 76, '2021-02-24 20:51:27', '2021-02-24 20:51:27'),
(246, 1, 59, 76, '2021-02-24 20:58:03', '2021-02-24 20:58:03'),
(247, 1, 57, 76, '2021-02-24 21:05:17', '2021-02-24 21:05:17'),
(248, 1, 55, 76, '2021-02-24 21:13:45', '2021-02-24 21:13:45'),
(252, 1, 73, 80, '2021-02-25 05:11:46', '2021-02-25 05:11:46');





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
(45, 59, 39, '2020-12-24 18:00:30', '2020-12-24 18:00:30'),
(51, 78, 45, '2021-02-24 04:17:05', '2021-02-24 04:17:05');




COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
