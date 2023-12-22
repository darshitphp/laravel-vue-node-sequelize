-- phpMyAdmin SQL Dump
-- version 5.1.1deb5ubuntu1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Dec 11, 2023 at 06:47 PM
-- Server version: 10.6.12-MariaDB-0ubuntu0.22.04.1
-- PHP Version: 8.1.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `laravel_volt`
--

-- --------------------------------------------------------

--
-- Table structure for table `auths`
--

CREATE TABLE `auths` (
  `iUserId` int(11) NOT NULL,
  `vUsername` varchar(255) DEFAULT NULL,
  `vEmail` varchar(255) DEFAULT NULL,
  `vAddress` varchar(255) NOT NULL,
  `vCity` varchar(255) NOT NULL,
  `vPincode` varchar(255) NOT NULL,
  `vOTP` int(11) DEFAULT NULL,
  `vPassword` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `auths`
--

INSERT INTO `auths` (`iUserId`, `vUsername`, `vEmail`, `vAddress`, `vCity`, `vPincode`, `vOTP`, `vPassword`) VALUES
(1, 'celio', 'celio@gmail.com', '0', '0', '', 12224, '12345678'),
(2, 'celio', 'celio@gmail.com', '0', '0', '', NULL, '12345678'),
(3, 'celio', NULL, '0', '0', '', 12224, '12345678'),
(4, 'celio', NULL, '0', '0', '', 12224, '12345678'),
(5, 'celio', 'celio@gmail.com', '0', '0', '', NULL, '12345678'),
(6, 'glenn', 'glenn@gmail.com', 'East AVenue', 'New York', '+856964', NULL, '12345678'),
(7, 'glenn', NULL, 'East AVenue', 'New York', '+856964', 45693, '12345678'),
(8, 'glenn', NULL, 'East AVenue', 'New York', '+856964', 45693, '12345678'),
(9, 'glenn', NULL, 'East AVenue', 'New York', '+856964', 45693, '12345678'),
(10, 'glenn', NULL, 'East AVenue', 'New York', '+856964', 45693, '12345678'),
(11, 'glenn', NULL, 'East AVenue', 'New York', '+856964', NULL, '12345678'),
(12, 'glenn', NULL, 'East AVenue', 'New York', '+856964', NULL, '12345678'),
(13, 'glenn', NULL, 'East AVenue', 'New York', '+856964', NULL, '12345678'),
(14, 'glenn', NULL, 'East AVenue', 'New York', '+856964', NULL, '12345678'),
(15, 'glenn', NULL, 'East AVenue', 'New York', '+856964', NULL, '12345678'),
(16, 'glenn', NULL, 'East AVenue', 'New York', '+856964', NULL, '12345678'),
(17, 'glenn', NULL, 'East AVenue', 'New York', '+856964', NULL, '12345678'),
(18, 'glenn', NULL, 'East AVenue', 'New York', '+856964', NULL, '12345678'),
(19, 'glenn', NULL, 'East AVenue', 'New York', '+856964', NULL, '12345678'),
(20, 'glenn', NULL, 'East AVenue', 'New York', '+856964', NULL, '12345678'),
(21, 'glenn', '', 'East AVenue', 'New York', '+856964', NULL, '12345678'),
(22, 'glenn', '', 'East AVenue', 'New York', '+856964', NULL, '12345678'),
(23, 'glennnn', '', 'East AVenue', 'New York', '+856964', NULL, '12345678'),
(24, 'glennnn', NULL, 'East AVenue', 'New York', '+856964', NULL, '12345678'),
(25, 'glennnn', NULL, 'East AVenue', 'New York', '+856964', NULL, '12345678'),
(26, 'glennnn', NULL, 'East AVenue', 'New York', '+856964', NULL, '12345678'),
(27, 'glennnn', NULL, 'East AVenue', 'New York', '+856964', NULL, '12345678'),
(28, 'sandy', NULL, 'East AVenue', 'New York', '+856964', NULL, '12345678'),
(29, 'sandy', 'w', 'East AVenue', 'New York', '+856964', NULL, '12345678'),
(30, 'sandy', 'w', 'East AVenue', 'New York', '+856964', NULL, '12345678'),
(31, 'sandy', NULL, 'East AVenue', 'New York', '+856964', NULL, '12345678'),
(32, 'sandy', NULL, 'East AVenue', 'New York', '+856964', NULL, '12345678'),
(33, 'sandy', NULL, 'East AVenue', 'New York', '+856964', NULL, '12345678'),
(34, 'sandy', NULL, 'East AVenue', 'New York', '+856964', NULL, '12345678'),
(35, 'sandy', NULL, 'East AVenue', 'New York', '+856964', NULL, '12345678'),
(36, 'sandy', NULL, 'East AVenue', 'New York', '+856964', NULL, '12345678');

-- --------------------------------------------------------

--
-- Table structure for table `blogs`
--

CREATE TABLE `blogs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `category_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `slug` varchar(255) NOT NULL,
  `content` text NOT NULL,
  `tags` varchar(255) NOT NULL,
  `comments` varchar(255) NOT NULL,
  `blog_status` enum('publish','draft') NOT NULL,
  `author` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `blogs`
--

INSERT INTO `blogs` (`id`, `category_id`, `name`, `slug`, `content`, `tags`, `comments`, `blog_status`, `author`, `created_at`, `updated_at`) VALUES
(1, 3, 'Device Test Blog', '@devices', 'Answers to all your questions about the Kindle Unlimited reading subscription', '#android,#ios,#laptop', '#android,#ios,#laptop', 'publish', 'unknown', '2023-11-22 09:44:54', '2023-11-22 09:44:54'),
(2, 1, 'Test123', '@test11', '<p>Test123</p>', '#custom #test #new', 'test commentsss', 'draft', NULL, '2023-11-22 12:49:58', '2023-11-23 05:25:55');

-- --------------------------------------------------------

--
-- Table structure for table `blog_categories`
--

CREATE TABLE `blog_categories` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `slug` varchar(255) NOT NULL,
  `parent_id` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `blog_categories`
--

INSERT INTO `blog_categories` (`id`, `name`, `slug`, `parent_id`, `description`, `created_at`, `updated_at`) VALUES
(1, 'Custom', 'custom-blog', '0', '<p>test custom blog</p>', '2023-11-21 11:53:06', '2023-11-21 11:53:06'),
(2, 'Technology123', 'tech-it-hubs', '1', '<p>Test Technology Change Body</p>', '2023-11-21 12:03:47', '2023-11-21 13:05:05'),
(3, 'Device', '@homepage', '0', '<p>Device</p>', '2023-11-22 05:30:09', '2023-11-22 06:00:36'),
(4, 'Android', '@homepage', '3', '<p>Android Phone</p>', '2023-11-22 05:30:40', '2023-11-22 06:00:49'),
(5, 'IOS', '@homepage', '3', '<p>IOS</p>', '2023-11-22 05:31:14', '2023-11-22 06:01:01'),
(6, 'Samsung', '@homepage', '4', '<p>Samsung Phones</p>', '2023-11-22 05:31:38', '2023-11-22 06:01:10'),
(7, 'Xiomi', '@homepage', '4', '<p>Xiomi</p>', '2023-11-22 05:32:02', '2023-11-22 06:01:19'),
(8, 'Apple', '@homepage', '5', '<p>Apple Phones</p>', '2023-11-22 05:32:20', '2023-11-22 06:01:32'),
(9, 'Samsung S22 Ultra', '@homepage', '6', '<p>Samsung S21 Ultra Phone</p>', '2023-11-22 05:32:50', '2023-11-22 06:01:41');

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `status` enum('enable','disable') NOT NULL,
  `include` enum('yes','no') NOT NULL,
  `content` text NOT NULL,
  `banner_image` varchar(255) NOT NULL,
  `slug` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `name`, `status`, `include`, `content`, `banner_image`, `slug`, `created_at`, `updated_at`) VALUES
(2, 'hello12', 'disable', 'yes', '<p>no content changed</p>', '2023-1129-16-54-26_58e9197deb97430e819064f8 (16).png', 'no slug', '2023-11-29 09:42:45', '2023-11-29 11:24:37');

-- --------------------------------------------------------

--
-- Table structure for table `comments`
--

