-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Host: fdb24.awardspace.net
-- Czas generowania: 28 Kwi 2020, 00:51
-- Wersja serwera: 5.7.20-log
-- Wersja PHP: 5.5.38

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Baza danych: `3415482_meeter`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `Meeting`
--

CREATE TABLE `Meeting` (
  `ID` int(11) NOT NULL,
  `PublicID` varchar(255) NOT NULL,
  `Time` datetime NOT NULL,
  `FinalPlace` int(11) DEFAULT NULL,
  `IsCancelled` bit(1) NOT NULL DEFAULT b'0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `Meeting_Participant`
--

CREATE TABLE `Meeting_Participant` (
  `Meeting` int(11) NOT NULL,
  `User` int(11) NOT NULL,
  `WillAttend` bit(1) NOT NULL DEFAULT b'1',
  `IsOwner` bit(1) NOT NULL DEFAULT b'0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `Meeting_SuggestedPlace`
--

CREATE TABLE `Meeting_SuggestedPlace` (
  `Meeting` int(11) NOT NULL,
  `Place` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `Meeting_VoteForPlace`
--

CREATE TABLE `Meeting_VoteForPlace` (
  `Meeting` int(11) NOT NULL,
  `User` int(11) NOT NULL,
  `Place` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `Place`
--

CREATE TABLE `Place` (
  `ID` int(11) NOT NULL,
  `GoogleMapsPlaceID` varchar(320) NOT NULL,
  `Name` varchar(100) NOT NULL,
  `Address` varchar(200) NOT NULL,
  `Type` tinyint(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `PlaceType`
--

CREATE TABLE `PlaceType` (
  `TypeID` tinyint(4) NOT NULL,
  `Description` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `User`
--

CREATE TABLE `User` (
  `ID` int(11) NOT NULL,
  `Username` varchar(32) NOT NULL,
  `Email` varchar(255) NOT NULL,
  `Password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Indeksy dla zrzutów tabel
--

--
-- Indexes for table `Meeting`
--
ALTER TABLE `Meeting`
  ADD PRIMARY KEY (`ID`),
  ADD UNIQUE KEY `PublicID` (`PublicID`),
  ADD KEY `FinalPlace` (`FinalPlace`);

--
-- Indexes for table `Meeting_Participant`
--
ALTER TABLE `Meeting_Participant`
  ADD PRIMARY KEY (`Meeting`,`User`),
  ADD KEY `Meeting` (`Meeting`),
  ADD KEY `User` (`User`);

--
-- Indexes for table `Meeting_SuggestedPlace`
--
ALTER TABLE `Meeting_SuggestedPlace`
  ADD PRIMARY KEY (`Meeting`,`Place`),
  ADD KEY `Meeting` (`Meeting`),
  ADD KEY `PlaceID` (`Place`);

--
-- Indexes for table `Meeting_VoteForPlace`
--
ALTER TABLE `Meeting_VoteForPlace`
  ADD PRIMARY KEY (`Meeting`,`User`,`Place`),
  ADD KEY `Meeting_VoteForPlace_ibfk_2` (`User`),
  ADD KEY `Meeting_VoteForPlace_ibfk_3` (`Place`);

--
-- Indexes for table `Place`
--
ALTER TABLE `Place`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `Type` (`Type`);

--
-- Indexes for table `PlaceType`
--
ALTER TABLE `PlaceType`
  ADD PRIMARY KEY (`TypeID`);

--
-- Indexes for table `User`
--
ALTER TABLE `User`
  ADD PRIMARY KEY (`ID`),
  ADD UNIQUE KEY `username` (`Username`),
  ADD UNIQUE KEY `email` (`Email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT dla tabeli `Meeting`
--
ALTER TABLE `Meeting`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT dla tabeli `User`
--
ALTER TABLE `User`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- Ograniczenia dla zrzutów tabel
--

--
-- Ograniczenia dla tabeli `Meeting`
--
ALTER TABLE `Meeting`
  ADD CONSTRAINT `Meeting_ibfk_1` FOREIGN KEY (`FinalPlace`) REFERENCES `Place` (`ID`) ON UPDATE CASCADE;

--
-- Ograniczenia dla tabeli `Meeting_Participant`
--
ALTER TABLE `Meeting_Participant`
  ADD CONSTRAINT `Meeting_Participant_ibfk_2` FOREIGN KEY (`User`) REFERENCES `User` (`ID`) ON UPDATE CASCADE,
  ADD CONSTRAINT `Meeting_Participant_ibfk_3` FOREIGN KEY (`Meeting`) REFERENCES `Meeting` (`ID`) ON UPDATE CASCADE;

--
-- Ograniczenia dla tabeli `Meeting_SuggestedPlace`
--
ALTER TABLE `Meeting_SuggestedPlace`
  ADD CONSTRAINT `Meeting_SuggestedPlace_ibfk_1` FOREIGN KEY (`Place`) REFERENCES `Place` (`ID`) ON UPDATE CASCADE,
  ADD CONSTRAINT `Meeting_SuggestedPlace_ibfk_2` FOREIGN KEY (`Meeting`) REFERENCES `Meeting` (`ID`) ON UPDATE CASCADE;

--
-- Ograniczenia dla tabeli `Meeting_VoteForPlace`
--
ALTER TABLE `Meeting_VoteForPlace`
  ADD CONSTRAINT `Meeting_VoteForPlace_ibfk_1` FOREIGN KEY (`Meeting`) REFERENCES `Meeting` (`ID`) ON UPDATE CASCADE,
  ADD CONSTRAINT `Meeting_VoteForPlace_ibfk_2` FOREIGN KEY (`User`) REFERENCES `User` (`ID`) ON UPDATE CASCADE,
  ADD CONSTRAINT `Meeting_VoteForPlace_ibfk_3` FOREIGN KEY (`Place`) REFERENCES `Place` (`ID`) ON UPDATE CASCADE;

--
-- Ograniczenia dla tabeli `Place`
--
ALTER TABLE `Place`
  ADD CONSTRAINT `Place_ibfk_1` FOREIGN KEY (`Type`) REFERENCES `PlaceType` (`TypeID`) ON UPDATE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
