--creating to database
CREATE DATABASE IF NOT EXISTS liverpool;
--using to database
USE liverpool;
--creating to table
CREATE TABLE player(
    id INT(11) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    dorsal INT(11) UNSIGNED NOT NULL,
    name VARCHAR(50) NOT NULL,
    lastName VARCHAR(100) NOT NULL,
    position VARCHAR(100) NOT NULL,
    nationality VARCHAR(100) NOT NULL
);
--show to table
SHOW TABLES;
--description to table
DESCRIBE player;
--verifiy if exists dates
SELECT * FROM player;
--insert to table
INSERT INTO player(dorsal, name, lastName, position, nationality) VALUES (1, 'Peter', 'Crounch', 'Goalkeeper', 'Czech');