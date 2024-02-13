CREATE TABLE member (
  id INT AUTO_INCREMENT PRIMARY KEY,
  userId varchar(30) not null UNIQUE,
  userPw varchar(50) not null,
  name varchar(10) not null,
  phoneNumber varchar(11) UNIQUE,
  email varchar(50),
  birthSex  char(7),
  aiMeasure varchar(50)
);

CREATE TABLE tags (
  id INT PRIMARY KEY AUTO_INCREMENT,
  memberId INT,
  tag VARCHAR(100),
  FOREIGN KEY (memberId) REFERENCES member(id)
);

INSERT INTO tags (memberId, tag) VALUES (1, 'example_tag');