CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL
);

CREATE TABLE films (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT,
  title VARCHAR(255),
  rating INT,
  review TEXT,
  summary TEXT,
  poster_url TEXT,
  FOREIGN KEY (user_id) REFERENCES users(id)
);