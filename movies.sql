INSERT INTO genres (name, ranking, active)
VALUES ('Investigación', 13, 1)

SELECT * FROM genres;

UPDATE genres
SET created_at = NOW(), name = 'Investigación Científica'
WHERE id = 13;

DELETE FROM genres WHERE id = 13;

SELECT first_name, last_name, rating FROM movies_db.actors;

SELECT title AS 'Título' FROM movies_db.series;

SELECT first_name AS 'Nombre', last_name AS Apellido FROM actors
WHERE rating >= 7.5;

SELECT title AS Títulos, rating, awards AS Premios FROM movies
WHERE rating >= 7.5 AND awards > 2
ORDER BY rating;

SELECT title FROM movies
LIMIT 3; 

SELECT title, rating FROM movies
ORDER BY rating DESC
LIMIT 5; 

SELECT title, rating FROM movies
ORDER BY rating DESC
LIMIT 5
OFFSET 5; 

SELECT first_name AS 'Nombre', last_name AS Apellido, rating FROM actors
ORDER BY rating DESC
LIMIT 10;

SELECT first_name AS 'Nombre', last_name AS Apellido, rating FROM actors
ORDER BY rating DESC
LIMIT 10
OFFSET 20;

SELECT first_name AS 'Nombre', last_name AS Apellido, rating FROM actors
WHERE last_name = 'Grint';


SELECT title, rating FROM movies
WHERE title LIKE 'Harry Potter%';


SELECT title, rating, release_date FROM movies
WHERE title LIKE 'Harry Potter%'
ORDER BY release_date DESC, rating;

SELECT * FROM actors
ORDER BY first_name;

SELECT * FROM actors
WHERE first_name LIKE 'jim%'
OR first_name LIKE 'johnny%'
OR first_name LIKE 'sam%'
ORDER BY first_name, rating;

SELECT title FROM movies
WHERE release_date BETWEEN "2004-01-01" AND "2008-12-31";