CREATE TABLE `comments` (
  `iCommentId` int(11) NOT NULL,
  `vTitle` varchar(50) NOT NULL,
  `vCommentTableId` varchar(50) NOT NULL,
  `vCommentTableType` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `comments`
--

INSERT INTO `comments` (`iCommentId`, `vTitle`, `vCommentTableId`, `vCommentTableType`) VALUES
(1, 'Awesome', '2', 'Image'),
(2, 'Bad Movie', '1', 'video');

-- --------------------------------------------------------

--
-- Table structure for table `customers`
--

CREATE TABLE `customers` (
  `iCustomerId` int(11) NOT NULL,
  `vFullName` varchar(50) DEFAULT NULL,
  `vPhone` varchar(50) NOT NULL,
  `vEmail` varchar(50) NOT NULL,
  `vCity` varchar(50) NOT NULL,
  `vPin_Code` varchar(50) NOT NULL,
  `vLandmark` varchar(50) NOT NULL,
  `vState` varchar(50) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `RandomString` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `customers`
--

INSERT INTO `customers` (`iCustomerId`, `vFullName`, `vPhone`, `vEmail`, `vCity`, `vPin_Code`, `vLandmark`, `vState`, `createdAt`, `updatedAt`, `RandomString`) VALUES
(1, 'Shaun Murphy', '8564796321', 'shaun.murphy@gmail.com', 'Nagpur', '440030', 'Near RBI Sq.', 'Maharashtra', '2023-04-20 04:29:03', '2023-04-20 04:29:03', 'asdwerwefwef'),
(2, 'ATif', '8564796321', 'atif@gmail.com', 'Nagpur', '440030', 'Near Shiv Mandir.', 'Maharashtra', '2023-04-20 04:29:03', '2023-04-20 04:29:03', ''),
(3, 'mukesh', '8564796321', 'mukesh@gmail.com', 'Delhi', '440030', 'Near Shiv Mandir.', 'MH', '2023-04-20 07:24:25', '2023-04-20 07:24:25', ''),
(5, 'brijesh', '8564796321', 'mukesh@gmail.com', 'Delhi', '440030', 'Near Shiv Mandir.', 'MH', '2023-04-20 07:26:32', '2023-04-20 07:26:32', ''),
(6, 'raj', '8527419633', 'raj@gmail.com', 'gorkhpur', '440020', 'Near Ram Mandir.', 'UP', '2023-04-20 07:27:05', '2023-05-05 07:49:27', ''),
(7, 'mukesh', '8564796321', 'mukesh@gmail.com', 'Delhi', '440030', 'Near Shiv Mandir.', 'MH', '2023-04-26 06:53:53', '2023-04-26 06:53:53', ''),
(8, 'rajessh', '8564796321', 'mukesh@gmail.com', 'Delhi', '440030', 'Near Shiv Mandir.Near Saudi', 'MH', '2023-04-26 08:47:01', '2023-04-26 08:47:01', ''),
(9, 'mukesh', '8564796321', 'mukesh@gmail.com', 'Delhi', '440030', 'Near Shiv Mandir.', 'MH', '2023-05-05 07:47:41', '2023-05-05 07:47:41', 'asd'),
(10, 'mukesh', '8564796321', 'mukesh@gmail.com', 'Delhi', '440030', 'Near Shiv Mandir.', 'MH', '2023-05-05 07:48:41', '2023-05-05 07:48:41', 'JWxlWXc'),
(11, 'mukesh ambani', '8564796321', 'mukesh@gmail.com', 'Delhi', '440030', 'Near Shiv Mandir.', 'MH', '2023-05-05 07:50:50', '2023-05-05 07:50:50', 'WDQDmKWyaR'),
(12, 'mukesh ambani', '8564796321', 'mukesh@gmail.com', 'Delhi', '440030', 'Near Shiv Mandir.', 'MH', '2023-05-05 13:16:31', '2023-05-05 13:16:31', '9N97bTkwP3'),
(13, 'mukesh ambani', '8564796321', 'mukesh@gmail.com', 'Delhi', '440030', 'Near Shiv Mandir.', 'MH', '2023-05-05 13:16:34', '2023-05-05 13:16:34', 'ZpQsZfVqNP');

-- --------------------------------------------------------

--
-- Table structure for table `excel_csv`
--

CREATE TABLE `excel_csv` (
  `iCsvId` int(11) NOT NULL,
  `vName` varchar(255) NOT NULL,
  `vCity` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `footers`
--

CREATE TABLE `footers` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(255) NOT NULL,
  `status` enum('active','inactive') NOT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `footers`
--

INSERT INTO `footers` (`id`, `title`, `status`, `created_at`, `updated_at`) VALUES
(46, 'Homepage change Again', 'active', '2023-11-21 05:11:20', '2023-11-21 09:56:55');

-- --------------------------------------------------------

--
-- Table structure for table `footer_transaction`
--

CREATE TABLE `footer_transaction` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `footer_id` bigint(20) UNSIGNED NOT NULL,
  `page_id` bigint(20) UNSIGNED DEFAULT NULL,
  `content` text NOT NULL,
  `custom_link` varchar(255) DEFAULT NULL,
  `status` enum('active','inactive') NOT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `footer_transaction`
--

INSERT INTO `footer_transaction` (`id`, `footer_id`, `page_id`, `content`, `custom_link`, `status`, `created_at`, `updated_at`) VALUES
(8, 46, 1, '<p>Homepage predefined test</p>', NULL, 'active', '2023-11-21 10:02:16', '2023-11-21 10:02:16'),
(9, 46, 3, '<p>Contact predefined test Haa Karyo</p>', NULL, 'inactive', '2023-11-21 10:02:16', '2023-11-21 10:02:16');

-- --------------------------------------------------------

--
-- Table structure for table `forms`
--

CREATE TABLE `forms` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `title` varchar(255) NOT NULL,
  `slug` varchar(255) NOT NULL,
  `action_url` varchar(255) DEFAULT NULL,
  `submit_type` enum('save_entry','send_email') NOT NULL,
  `fields` longtext NOT NULL,
  `content` longtext DEFAULT NULL,
  `email_adds` text DEFAULT NULL,
  `custom_js` longtext NOT NULL,
  `custom_css` longtext NOT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `forms`
--

INSERT INTO `forms` (`id`, `name`, `title`, `slug`, `action_url`, `submit_type`, `fields`, `content`, `email_adds`, `custom_js`, `custom_css`, `created_at`, `updated_at`) VALUES
(1, 'contact us', 'Contact Us', '@contact_us', '/contact_us_action', 'send_email', '<div class=\"card\"><div class=\"card-body\"><form action=\"/contact_us_action\" method=\"post\" enctype=\"multipart/form-data\" id=\"dynamicForm\"><label>Your Name</label><input type=\"text\" class=\"form-control\" name=\"name\" placeholder=\"Enter input Your Name name\" required=\"\"><label>Your Message</label><input type=\"text\" class=\"form-control\" name=\"message\" placeholder=\"Enter input Your Message name\" required=\"\"><label>Your Email</label><input type=\"email\" class=\"form-control\" name=\"email\" placeholder=\"Enter input email\" required=\"\"><label>Your Contact Number</label><input type=\"number\" class=\"form-control\" name=\"contact_number\" placeholder=\"Enter input contact_number\" required=\"\"><input type=\"submit\" name=\"submit\" class=\"btn btn-primary\" value=\"submit\"></form></div></div>', '<form id=\"dynamicForm\" action=\"/contact_us_action\" enctype=\"multipart/form-data\" method=\"post\"><label>Your Name</label><input class=\"form-control\" required=\"\" type=\"text\" placeholder=\"Enter input Your Name name\"><label>Your Message</label><input class=\"form-control\" name=\"message\" required=\"\" type=\"text\" placeholder=\"Enter input Your Message name\"><label>Your Email</label><input class=\"form-control\" name=\"email\" required=\"\" type=\"email\" placeholder=\"Enter input email\"><label>Your Contact Number</label><input class=\"form-control\" name=\"contact_number\" required=\"\" type=\"number\" placeholder=\"Enter input contact_number\"><input class=\"btn btn-primary\" type=\"submit\" value=\"submit\"></form>', 'darshit@mailinator.com,darshit.adorncommerce@gmail.com,mitraj.adorncommerce@gmail.com', '<p>$(document).ready(function() {<br>&nbsp; &nbsp; &nbsp; $(document).on(\'click\', \'#generateForm\', function() {<br>&nbsp; &nbsp; &nbsp; &nbsp; var html = \"\";<br>&nbsp; &nbsp; &nbsp; &nbsp; var error = false;<br>&nbsp; &nbsp; &nbsp; &nbsp; html += \'&lt;div class=\"card\"&gt;&lt;div class=\"card-body\"&gt;&lt;form action=\"\" id=\"dynamicForm\"&gt;\';<br>&nbsp; &nbsp; &nbsp; &nbsp; $(this).parent().find(\".mb-4\").each(function(){<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; if($(this).hasClass(\'textboxElement\')){<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; var textName = $(this).find(\'input[type=\"text\"]\').val();<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; var textVal = $(this).find(\'input[type=\"text\"]\').last().val();</p>\n<p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; if(textVal.length == 0){<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; $(this).find(\".textboxElementError\").show();<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; error = true;<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; }else{<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; $(this).find(\".textboxElementError\").hide();<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; html += \'&lt;label&gt;\'+textVal+\'&lt;/label&gt;\';<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; html += \'&lt;input type=\"text\" class=\"form-control\" name=\"\'+textName+\'\" placeholder=\"Enter input \'+textVal+\' name\" required=\"\"&gt;\';<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; }<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; }<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; if($(this).hasClass(\'selectElement\')){<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; var textVal = $(this).find(\'input[type=\"text\"]\').val();<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; if(textVal.length == 0){<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; $(this).find(\".selectElementError\").show();<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; error = true;<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; }else {<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; $(this).find(\".selectElementError\").hide();<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; html += \'&lt;select class=\"form-select\" name=\"\' + textVal + \'\"&gt;\';<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; html += \'&lt;option value=\"\"&gt;Select \' + textVal + \'&lt;/option&gt;\';<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; $(this).find(\'.addMoreOptions\').each(function () {<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; var tName = $(this).find(\'input[type=\"text\"]\').val();<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; var tVal = $(this).find(\'input[type=\"text\"]\').last().val();<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; html += \'&lt;option value=\"\' + tVal + \'\"&gt;\' + tName + \'&lt;/option&gt;\';<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; })<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; html += \'&lt;/select&gt;\';<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; }<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; }<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; if($(this).hasClass(\'checkboxElement\')){<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; var textVal = $(this).find(\'input[type=\"text\"]\').val();<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; if(textVal.length == 0){<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; $(this).find(\".checkboxElementError\").show();<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; error = true;<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; }else {<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; $(this).find(\".checkboxElementError\").hide();<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; html += \'&lt;label&gt;\' + textVal + \'&lt;/label&gt;\';<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; $(this).find(\'.addMoreOptions\').each(function () {<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; var tName = $(this).find(\'input[type=\"text\"]\').val();<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; var tVal = $(this).find(\'input[type=\"text\"]\').last().val();<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; html += \'&lt;div className=\"form-check\"&gt;&lt;input className=\"form-check-input\" type=\"checkbox\" value=\"\' + tVal + \'\" id=\"\'+tName+\'_\"&gt;&lt;label className=\"form-check-label\" for=\"\'+tName+\'_\"&gt;\';<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; html += tName + \'&lt;/label&gt;&lt;/div&gt;\';<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; })<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; }<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; }<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; if($(this).hasClass(\'radioElement\')){<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; var textVal = $(this).find(\'input[type=\"text\"]\').val();<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; if(textVal.length == 0){<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; $(this).find(\".radioElementError\").show();<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; error = true;<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; }else {<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; $(this).find(\".radioElementError\").hide();<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; html += \'&lt;label&gt;\' + textVal + \'&lt;/label&gt;\';<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; $(this).find(\'.addMoreOptions\').each(function () {<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; var tName = $(this).find(\'input[type=\"text\"]\').val();<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; var tVal = $(this).find(\'input[type=\"text\"]\').last().val();<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; html += \'&lt;div class=\"form-check\"&gt;&lt;input class=\"form-check-input\" type=\"radio\" name=\"flexRadioDefault\" id=\"\'+tName+\'_\" value=\"\' + tVal + \'\"&gt;&lt;label for=\"\'+tName+\'_\" class=\"form-check-label\"&gt;\';<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; html += tName + \'&lt;/label&gt;&lt;/div&gt;\';<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; })<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; }<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; }<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; if($(this).hasClass(\'fileElement\')){<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; var textName = $(this).find(\'input[type=\"text\"]\').val();<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; var textVal = $(this).find(\'input[type=\"text\"]\').last().val();<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; if(textVal.length == 0){<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; $(this).find(\".fileElementError\").show();<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; error = true;<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; }else {<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; $(this).find(\".fileElementError\").hide();<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; html += \'&lt;label&gt;\' + textName + \'&lt;/label&gt;\';<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; html += \'&lt;input type=\"file\" class=\"form-control\" name=\"\' + textVal + \'\" required=\"\"&gt;\';<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; }<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; }<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; if($(this).hasClass(\'numberElement\')){<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; var textName = $(this).find(\'input[type=\"text\"]\').val();<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; var textVal = $(this).find(\'input[type=\"text\"]\').last().val();<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; if(textVal.length == 0){<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; $(this).find(\".numberElementError\").show();<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; error = true;<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; }else {<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; $(this).find(\".numberElementError\").hide();<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; html += \'&lt;label&gt;\' + textName + \'&lt;/label&gt;\';<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; html += \'&lt;input type=\"number\" class=\"form-control\" name=\"\' + textVal + \'\" placeholder=\"Enter input \' + textVal + \'\" required=\"\"&gt;\';<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; }<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; }<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; if($(this).hasClass(\'emailElement\')){<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; var textName = $(this).find(\'input[type=\"text\"]\').val();<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; var textVal = $(this).find(\'input[type=\"text\"]\').last().val();<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; if(textVal.length == 0){<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; $(this).find(\".emailElementError\").show();<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; error = true;<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; }else {<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; $(this).find(\".emailElementError\").hide();<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; html += \'&lt;label&gt;\' + textName + \'&lt;/label&gt;\';<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; html += \'&lt;input type=\"email\" class=\"form-control\" name=\"\' + textVal + \'\" placeholder=\"Enter input \' + textVal + \'\" required=\"\"&gt;\';<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; }<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; }<br>&nbsp; &nbsp; &nbsp; &nbsp; })<br>&nbsp; &nbsp; &nbsp; &nbsp; html += \'&lt;input type=\"submit\" name=\"submit\" class=\"btn btn-primary\" value=\"submit\"&gt;&lt;/form&gt;&lt;/div&gt;&lt;/div&gt;\';<br>&nbsp; &nbsp; &nbsp; &nbsp; if(error == false){<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; $(\".displayGeneratedForm\").html(html);<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; $(\".displayGeneratedForm\").show();<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; $(\"#closeGeneratedForm\").show();<br>&nbsp; &nbsp; &nbsp; &nbsp; }else{<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; $(\"#closeGeneratedForm\").hide();<br>&nbsp; &nbsp; &nbsp; &nbsp; }<br>&nbsp; &nbsp; &nbsp; });</p>\n<p>&nbsp; &nbsp; &nbsp; $(document).on(\'click\', \'#closeGeneratedForm\', function() {<br>&nbsp; &nbsp; &nbsp; &nbsp; $(\".displayGeneratedForm\").hide();<br>&nbsp; &nbsp; &nbsp; });</p>\n<p>&nbsp; &nbsp; &nbsp; $(document).on(\'click\', \'#addMoreInputs\', function() {<br>&nbsp; &nbsp; &nbsp; &nbsp; var selectedField = $(\".inputFormFields\").val();<br>&nbsp; &nbsp; &nbsp; &nbsp; var displayInputContents = $(this).closest(\'.mb-4\').find(\'.displayInputContents\');</p>\n<p>&nbsp; &nbsp; &nbsp; &nbsp; // displayInputContents.empty();<br>&nbsp; &nbsp; &nbsp; &nbsp; if (selectedField === \'text\') {<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; var textboxElement = $(\'#hiddenInputElements\').find(\'.textboxElement\').clone();<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; displayInputContents.append(textboxElement);<br>&nbsp; &nbsp; &nbsp; &nbsp; } else if (selectedField === \'select\') {<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; var selectElement = $(\'#hiddenInputElements\').find(\'.selectElement\').clone();<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; displayInputContents.append(selectElement);<br>&nbsp; &nbsp; &nbsp; &nbsp; } else if (selectedField === \'checkbox\') {<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; var checkboxElement = $(\'#hiddenInputElements\').find(\'.checkboxElement\').clone();<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; displayInputContents.append(checkboxElement);<br>&nbsp; &nbsp; &nbsp; &nbsp; } else if (selectedField === \'radio\') {<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; var radioElement = $(\'#hiddenInputElements\').find(\'.radioElement\').clone();<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; displayInputContents.append(radioElement);<br>&nbsp; &nbsp; &nbsp; &nbsp; } else if (selectedField === \'file\') {<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; var fileElement = $(\'#hiddenInputElements\').find(\'.fileElement\').clone();<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; displayInputContents.append(fileElement);<br>&nbsp; &nbsp; &nbsp; &nbsp; } else if (selectedField === \'number\') {<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; var numberElement = $(\'#hiddenInputElements\').find(\'.numberElement\').clone();<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; displayInputContents.append(numberElement);<br>&nbsp; &nbsp; &nbsp; &nbsp; } else if (selectedField === \'email\') {<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; var emailElement = $(\'#hiddenInputElements\').find(\'.emailElement\').clone();<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; displayInputContents.append(emailElement);<br>&nbsp; &nbsp; &nbsp; &nbsp; }<br>&nbsp; &nbsp; &nbsp; });</p>\n<p>&nbsp; &nbsp; &nbsp; $(document).on(\'click\', \'.addInputOptions\', function() {<br>&nbsp; &nbsp; &nbsp; &nbsp; var selectField = $(\"#hiddenInputElements\").find(\'.selectElement\').find(\'.addMoreOptions\').clone();<br>&nbsp; &nbsp; &nbsp; &nbsp; $(this).before(selectField);<br>&nbsp; &nbsp; &nbsp; });</p>\n<p>&nbsp; &nbsp; &nbsp; $(document).on(\'click\', \'.addCheckboxOptions\', function() {<br>&nbsp; &nbsp; &nbsp; &nbsp; var checkboxField = $(\"#hiddenInputElements\").find(\'.checkboxElement\').find(\'.addMoreOptions\').clone();<br>&nbsp; &nbsp; &nbsp; &nbsp; $(this).before(checkboxField);<br>&nbsp; &nbsp; &nbsp; });</p>\n<p>&nbsp; &nbsp; &nbsp; $(document).on(\'click\', \'.addRadioOptions\', function() {<br>&nbsp; &nbsp; &nbsp; &nbsp; var radioField = $(\"#hiddenInputElements\").find(\'.radioElement\').find(\'.addMoreOptions\').clone();<br>&nbsp; &nbsp; &nbsp; &nbsp; $(this).before(radioField);<br>&nbsp; &nbsp; &nbsp; });</p>\n<p>&nbsp; &nbsp; &nbsp; $(\'#addMoreInputs\').click(function() {<br>&nbsp; &nbsp; &nbsp; &nbsp; var hiddenInputs = $(\'#hiddenInputs\').clone();<br>&nbsp; &nbsp; &nbsp; &nbsp; $(\'#hiddenMoreInputs\').append(hiddenInputs);<br>&nbsp; &nbsp; &nbsp; });</p>\n<p>&nbsp; &nbsp; &nbsp; $(document).on(\'click\', \'.removeInputs\', function() {<br>&nbsp; &nbsp; &nbsp; &nbsp; $(this).closest(\'.mb-4\').remove();<br>&nbsp; &nbsp; &nbsp; });</p>\n<p>&nbsp; &nbsp; });</p>', '<div>\n<pre>/*<br> * The MIT License<br> * Copyright (c) 2012 Matias Meno &lt;m@tias.me&gt;<br> */<br>.dropzone, .dropzone * {<br>  box-sizing: border-box; }<br><br>.dropzone {<br>  position: relative; }<br>  .dropzone .dz-preview {<br>    position: relative;<br>    display: inline-block;<br>    width: 120px;<br>    margin: 0.5em; }<br>    .dropzone .dz-preview .dz-progress {<br>      display: block;<br>      height: 15px;<br>      border: 1px solid #aaa; }<br>      .dropzone .dz-preview .dz-progress .dz-upload {<br>        display: block;<br>        height: 100%;<br>        width: 0;<br>        background: green; }<br>    .dropzone .dz-preview .dz-error-message {<br>      color: red;<br>      display: none; }<br>    .dropzone .dz-preview.dz-error .dz-error-message, .dropzone .dz-preview.dz-error .dz-error-mark {<br>      display: block; }<br>    .dropzone .dz-preview.dz-success .dz-success-mark {<br>      display: block; }<br>    .dropzone .dz-preview .dz-error-mark, .dropzone .dz-preview .dz-success-mark {<br>      position: absolute;<br>      display: none;<br>      left: 30px;<br>      top: 30px;<br>      width: 54px;<br>      height: 58px;<br>      left: 50%;<br>      margin-left: -27px; }</pre>\n</div>', '2023-10-31 05:43:37', '2023-10-31 05:44:29');

-- --------------------------------------------------------

--
-- Table structure for table `gallaries`
--

CREATE TABLE `gallaries` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `image` varchar(255) NOT NULL,
  `alter` varchar(255) NOT NULL,
  `custom_link` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `gallaries`
--

INSERT INTO `gallaries` (`id`, `image`, `alter`, `custom_link`, `created_at`, `updated_at`) VALUES
(2, '2023-1128-15-8-0_wp2416703-harvey-specter-wallpapers.jpg', 'harvey', 'https://www.harvey-specter.com', '2023-11-28 09:38:30', '2023-11-28 11:10:06'),
(3, '2023-1128-16-28-50_Truecaller.png', 'Truecaller', 'https://www.truecaller.com', '2023-11-28 10:58:50', '2023-11-28 11:10:25'),
(6, '2023-1128-16-29-41_twitter-icon.png', 'twitter', 'https://www.twitter.com', '2023-11-28 10:59:41', '2023-11-28 11:10:33'),
(7, '2023-1128-16-29-41_whatsapp-icon.png', 'whatsapp', 'https://www.whatsapp.com', '2023-11-28 10:59:41', '2023-11-28 11:10:37');

-- --------------------------------------------------------

--
-- Table structure for table `headers`
--

CREATE TABLE `headers` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(255) NOT NULL,
  `content` longtext DEFAULT NULL,
  `logo_img` varchar(255) DEFAULT NULL,
  `position` enum('left','center','right') NOT NULL,
  `social_links` longtext NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `headers`
--

INSERT INTO `headers` (`id`, `title`, `content`, `logo_img`, `position`, `social_links`, `created_at`, `updated_at`) VALUES
(1, 'Homepage12', '', '2023-112-16-7-17_mockup-calendar-presentation.png', 'left', '[[\"Instagram\",\"2023-112-16-7-17_instagram-icon.png\",\"www.instagram.com\"],[\"Twitter\",\"2023-112-16-7-17_twitter-icon.png\",\"www.twitter.com\"],[\"Facebook\",\"2023-112-16-7-17_facebook-icon.png\",\"www.facebook.com\"]]', NULL, NULL),
(2, 'Contact', '<p>Test</p>', '2023-116-9-57-15_Screenshot from 2023-11-06 12-23-44.png', 'center', '[[\"Facebook\",\"2023-116-9-57-15_facebook-icon.png\",\"www.facebook.com\"],[\"Whatsapp\",\"2023-116-9-57-15_whatsapp-icon.png\",\"www.whatsapp.com\"]]', NULL, NULL),
(3, 'Testt', '<p>asfasf</p>', '2023-121-12-28-37_screen.png', 'center', '[[\"Facebook\",\"2023-121-12-28-37_facebook-icon.png\",\"www.facebook.com\"],[\"Whatsapp\",\"2023-121-12-28-37_whatsapp-icon.png\",\"www.whatsapp.com\"]]', NULL, NULL),
(4, 'aesdfgdag', '<p>rtuytuyj</p>', '2023-121-12-30-37_screen.png', 'right', '[[\"Whatsapp\",\"2023-121-12-30-37_whatsapp-icon.png\",\"www.whatsapp.com\"],[\"adfgadg\",\"2023-121-12-30-37_instagram-icon.png\",\"www.facebook.com\"]]', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `images`
--

CREATE TABLE `images` (
  `iImageId` int(11) NOT NULL,
  `vTitle` varchar(50) NOT NULL,
  `vUrl` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `images`
--

INSERT INTO `images` (`iImageId`, `vTitle`, `vUrl`) VALUES
(1, 'profile pic', 'profile1.jpg'),
(2, 'gallary pic', 'gallary.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `language`
--

CREATE TABLE `language` (
  `iLangId` int(11) NOT NULL,
  `vLang` varchar(50) NOT NULL,
  `vLangCode` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `language`
--

INSERT INTO `language` (`iLangId`, `vLang`, `vLangCode`) VALUES
(1, 'English', 'EN'),
(2, 'Hebrew', 'HB'),
(3, 'Arabic', 'AR');

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_resets_table', 1),
(3, '2019_08_19_000000_create_failed_jobs_table', 1),
(4, '2014_10_12_100000_create_password_reset_tokens_table', 2),
(5, '2019_12_14_000001_create_personal_access_tokens_table', 2),
(6, '2023_10_19_101501_create_pages_table', 2),
(7, '2023_10_20_072715_create_sliders_table', 3),
(8, '2023_10_27_053407_create_forms_table', 4),
(9, '2023_10_31_062037_create_headers_table', 5),
(10, '2023_11_09_053828_create_footers_table', 6),
(11, '2023_11_09_055843_create_footer_transaction', 7),
(12, '2023_11_21_101706_create_blog_categories_table', 8),
(13, '2023_11_22_064259_create_blogs_table', 9),
(14, '2023_11_23_060801_create_settings_table', 10),
(15, '2023_11_24_072035_create_popups_table', 11),
(16, '2023_11_27_114636_create_gallaries_table', 12),
(17, '2023_11_28_122412_create_categories_table', 13),
(18, '2023_11_29_113303_create_products_table', 14),
(19, '2023_12_07_083931_create_page_sections_table', 15),
(20, '2023_12_11_060956_create_slider_transactions_table', 16);

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `iOrderId` int(11) NOT NULL,
  `iCustomerId` int(11) NOT NULL,
  `eOrder_Status` enum('Active','Inactive') NOT NULL,
  `dOrder_Date` datetime NOT NULL,
  `dRequired_Date` datetime NOT NULL,
  `dShipped_Date` datetime NOT NULL,
  `iStoreId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`iOrderId`, `iCustomerId`, `eOrder_Status`, `dOrder_Date`, `dRequired_Date`, `dShipped_Date`, `iStoreId`) VALUES
(1, 1, 'Inactive', '2023-04-21 04:04:30', '2023-04-21 04:04:30', '2023-04-21 04:04:30', 1),
(2, 2, 'Active', '2023-04-21 04:04:50', '2023-04-21 04:04:50', '2023-04-21 04:04:50', 2),
(3, 3, 'Inactive', '2023-04-21 04:37:53', '2023-04-21 04:37:53', '2023-04-21 04:37:53', 3);

-- --------------------------------------------------------

--
-- Table structure for table `pages`
--

CREATE TABLE `pages` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `slug` varchar(255) NOT NULL,
  `title` varchar(255) NOT NULL,
  `meta_title` varchar(255) NOT NULL,
  `meta_data` longtext NOT NULL,
  `meta_keyword` longtext NOT NULL,
  `meta_description` longtext NOT NULL,
  `custom_js` longtext NOT NULL,
  `custom_css` longtext NOT NULL,
  `layout` varchar(255) DEFAULT NULL,
  `left_layout_content` varchar(255) DEFAULT NULL,
  `right_layout_content` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `pages`
--

INSERT INTO `pages` (`id`, `name`, `slug`, `title`, `meta_title`, `meta_data`, `meta_keyword`, `meta_description`, `custom_js`, `custom_css`, `layout`, `left_layout_content`, `right_layout_content`, `created_at`, `updated_at`) VALUES
(1, 'Home Page123', 'home22', 'home page33', 'home44', 'home55', 'home66', 'home description77', '<p>const PostTagModel = require(\"../model/PostTagModel\"); exports.findAllPostTagData=(req,resp)=&gt;{ PostTagModel.getAllPostTagData(req).then((result)=&gt;{ resp.send({ \"status\":\"success\", \"code\":\"200\", \"message\":\"All Data\", \"data\":result }).catch((error)=&gt;{ resp.send({ \"status\":\"success\", \"code\":\"500\", \"message\":error }) }) }) } exports.findAllTagPostData=(req,resp)=&gt;{ PostTagModel.getAllTagPostData(req).then((result)=&gt;{ resp.send({ \"status\":\"success\", \"code\":\"200\", \"message\":\"All Data\", \"data\":result }) }).catch((error)=&gt;{ resp.send({ \"status\":\"error\", \"code\":\"500\", \"message\":error }) }) }</p>', '<p>@import url(\"https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&amp;display=swap\"); .datepicker { display: none; } .datepicker.active { display: block; } .datepicker-dropdown { position: absolute; top: 0; left: 0; z-index: 20; padding-top: 4px; } .datepicker-dropdown.datepicker-orient-top { padding-top: 0; padding-bottom: 4px; } .datepicker-picker { display: inline-block; border-radius: 4px; background-color: #ffffff; } .datepicker-dropdown .datepicker-picker { box-shadow: 0 2px 3px rgba(17, 24, 39, 0.1), 0 0 0 1px rgba(17, 24, 39, 0.1); } .datepicker-picker span { display: block; flex: 1; border: 0; border-radius: 4px; cursor: default; text-align: center; -webkit-touch-callout: none; user-select: none; } .datepicker-main { padding: 2px; } .datepicker-footer { box-shadow: inset 0 1px 1px rgba(17, 24, 39, 0.1); background-color: #9CA3AF; } .datepicker-controls, .datepicker-view, .datepicker-view .days-of-week, .datepicker-grid { display: flex; } .datepicker-grid { flex-wrap: wrap; } .datepicker-view .dow, .datepicker-view .days .datepicker-cell { flex-basis: 14.28571%; } .datepicker-view.datepicker-grid .datepicker-cell { flex-basis: 25%; } .datepicker-view .week, .datepicker-cell { height: 2.25rem; line-height: 2.25rem; } .datepicker-title { box-shadow: inset 0 -1px 1px rgba(17, 24, 39, 0.1); background-color: #9CA3AF; padding: 0.375rem 0.75rem; text-align: center; font-weight: 700; } .datepicker-header .datepicker-controls { padding: 2px 2px 0; } .datepicker-controls .button { display: inline-flex; position: relative; align-items: center; justify-content: center; margin: 0; border: 1px solid #808998; border-radius: 4px; box-shadow: none; background-color: #ffffff; cursor: pointer; padding: calc(0.375em - 1px) 0.75em; height: 2.25em; vertical-align: top; text-align: center; line-height: 1.5; white-space: nowrap; color: #1F2937; font-size: 1rem; } .datepicker-controls .button:focus, .datepicker-controls .button:active { outline: none; } .datepicker-controls .button:hover { border-color: #5b6371; color: #1F2937; } .datepicker-controls .button:focus { border-color: #3273dc; color: #1F2937; } .datepicker-controls .button:focus:not(:active) { box-shadow: 0 0 0 0.125em rgba(50, 115, 220, 0.25); } .datepicker-controls .button:active { border-color: #384f80; color: #1F2937; } .datepicker-controls .button[disabled] { cursor: not-allowed; } .datepicker-header .datepicker-controls .button { border-color: transparent; font-weight: bold; } .datepicker-header .datepicker-controls .button:hover { background-color: #f9f9f9; } .datepicker-header .datepicker-controls .button:focus:not(:active) { box-shadow: 0 0 0 0.125em rgba(255, 255, 255, 0.25); } .datepicker-header .datepicker-controls .button:active { background-color: #f2f2f2; } .datepicker-header .datepicker-controls .button[disabled] { box-shadow: none; } .datepicker-footer .datepicker-controls .button { margin: calc(0.375rem - 1px) 0.375rem; border-radius: 2px; width: 100%; font-size: 0.75rem; } .datepicker-controls .view-switch { flex: auto; } .datepicker-controls .prev-btn, .datepicker-controls .next-btn { padding-right: 0.375rem; padding-left: 0.375rem; width: 2.25rem; } .datepicker-controls .prev-btn.disabled, .datepicker-controls .next-btn.disabled { visibility: hidden; } .datepicker-view .dow { height: 1.5rem; line-height: 1.5rem; font-size: 0.875rem; font-weight: 700; } .datepicker-view .week { width: 2.25rem; color: #5b6371; font-size: 0.75rem; } @media (max-width: 22.5rem) { .datepicker-view .week { width: 1.96875rem; } } .datepicker-grid { width: 15.75rem; } @media (max-width: 22.5rem) { .calendar-weeks + .days .datepicker-grid { width: 13.78125rem; } } .datepicker-cell:not(.disabled):hover { background-color: #f9f9f9; cursor: pointer; } .datepicker-cell.focused:not(.selected) { background-color: #8e96a4; } .datepicker-cell.selected, .datepicker-cell.selected:hover { background-color: #3273dc; color: #fff; font-weight: 600; } .datepicker-cell.disabled { color: #808998; } .datepicker-cell.prev:not(.disabled), .datepicker-cell.next:not(.disabled) { color: #7a7a7a; } .datepicker-cell.prev.selected, .datepicker-cell.next.selected { color: #e6e6e6; } .datepicker-cell.highlighted:not(.selected):not(.range):not(.today) { border-radius: 0; background-color: #9CA3AF; } .datepicker-cell.highlighted:not(.selected):not(.range):not(.today):not(.disabled):hover { background-color: #959ca9; } .datepicker-cell.highlighted:not(.selected):not(.range):not(.today).focused { background-color: #8e96a4; } .datepicker-cell.today:not(.selected) { background-color: #00d1b2; } .datepicker-cell.today:not(.selected):not(.disabled) { color: #fff; } .datepicker-cell.today.focused:not(.selected) { background-color: #00c4a7; } .datepicker-cell.range-start:not(.selected), .datepicker-cell.range-end:not(.selected) { background-color: #5b6371; color: #fff; } .datepicker-cell.range-start.focused:not(.selected), .datepicker-cell.range-end.focused:not(.selected) { background-color: #555d69; } .datepicker-cell.range-start { border-radius: 4px 0 0 4px; } .datepicker-cell.range-end { border-radius: 0 4px 4px 0; } .datepicker-cell.range { border-radius: 0; background-color: #808998; } .datepicker-cell.range:not(.disabled):not(.focused):not(.today):hover { background-color: #798293; } .datepicker-cell.range.disabled { color: #666f7f; } .datepicker-cell.range.focused { background-color: #727c8d; } .datepicker-view.datepicker-grid .datepicker-cell { height: 4.5rem; line-height: 4.5rem; } .datepicker-input.in-edit { border-color: #2366d1; } .datepicker-input.in-edit:focus, .datepicker-input.in-edit:active { box-shadow: 0 0 0.25em 0.25em rgba(35, 102, 209, 0.2); }</p>', NULL, NULL, NULL, NULL, NULL),
(3, 'Contact us', 'contact-us', 'Contact Us', 'Contact Us', 'Contact Us', 'Contact Us', 'Contact Us Description', '<p>const PostTagModel = require(\"../model/PostTagModel\"); exports.findAllPostTagData=(req,resp)=&gt;{ PostTagModel.getAllPostTagData(req).then((result)=&gt;{ resp.send({ \"status\":\"success\", \"code\":\"200\", \"message\":\"All Data\", \"data\":result }).catch((error)=&gt;{ resp.send({ \"status\":\"success\", \"code\":\"500\", \"message\":error }) }) }) } exports.findAllTagPostData=(req,resp)=&gt;{ PostTagModel.getAllTagPostData(req).then((result)=&gt;{ resp.send({ \"status\":\"success\", \"code\":\"200\", \"message\":\"All Data\", \"data\":result }) }).catch((error)=&gt;{ resp.send({ \"status\":\"error\", \"code\":\"500\", \"message\":error }) }) }</p>', '<p>@import url(\"https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&amp;display=swap\"); .datepicker { display: none; } .datepicker.active { display: block; } .datepicker-dropdown { position: absolute; top: 0; left: 0; z-index: 20; padding-top: 4px; } .datepicker-dropdown.datepicker-orient-top { padding-top: 0; padding-bottom: 4px; } .datepicker-picker { display: inline-block; border-radius: 4px; background-color: #ffffff; } .datepicker-dropdown .datepicker-picker { box-shadow: 0 2px 3px rgba(17, 24, 39, 0.1), 0 0 0 1px rgba(17, 24, 39, 0.1); } .datepicker-picker span { display: block; flex: 1; border: 0; border-radius: 4px; cursor: default; text-align: center; -webkit-touch-callout: none; user-select: none; } .datepicker-main { padding: 2px; } .datepicker-footer { box-shadow: inset 0 1px 1px rgba(17, 24, 39, 0.1); background-color: #9CA3AF; } .datepicker-controls, .datepicker-view, .datepicker-view .days-of-week, .datepicker-grid { display: flex; } .datepicker-grid { flex-wrap: wrap; } .datepicker-view .dow, .datepicker-view .days .datepicker-cell { flex-basis: 14.28571%; } .datepicker-view.datepicker-grid .datepicker-cell { flex-basis: 25%; } .datepicker-view .week, .datepicker-cell { height: 2.25rem; line-height: 2.25rem; } .datepicker-title { box-shadow: inset 0 -1px 1px rgba(17, 24, 39, 0.1); background-color: #9CA3AF; padding: 0.375rem 0.75rem; text-align: center; font-weight: 700; } .datepicker-header .datepicker-controls { padding: 2px 2px 0; } .datepicker-controls .button { display: inline-flex; position: relative; align-items: center; justify-content: center; margin: 0; border: 1px solid #808998; border-radius: 4px; box-shadow: none; background-color: #ffffff; cursor: pointer; padding: calc(0.375em - 1px) 0.75em; height: 2.25em; vertical-align: top; text-align: center; line-height: 1.5; white-space: nowrap; color: #1F2937; font-size: 1rem; } .datepicker-controls .button:focus, .datepicker-controls .button:active { outline: none; } .datepicker-controls .button:hover { border-color: #5b6371; color: #1F2937; } .datepicker-controls .button:focus { border-color: #3273dc; color: #1F2937; } .datepicker-controls .button:focus:not(:active) { box-shadow: 0 0 0 0.125em rgba(50, 115, 220, 0.25); } .datepicker-controls .button:active { border-color: #384f80; color: #1F2937; } .datepicker-controls .button[disabled] { cursor: not-allowed; } .datepicker-header .datepicker-controls .button { border-color: transparent; font-weight: bold; } .datepicker-header .datepicker-controls .button:hover { background-color: #f9f9f9; } .datepicker-header .datepicker-controls .button:focus:not(:active) { box-shadow: 0 0 0 0.125em rgba(255, 255, 255, 0.25); } .datepicker-header .datepicker-controls .button:active { background-color: #f2f2f2; } .datepicker-header .datepicker-controls .button[disabled] { box-shadow: none; } .datepicker-footer .datepicker-controls .button { margin: calc(0.375rem - 1px) 0.375rem; border-radius: 2px; width: 100%; font-size: 0.75rem; } .datepicker-controls .view-switch { flex: auto; } .datepicker-controls .prev-btn, .datepicker-controls .next-btn { padding-right: 0.375rem; padding-left: 0.375rem; width: 2.25rem; } .datepicker-controls .prev-btn.disabled, .datepicker-controls .next-btn.disabled { visibility: hidden; } .datepicker-view .dow { height: 1.5rem; line-height: 1.5rem; font-size: 0.875rem; font-weight: 700; } .datepicker-view .week { width: 2.25rem; color: #5b6371; font-size: 0.75rem; } @media (max-width: 22.5rem) { .datepicker-view .week { width: 1.96875rem; } } .datepicker-grid { width: 15.75rem; } @media (max-width: 22.5rem) { .calendar-weeks + .days .datepicker-grid { width: 13.78125rem; } } .datepicker-cell:not(.disabled):hover { background-color: #f9f9f9; cursor: pointer; } .datepicker-cell.focused:not(.selected) { background-color: #8e96a4; } .datepicker-cell.selected, .datepicker-cell.selected:hover { background-color: #3273dc; color: #fff; font-weight: 600; } .datepicker-cell.disabled { color: #808998; } .datepicker-cell.prev:not(.disabled), .datepicker-cell.next:not(.disabled) { color: #7a7a7a; } .datepicker-cell.prev.selected, .datepicker-cell.next.selected { color: #e6e6e6; } .datepicker-cell.highlighted:not(.selected):not(.range):not(.today) { border-radius: 0; background-color: #9CA3AF; } .datepicker-cell.highlighted:not(.selected):not(.range):not(.today):not(.disabled):hover { background-color: #959ca9; } .datepicker-cell.highlighted:not(.selected):not(.range):not(.today).focused { background-color: #8e96a4; } .datepicker-cell.today:not(.selected) { background-color: #00d1b2; } .datepicker-cell.today:not(.selected):not(.disabled) { color: #fff; } .datepicker-cell.today.focused:not(.selected) { background-color: #00c4a7; } .datepicker-cell.range-start:not(.selected), .datepicker-cell.range-end:not(.selected) { background-color: #5b6371; color: #fff; } .datepicker-cell.range-start.focused:not(.selected), .datepicker-cell.range-end.focused:not(.selected) { background-color: #555d69; } .datepicker-cell.range-start { border-radius: 4px 0 0 4px; } .datepicker-cell.range-end { border-radius: 0 4px 4px 0; } .datepicker-cell.range { border-radius: 0; background-color: #808998; } .datepicker-cell.range:not(.disabled):not(.focused):not(.today):hover { background-color: #798293; } .datepicker-cell.range.disabled { color: #666f7f; } .datepicker-cell.range.focused { background-color: #727c8d; } .datepicker-view.datepicker-grid .datepicker-cell { height: 4.5rem; line-height: 4.5rem; } .datepicker-input.in-edit { border-color: #2366d1; } .datepicker-input.in-edit:focus, .datepicker-input.in-edit:active { box-shadow: 0 0 0.25em 0.25em rgba(35, 102, 209, 0.2); }</p>', NULL, NULL, NULL, NULL, NULL),
(6, 'Homepage', 'Homepage', 'Homepage', 'Homepage', '<p>Homepage</p>', '<p>Homepage</p>', '<p>Homepage</p>', 'Custom javascript', 'Custom css', 'layout4', '<p><em>Left layout content</em></p>', '<p><strong><em>Right layout content</em></strong></p>', NULL, NULL),
(7, 'Homepage', 'Homepage', 'Homepage', 'Homepage', '<p>Homepage</p>', '<p>Homepage</p>', '<p>Homepage</p>', 'Custom javascript', 'Custom css', 'layout4', '<p><em>Left layout content</em></p>', '<p><strong><em>Right layout content</em></strong></p>', NULL, '2023-12-08 12:37:24');

-- --------------------------------------------------------

--
-- Table structure for table `page_sections`
--

CREATE TABLE `page_sections` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `page_id` bigint(20) UNSIGNED NOT NULL,
  `slider_id` bigint(20) UNSIGNED DEFAULT NULL,
  `form_id` bigint(20) UNSIGNED DEFAULT NULL,
  `content` longtext DEFAULT NULL,
  `order` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `page_sections`
--

INSERT INTO `page_sections` (`id`, `page_id`, `slider_id`, `form_id`, `content`, `order`, `created_at`, `updated_at`) VALUES
(7, 7, NULL, NULL, '<p><strong>Top content changed</strong></p>', 2, '2023-12-08 12:39:09', '2023-12-08 12:39:09'),
(8, 7, 1, NULL, NULL, 1, '2023-12-08 12:39:09', '2023-12-08 12:39:09'),
(9, 7, NULL, NULL, '<p>Middle content <span style=\"text-decoration: underline;\"><em><strong>about us</strong></em></span></p>', 3, '2023-12-08 12:39:09', '2023-12-08 12:39:09'),
(10, 7, NULL, NULL, '<p>Bottom content</p>', 5, '2023-12-08 12:39:09', '2023-12-08 12:39:09'),
(11, 7, 2, NULL, NULL, 4, '2023-12-08 12:39:09', '2023-12-08 12:39:09'),
(12, 7, NULL, 1, NULL, 6, '2023-12-08 12:39:09', '2023-12-08 12:39:09'),
(13, 7, NULL, NULL, '<p>My new content added while in edit mode</p>', 7, '2023-12-08 12:39:09', '2023-12-08 12:39:09');

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `popups`
--

CREATE TABLE `popups` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `status` enum('enable','disable') NOT NULL,
  `start_date` date NOT NULL,
  `end_date` date NOT NULL,
  `rules` text NOT NULL,
  `content` text NOT NULL,
  `custom_css` text NOT NULL,
  `custom_js` text NOT NULL,
  `pages` text NOT NULL,
  `timer` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `popups`
--

INSERT INTO `popups` (`id`, `name`, `status`, `start_date`, `end_date`, `rules`, `content`, `custom_css`, `custom_js`, `pages`, `timer`, `created_at`, `updated_at`) VALUES
(1, 'Test10112', 'enable', '2023-11-27', '2023-11-30', 'Test Rule', '<p>asdfadsgf</p>', '<p>sdgsdg</p>', '<p>gfjfgjfgj</p>', '1,3', 10, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `posts`
--

CREATE TABLE `posts` (
  `iPostId` int(11) NOT NULL,
  `vName` varchar(50) NOT NULL,
  `vTitle` varchar(50) NOT NULL,
  `vContent` varchar(50) NOT NULL,
  `iUserId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `posts`
--

INSERT INTO `posts` (`iPostId`, `vName`, `vTitle`, `vContent`, `iUserId`) VALUES
(1, 'News', 'car', 'car details', 8),
(2, 'News', 'bike', 'bike details', 5),
(3, 'News', 'cycle', 'cycle details', 5),
(4, 'News', 'cycle', 'cycle details', 1);

-- --------------------------------------------------------

--
-- Table structure for table `post_tags`
--

CREATE TABLE `post_tags` (
  `iPostTagId` int(11) NOT NULL,
  `iPostId` int(11) NOT NULL,
  `iTagId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `post_tags`
--

INSERT INTO `post_tags` (`iPostTagId`, `iPostId`, `iTagId`) VALUES
(1, 1, 1),
(2, 1, 2),
(3, 2, 3);

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `category_id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(255) NOT NULL,
  `status` enum('enable','disable') NOT NULL,
  `short_description` varchar(255) NOT NULL,
  `images` longtext NOT NULL,
  `slug` varchar(255) NOT NULL,
  `unique_id` varchar(255) NOT NULL,
  `layout` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `category_id`, `title`, `status`, `short_description`, `images`, `slug`, `unique_id`, `layout`, `created_at`, `updated_at`) VALUES
(1, 2, 'Test12', 'enable', 'test short description changed after delete one and add new yesss  ', '[\"2023-1130-15-57-30_maple-tree.jpg\",\"2023-1130-15-57-30_maple-trade-centre.jpg\"]', 'test-slug-new-images-added', '1234567890', 'layout2', NULL, '2023-12-04 11:26:57');

-- --------------------------------------------------------

--
-- Table structure for table `restaurant_lang`
--

CREATE TABLE `restaurant_lang` (
  `iRestaurantId` int(11) NOT NULL,
  `vLangCode` varchar(50) NOT NULL,
  `vRestaurant` varchar(50) NOT NULL,
  `tDescription` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `restaurant_lang`
--

INSERT INTO `restaurant_lang` (`iRestaurantId`, `vLangCode`, `vRestaurant`, `tDescription`) VALUES
(1, 'EN', 'Mocha', 'good place for hangout\r\n'),
(2, 'HB', 'frullato', 'Most amazing place for thick shakes'),
(3, 'AR', 'Arbian Taj', 'Best place for non-veg food'),
(4, 'AR', 'Arbian Taj', 'Best place for non-veg food'),
(5, 'HB', 'Tandoor', 'Best place for non-veg food'),
(6, 'HB', 'delhi darbar', 'Best place for non-veg food');

-- --------------------------------------------------------

--
-- Table structure for table `settings`
--

CREATE TABLE `settings` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  `contact_info` varchar(255) DEFAULT NULL,
  `country` varchar(255) DEFAULT NULL,
  `state` varchar(255) DEFAULT NULL,
  `timezone` varchar(255) DEFAULT NULL,
  `recpatcha_status` varchar(255) DEFAULT NULL,
  `recpatcha_private` varchar(255) DEFAULT NULL,
  `recpatcha_public` varchar(255) DEFAULT NULL,
  `recpatcha_type` enum('v2_robot_checkbox','v2_invisible','v3_invisible') DEFAULT NULL,
  `smtp_host` varchar(255) DEFAULT NULL,
  `smtp_port` int(11) DEFAULT NULL,
  `smtp_secure_type` enum('SSL','TLS') DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `settings`
--

INSERT INTO `settings` (`id`, `title`, `name`, `url`, `contact_info`, `country`, `state`, `timezone`, `recpatcha_status`, `recpatcha_private`, `recpatcha_public`, `recpatcha_type`, `smtp_host`, `smtp_port`, `smtp_secure_type`, `username`, `password`, `created_at`, `updated_at`) VALUES
(1, 'Custom Web Development', 'Custom Web Development', 'http://customweb.adorncommerce.com', 'Adorn commerce', 'India', 'Gujarat', '-12', 'enable', '6LdIaf4nAAAAAH00I_0AtCyoaWiuTU3-f6oLQ5h6', '6LdIaf4nAAAAAFa6oVqNX9mKVfpdw5TaufdPzjdA', 'v2_robot_checkbox', 'smtp.gmail.com', 587, 'TLS', 'darshit.adorncommerce@gmail.com', 'DP@adorn99#', '2023-11-23 07:11:13', '2023-11-23 07:11:13');

-- --------------------------------------------------------

--
-- Table structure for table `sliders`
--

CREATE TABLE `sliders` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(255) NOT NULL,
  `shortcode` varchar(255) NOT NULL,
  `start_from` date NOT NULL,
  `end_to` date NOT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `sliders`
--

INSERT INTO `sliders` (`id`, `title`, `shortcode`, `start_from`, `end_to`, `created_at`, `updated_at`) VALUES
(1, 'Test1', 'Test122', '2023-10-26', '2023-10-28', '2023-10-26 07:02:03', '2023-11-30 12:45:40'),
(2, 'Test12', 'Test23', '2023-10-27', '2023-10-29', '2023-10-26 11:09:35', '2023-10-26 11:09:35');

-- --------------------------------------------------------

--
-- Table structure for table `slider_transactions`
--

CREATE TABLE `slider_transactions` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `slider_id` bigint(20) UNSIGNED NOT NULL,
  `slider_image` varchar(255) NOT NULL,
  `status` enum('active','inactive') NOT NULL,
  `content` longtext NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `stores`
--

CREATE TABLE `stores` (
  `iStoreId` int(11) NOT NULL,
  `vStoreName` varchar(50) NOT NULL,
  `vPhone` varchar(50) NOT NULL,
  `vEmail` varchar(50) NOT NULL,
  `vStreet` varchar(50) NOT NULL,
  `vCity` varchar(50) NOT NULL,
  `vState` varchar(50) NOT NULL,
  `vZipCode` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `stores`
--

INSERT INTO `stores` (`iStoreId`, `vStoreName`, `vPhone`, `vEmail`, `vStreet`, `vCity`, `vState`, `vZipCode`) VALUES
(1, 'Dominos', '8564796321', 'dominos.india@gmail.com', 'Nehru Street', 'Nagpur', 'Maharashtra', '440025'),
(2, 'amigo', '8564796321', 'amigo.india@gmail.com', 'walk Street', 'pune', 'Maharashtra', '440026');

-- --------------------------------------------------------

--
-- Table structure for table `tags`
--

CREATE TABLE `tags` (
  `iTagId` int(11) NOT NULL,
  `vName` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tags`
--

INSERT INTO `tags` (`iTagId`, `vName`) VALUES
(1, 'Latest'),
(2, 'Popular'),
(3, 'Sports'),
(13, 'Information');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(10) UNSIGNED NOT NULL,
  `user_name` varchar(255) DEFAULT NULL,
  `gender` varchar(255) DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `address` varchar(255) DEFAULT NULL,
  `number` varchar(255) DEFAULT NULL,
  `city` varchar(255) DEFAULT NULL,
  `ZIP` varchar(255) DEFAULT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `user_name`, `gender`, `email`, `password`, `address`, `number`, `city`, `ZIP`, `email_verified_at`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'Admin', NULL, 'admin@volt.com', '$2y$10$nPkqFd64qoyLtv2ux6HZVefVoD9l2o1AGxGXesFpbsw7bN3W6iRbe', NULL, NULL, NULL, NULL, NULL, 'OtoPoh4qq2eW792b0E9eL8qWuCZh9fMa6g0ewokg3BJCJP950pUUQxBZnMnR', NULL, NULL),
(2, 'Darshit Prajapati', NULL, 'darshit@mailinator.com', '$2y$10$irkv5RamQ6fjXJuLTZCLuuS0l4mj3x.i7Eu1KrD/eQcS4N..VEEZi', NULL, NULL, NULL, NULL, NULL, '0gKcRVKpXvvvzbiQqRkByW8tdPcz31durHaVwlVJ8T2ulL6wJHKvB2FJyZ6B', '2023-10-19 02:00:58', '2023-10-19 02:00:58');

-- --------------------------------------------------------

--
-- Table structure for table `user_details`
--

CREATE TABLE `user_details` (
  `iUserId` int(11) NOT NULL,
  `vName` varchar(255) DEFAULT NULL,
  `iAge` int(11) DEFAULT NULL,
  `vCity` varchar(255) DEFAULT NULL,
  `vHobbies` varchar(255) DEFAULT NULL,
  `vFav_Food` varchar(255) DEFAULT NULL,
  `vEmail` varchar(255) NOT NULL,
  `vPassword` varchar(255) NOT NULL,
  `vGender` varchar(21) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user_details`
--

INSERT INTO `user_details` (`iUserId`, `vName`, `iAge`, `vCity`, `vHobbies`, `vFav_Food`, `vEmail`, `vPassword`, `vGender`) VALUES
(1, 'Manji', 34, 'Jaipur', 'Golf', 'dal bati', 'sd@123', '', 'male'),
(4, 'sam', 34, 'Jaipur', 'Golf', 'dal bati', 'sam@123', '', 'male'),
(5, 'sam', 34, 'jodhpur', 'Golf', 'dal bati', 'samm@123', '', 'male'),
(8, 'sam', 34, 'Jaipur', 'Golf', 'dal bati', 'sa@123', '', 'female'),
(9, 'sam', 34, 'Jaipur', 'Golf', 'dal bati', 'demo@gmail.com', '123456', 'female'),
(22, 'Darshit', 24, 'Ahmedabad', 'Gaming', 'Surti Locho', 'darshit@gmail.com', '$2b$10$3v4vLnMFSBOj8yl4ijM.sOVnwzpXlDOx0/ZDzNIEgz7rumRpYIv4W', 'male'),
(23, 'Joe Goldberg', 25, 'Ahmedabad', 'Painting', 'Khaman Dhokla', 'joe@gmail.com', '$2b$10$h8UNqzak8gCiLEmQHinHyOvLCqwdBk./G8R/x9vioYGoA0vDMw26O', 'male'),
(24, 'Joy', 48, 'Ahmedabad', 'Dancing', 'Chole Kulche', 'joy@gmail.com', '$2b$10$mmx00u6NBBYzkXHVegsMqO7kZRplsuDBX1PIPglzhABtziwfURj3q', 'male');

-- --------------------------------------------------------

--
-- Table structure for table `videos`
--

CREATE TABLE `videos` (
  `iVideoId` int(11) NOT NULL,
  `vTitle` varchar(50) NOT NULL,
  `VText` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `videos`
--

INSERT INTO `videos` (`iVideoId`, `vTitle`, `VText`) VALUES
(1, 'movie', 'bollywood'),
(2, 'Comedy', 'Bollywood');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `auths`
--
ALTER TABLE `auths`
  ADD PRIMARY KEY (`iUserId`);

--
-- Indexes for table `blogs`
--
ALTER TABLE `blogs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `blogs_category_id_foreign` (`category_id`);

--
-- Indexes for table `blog_categories`
--
ALTER TABLE `blog_categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`iCommentId`);

--
-- Indexes for table `customers`
--
ALTER TABLE `customers`
  ADD PRIMARY KEY (`iCustomerId`);

--
-- Indexes for table `excel_csv`
--
ALTER TABLE `excel_csv`
  ADD PRIMARY KEY (`iCsvId`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `footers`
--
ALTER TABLE `footers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `footer_transaction`
--
ALTER TABLE `footer_transaction`
  ADD PRIMARY KEY (`id`),
  ADD KEY `footer_transaction_footer_id_foreign` (`footer_id`),
  ADD KEY `footer_transaction_page_id_foreign` (`page_id`);

--
-- Indexes for table `forms`
--
ALTER TABLE `forms`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `gallaries`
--
ALTER TABLE `gallaries`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `headers`
--
ALTER TABLE `headers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `images`
--
ALTER TABLE `images`
  ADD PRIMARY KEY (`iImageId`);

--
-- Indexes for table `language`
--
ALTER TABLE `language`
  ADD PRIMARY KEY (`iLangId`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`iOrderId`);

--
-- Indexes for table `pages`
--
ALTER TABLE `pages`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `page_sections`
--
ALTER TABLE `page_sections`
  ADD PRIMARY KEY (`id`),
  ADD KEY `page_sections_page_id_foreign` (`page_id`),
  ADD KEY `page_sections_slider_id_foreign` (`slider_id`),
  ADD KEY `page_sections_form_id_foreign` (`form_id`);

--
-- Indexes for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Indexes for table `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `popups`
--
ALTER TABLE `popups`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`iPostId`);

--
-- Indexes for table `post_tags`
--
ALTER TABLE `post_tags`
  ADD PRIMARY KEY (`iPostTagId`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `products_category_id_foreign` (`category_id`);

--
-- Indexes for table `restaurant_lang`
--
ALTER TABLE `restaurant_lang`
  ADD PRIMARY KEY (`iRestaurantId`);

--
-- Indexes for table `settings`
--
ALTER TABLE `settings`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sliders`
--
ALTER TABLE `sliders`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `slider_transactions`
--
ALTER TABLE `slider_transactions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `slider_transactions_slider_id_foreign` (`slider_id`);

--
-- Indexes for table `stores`
--
ALTER TABLE `stores`
  ADD PRIMARY KEY (`iStoreId`);

--
-- Indexes for table `tags`
--
ALTER TABLE `tags`
  ADD PRIMARY KEY (`iTagId`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_id_unique` (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`),
  ADD UNIQUE KEY `users_remember_token_unique` (`remember_token`);

--
-- Indexes for table `user_details`
--
ALTER TABLE `user_details`
  ADD PRIMARY KEY (`iUserId`),
  ADD UNIQUE KEY `vEmail` (`vEmail`);

--
-- Indexes for table `videos`
--
ALTER TABLE `videos`
  ADD PRIMARY KEY (`iVideoId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `auths`
--
ALTER TABLE `auths`
  MODIFY `iUserId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;

--
-- AUTO_INCREMENT for table `blogs`
--
ALTER TABLE `blogs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `blog_categories`
--
ALTER TABLE `blog_categories`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `comments`
--
ALTER TABLE `comments`
  MODIFY `iCommentId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `customers`
--
ALTER TABLE `customers`
  MODIFY `iCustomerId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `excel_csv`
--
ALTER TABLE `excel_csv`
  MODIFY `iCsvId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `footers`
--
ALTER TABLE `footers`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=47;

--
-- AUTO_INCREMENT for table `footer_transaction`
--
ALTER TABLE `footer_transaction`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `forms`
--
ALTER TABLE `forms`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `gallaries`
--
ALTER TABLE `gallaries`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `headers`
--
ALTER TABLE `headers`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `images`
--
ALTER TABLE `images`
  MODIFY `iImageId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `language`
--
ALTER TABLE `language`
  MODIFY `iLangId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `iOrderId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `pages`
--
ALTER TABLE `pages`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `page_sections`
--
ALTER TABLE `page_sections`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `popups`
--
ALTER TABLE `popups`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `posts`
--
ALTER TABLE `posts`
  MODIFY `iPostId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `post_tags`
--
ALTER TABLE `post_tags`
  MODIFY `iPostTagId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `restaurant_lang`
--
ALTER TABLE `restaurant_lang`
  MODIFY `iRestaurantId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `settings`
--
ALTER TABLE `settings`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `sliders`
--
ALTER TABLE `sliders`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `slider_transactions`
--
ALTER TABLE `slider_transactions`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `stores`
--
ALTER TABLE `stores`
  MODIFY `iStoreId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `tags`
--
ALTER TABLE `tags`
  MODIFY `iTagId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `user_details`
--
ALTER TABLE `user_details`
  MODIFY `iUserId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT for table `videos`
--
ALTER TABLE `videos`
  MODIFY `iVideoId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `blogs`
--
ALTER TABLE `blogs`
  ADD CONSTRAINT `blogs_category_id_foreign` FOREIGN KEY (`category_id`) REFERENCES `blog_categories` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `footer_transaction`
--
ALTER TABLE `footer_transaction`
  ADD CONSTRAINT `footer_transaction_footer_id_foreign` FOREIGN KEY (`footer_id`) REFERENCES `footers` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `footer_transaction_page_id_foreign` FOREIGN KEY (`page_id`) REFERENCES `pages` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `page_sections`
--
ALTER TABLE `page_sections`
  ADD CONSTRAINT `page_sections_form_id_foreign` FOREIGN KEY (`form_id`) REFERENCES `forms` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `page_sections_page_id_foreign` FOREIGN KEY (`page_id`) REFERENCES `pages` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `page_sections_slider_id_foreign` FOREIGN KEY (`slider_id`) REFERENCES `sliders` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_category_id_foreign` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `slider_transactions`
--
ALTER TABLE `slider_transactions`
  ADD CONSTRAINT `slider_transactions_slider_id_foreign` FOREIGN KEY (`slider_id`) REFERENCES `sliders` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
