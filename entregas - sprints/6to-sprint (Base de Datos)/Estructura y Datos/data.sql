-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 10-02-2021 a las 17:11:20
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

INSERT INTO `carts` (`id`, `status`, `user_id`, `createdAt`, `updatedAt`) VALUES
(1, 1, 78, '2020-12-22 03:27:06', '2020-12-22 03:27:06'),
(2, 0, 78, '2020-12-22 03:27:21', '2020-12-22 03:27:21'),
(29, 0, 95, '2021-01-11 08:16:45', '2021-01-11 08:16:45'),
(30, 0, 96, '2021-01-12 07:51:48', '2021-01-12 07:51:48'),
(33, 1, 94, '2021-01-25 01:55:19', '2021-01-25 01:55:19'),
(34, 0, 100, '2021-01-25 16:24:24', '2021-01-25 16:24:24'),
(35, 0, 101, '2021-01-26 03:10:48', '2021-01-26 03:10:48'),
(36, 1, 94, '2021-01-28 00:28:11', '2021-01-28 00:28:11'),
(37, 1, 94, '2021-01-28 00:28:55', '2021-01-28 00:28:55'),
(38, 1, 94, '2021-01-28 03:00:23', '2021-01-28 03:00:23'),
(39, 1, 94, '2021-01-28 03:15:15', '2021-01-28 03:15:15'),
(40, 1, 94, '2021-01-29 01:37:58', '2021-01-29 01:37:58'),
(42, 1, 94, '2021-01-29 02:58:47', '2021-01-29 02:58:47'),
(44, 1, 94, '2021-01-29 03:00:28', '2021-01-29 03:00:28'),
(45, 1, 94, '2021-01-29 03:04:37', '2021-01-29 03:04:37'),
(46, 1, 94, '2021-01-29 03:04:55', '2021-01-29 03:04:55'),
(47, 1, 94, '2021-01-29 05:59:07', '2021-01-29 05:59:07'),
(48, 1, 94, '2021-02-02 01:40:22', '2021-02-02 01:40:22'),
(49, 0, 94, '2021-02-04 05:54:25', '2021-02-04 05:54:25');

--
-- Volcado de datos para la tabla `cart_product`
--

