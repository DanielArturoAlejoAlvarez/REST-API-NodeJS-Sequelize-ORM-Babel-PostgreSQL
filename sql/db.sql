CREATE DATABASE node_postgresql_rest_api;

CREATE TABLE IF NOT EXISTS projects(
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL CHECK (name <> ''),
  priority INTEGER NOT NULL,
  description TEXT,
  deliveryday DATE NOT NULL
);

CREATE TABLE IF NOT EXISTS tasks(
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL CHECK (name <> ''),
  done BOOLEAN,
  projectid INTEGER REFERENCES projects(id)
);

INSERT INTO projects(name,priority,description,deliveryday) VALUES('Make a web app', 1, 'Using Angular framework', '2021-02-25');
INSERT INTO projects(name,priority,description,deliveryday) VALUES('Create a mobile app', 2, 'Using Flutter', '2021-03-05');
INSERT INTO projects(name,priority,description,deliveryday) VALUES('Create a Rest Api', 2, 'Using Laravel', '2021-03-16');
INSERT INTO projects(name,priority,description,deliveryday) VALUES('Create a console app', 1, 'Using C#', '2021-03-28');
INSERT INTO projects(name,priority,description,deliveryday) VALUES('Make a desktop app', 1, 'Using Java', '2021-04-12');

INSERT INTO tasks(name,done,projectid) VALUES('Download Angular cli', true, 1);
INSERT INTO tasks(name,done,projectid) VALUES('Download Android Studio', true, 2);
INSERT INTO tasks(name,done,projectid) VALUES('Download Postman', true, 3);