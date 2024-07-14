
CREATE DATABASE novelNestDb;

DROP TABLE IF EXISTS users; 

CREATE TABLE users (
    username VARCHAR(255),
    pass VARCHAR(255),
    wishlist NUMERIC,
    completed NUMERIC,
    dropped NUMERIC,
    current NUMERIC 
);

DROP TABLE IF EXISTS books;

CREATE TABLE books (
    bookID NUMERIC,
    title VARCHAR(255),
    authors VARCHAR(255),
    average_rating float,
    isbn NUMERIC,
    isbn13 NUMERIC,
    language_code CHAR(3),
    num_pages NUMERIC,
    ratings_count NUMERIC,
    text_reviews_count NUMERIC
);

\copy books FROM 'books.csv' DELIMITER ',' CSV HEADER;