INSERT INTO `cart_product` (`id`, `stock_order`, `product_id`, `cart_id`, `createdAt`, `updatedAt`) VALUES
(137, 100, 73, 40, '2021-01-29 02:57:53', '2021-01-29 02:57:53'),
(138, 200, 69, 40, '2021-01-29 02:57:54', '2021-01-29 02:57:54'),
(139, 1, 73, 42, '2021-01-29 03:00:22', '2021-01-29 03:00:22'),
(140, 1, 69, 42, '2021-01-29 03:00:23', '2021-01-29 03:00:23'),
(141, 1, 73, 44, '2021-01-29 03:01:34', '2021-01-29 03:01:34'),
(142, 1, 69, 44, '2021-01-29 03:01:35', '2021-01-29 03:01:35'),
(143, 4, 73, 45, '2021-01-29 03:04:44', '2021-01-29 03:04:44'),
(144, 3, 69, 45, '2021-01-29 03:04:46', '2021-01-29 03:04:46'),
(147, 9, 73, 46, '2021-01-29 05:42:25', '2021-01-29 05:42:25'),
(162, 1, 73, 47, '2021-01-29 07:40:49', '2021-01-29 07:40:49'),
(163, 15, 69, 47, '2021-01-29 07:40:50', '2021-01-29 07:40:50'),
(164, 1, 66, 47, '2021-01-29 07:40:50', '2021-01-29 07:40:50'),
(165, 1, 59, 47, '2021-01-29 07:40:51', '2021-01-29 07:40:51'),
(166, 5, 58, 47, '2021-01-29 07:40:52', '2021-01-29 07:40:52'),
(168, 1, 55, 47, '2021-01-29 07:41:21', '2021-01-29 07:41:21'),
(179, 1, 73, 48, '2021-02-04 05:45:50', '2021-02-04 05:45:50'),
(181, 1, 59, 49, '2021-02-04 05:54:55', '2021-02-04 05:54:55'),
(182, 1, 73, 49, '2021-02-04 06:08:18', '2021-02-04 06:08:18'),
(183, 1, 57, 49, '2021-02-04 06:08:20', '2021-02-04 06:08:20'),
(184, 1, 55, 49, '2021-02-04 06:08:20', '2021-02-04 06:08:20');

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
(43, 'producto-1611397116023.png', '2021-01-23 10:18:36', '2021-01-23 10:18:36');

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
(55, 'ippa Sippa (TDH Imperial Aussie IP)', 90, 10, 645644, 'Amarillo pálido, algo turbia y muy refrescante! Este híbrido entre una West Coast y una East Coast IPA tiene lo mejor de los dos mundos: de cuerpo medio, con aromas y sabores cítricos tropicales (ananá 🍍, maracuyá y mandarina 🍊).', 1, '2020-12-24 17:40:30', '2020-12-24 17:40:30'),
(56, 'Saison de Triomphe - Hoppy Saison', 115, 0, 0, 'Fermentada con un blend de 4 levaduras rurales, con maltas de cebada artesanales de La Plata y granos sin maltear de trigo y avena que le dan esa rusticidad típica del estilo, esta saison fue ademas lupulada con Enigma 🇦🇺Australiano!', 1, '2020-12-24 17:58:57', '2020-12-24 17:58:57'),
(57, 'William Wallace Scottish', 82, 5, 600, 'Una verdadera IPA de la costa oeste, inundación de lupulina americana en tus papilas gustativas con intensos sabores y aromas resinosos y cítricos (pino húmedo, cáscara de naranja 🍊, lima/limón 🍋y pomelo).', 2, '2020-12-24 17:59:34', '2020-12-24 17:59:34'),
(58, 'Mumbai 1947', 99, 20, 0, 'Una birra purasangre, muscular hasta explotar con ridículas cantidades de Galaxy y Cashmere.\\r\\nDe color amarillo pálido, turbia, jugosa, espesa e hiper lupulada, con intensas notas a maracuyá, mango, lima-limón, durazno y cascara de sandia #neverpony.', 3, '2020-12-24 18:00:02', '2020-12-24 18:00:02'),
(59, 'German Pills', 125, 10, 19, 'Esta IIPA esta cargada a tope con cantidades copiosas de los lupulos Vic Secret y Galaxy.\\r\\nDe color naranja intenso, turbia, jugosa, estimula tus papilas gustativas con intensas notas a naranja, durazno, mango, ananá. Sabores Cítricos/Tropicales brillan sobre la base maltosa.', 2, '2020-12-24 18:00:30', '2020-12-24 18:00:30'),
(60, 'Rippa Sippa (TDH Imperial Aussie IPA)', 150, 0, 0, '', 3, '2020-12-24 18:01:07', '2020-12-24 18:01:07'),
(61, 'Prickly Dingo - Catharina Sour con Cactus', 110, 50, 0, 'De color naranja intenso, cual noctiluca rabiosa, la prickly dingo es una catharina sour con cactus.\\r\\nUna cerveza acida, balanceada por el dulzor del cactus que le da sabores y aromas a chicle de tutti-frutti, sandia y kiwi.', 2, '2020-12-24 18:01:28', '2020-12-24 18:01:28'),
(64, 'de prueba 1', 0, 0, 0, '', 1, '2021-01-19 03:49:19', '2021-01-19 03:49:19'),
(65, 'de prueba 2', 0, 0, 0, '', 1, '2021-01-19 03:49:24', '2021-01-19 03:49:24'),
(66, 'de prueba 3', 0, 0, 0, '', 1, '2021-01-21 02:26:49', '2021-01-21 02:26:49'),
(67, 'de prueba 4', 0, 0, 0, '', 1, '2021-01-21 02:26:55', '2021-01-21 02:26:55'),
(69, 'asddas', 43, 2, 0, 'asdasdasdasdaaaaaaaaaaaaaaaaaaasdasdasdasdaaaaaaaaaaaaaaaaaaasdasdasdasdaaaaaaaaaaaaaaaaaaasdasdasdasdaaaaaaaaaaaaaaaaaaasdasdasdasdaaaaaaaaaaaaaaaaaaasdasdasdasdaaaaaaaaaaaaaaaaaaasdasdasdasdaaaaaaaaaaaaaaaaaaasdasdasdasaaasdasdasdasdaa', 3, '2021-01-23 03:29:57', '2021-01-23 03:29:57'),
(70, 'dasasd', 0, 0, 0, '', 1, '2021-01-23 09:07:09', '2021-01-23 09:07:09'),
(72, 'dss', 0, 0, 0, '', 1, '2021-01-23 10:19:06', '2021-01-23 10:19:06'),
(73, 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', 30, 0, 83, '', 1, '2021-01-28 02:13:41', '2021-01-28 02:13:41');

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `suscription_status`, `newsletter_status`, `admin`, `verify`, `verify_code`, `createdAt`, `updatedAt`) VALUES
(78, 'User-comun', 'user@user.com', '$2a$10$9z6neGiOZKrB2EuJyRyYiOC2v0301XZaxIS8HgY2Bp.MtDf9kBgL.', 0, 0, 0, 1, '7gi440yh3w', '2021-01-06 20:02:08', '2021-01-06 20:02:08'),
(79, 'admin', 'admin@admin.com', '$2a$10$n2FSwB7/AaBfK.GXv.dWo.LK3mu/GJqKkCeNobUTvc0u8jwvGwvkS', 0, 0, 1, 1, 'pr6kf9s33f', '2021-01-06 20:02:26', '2021-01-06 20:02:26'),
(80, 'usuario-no-verificado', 'user-no-verificado@user.com', '$2a$10$F1.x741JLTWIQbTrpJroCekqGMNSVjPcTvLBxVjeT013X3txavS2O', 0, 0, 0, 0, 'j6sdmgsvj5', '2021-01-06 20:02:56', '2021-01-06 20:02:56'),
(94, 'KIPPES', 'kippes.diego@gmail.com', '$2a$10$YFZQ3KmtMeLZLkhOjfAvlOl0.ac5IJHCu0SO35Im5D/I8s5bt/HPu', 0, 1, 1, 1, 'rqql5st4gf', '2021-01-07 23:46:49', '2021-01-07 23:46:49'),
(95, 'asd', 'fasdfsdafds@gmail.com', '$2a$10$jcNswg.xoTqn0Ts7dau52uMmxh86DUXoGGAdYSGdngy3KRRngD8a2', 0, 0, 0, 0, 'm5433ngw2s', '2021-01-11 07:16:53', '2021-01-11 07:16:53'),
(96, 'eaea', 'diego.kippes@hotmail.com', '$2a$10$rrKptLwGQ7Od1i7K3BnGuOSE4EsYn0XLquJKJ33uIbykEzeYfyXyG', 0, 0, 0, 0, 'lujlarb03', '2021-01-12 07:49:12', '2021-01-12 07:49:12'),
(97, 'KIPPES', 'asdasd@gmail.com', '$2a$10$U2fcl2ZTM1HXGorku4JtZObLD/XQt.WPoFRSz/lsIWBG47EzO6KCS', 0, 0, 0, 0, 'e17afrr1es', '2021-01-15 22:53:00', '2021-01-15 22:53:00'),
(99, 'dffd', 'asdsadds@gmail.com', '$2a$10$OO5ye4ZB9z55CBSpAC4NdeP2/aeJ4w32MUX.Jxj7uzWVxe69KpvKu', 0, 0, 0, 0, 'rb932e3dq', '2021-01-25 16:22:59', '2021-01-25 16:22:59'),
(100, 'fdsfdsfds', 'fdsfdsfds@gmail.com', '$2a$10$70WZ9dK8Bvu4U.2Lerr0G..3R/QllYTv81vUaa2g23n253/RgOQxC', 0, 0, 0, 0, 'cuk0g92q4o', '2021-01-25 16:24:16', '2021-01-25 16:24:16'),
(101, 'KIPPES', 'asdsssssss@gmail.com', '$2a$10$MoraaHykzFJNkmwOzs37gO8vJi/4VJD/M3chbBUAWbTi5l58cGHVO', 0, 0, 1, 0, '0j97i90af8', '2021-01-26 03:10:22', '2021-01-26 03:10:22');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
