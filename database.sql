
CREATE DATABASE userData;

DROP TABLE IF EXISTS users; 

CREATE TABLE users (
    username varchar(255),
    pass varchar(255),
    wishlist int,
    completed int,
    dropped int,
    current int
);
