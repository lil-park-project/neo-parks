DROP TABLE IF EXISTS parkType CASCADE;
CREATE TABLE parkType(
  ID serial PRIMARY KEY,
  parkType VARCHAR(100) NOT NULL UNIQUE
);
DROP TABLE IF EXISTS parkCounty CASCADE;
CREATE TABLE parkCounty(
  ID serial PRIMARY KEY,
  county VARCHAR(100) NOT NULL UNIQUE
);
DROP TABLE IF EXISTS parks CASCADE;
CREATE TABLE parks(
  ID serial PRIMARY KEY,
  parkName VARCHAR(250) NOT NULL,
  parkType INT NOT NULL,
  parkCounty INT NOT NULL,
  totalMiles DECIMAL(6, 2) NOT NULL,
  webURL VARCHAR(250),
  petLaws VARCHAR(250),
  features TEXT,
  CONSTRAINT fk_park_type FOREIGN KEY (parkType) REFERENCES parkType (ID),
  CONSTRAINT fk_park_county FOREIGN KEY (parkCounty) REFERENCES parkCounty (ID)
);
DROP TABLE IF EXISTS trails CASCADE;
CREATE TABLE trails(
  ID serial PRIMARY KEY,
  park INT NOT NULL,
  trailName VARCHAR(100) NOT NULL,
  trailLength DECIMAL(6, 2) NOT NULL,
  difficulty VARCHAR(100),
  elevation INT,
  features TEXT,
  CONSTRAINT fk_park FOREIGN KEY (park) REFERENCES parks (ID)
);