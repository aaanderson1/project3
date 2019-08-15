### Schema
CREATE DATABASE PartyImagedb;
USE PartyImagedb;

-- Create the table burgers.
CREATE TABLE images
(
	id int NOT NULL AUTO_INCREMENT,
	image_name varchar(127) NOT NULL,
	PRIMARY KEY (id)
);

