DROP DATABASE IF EXISTS employeetracker_db;
-- Creates the "employeetracker_db" database --
CREATE DATABASE employeetracker_db;

USE  employeetracker_db;


-- DROP TABLE IF EXISTS "department";
CREATE TABLE department (
  id INTEGER NOT NULL AUTO_INCREMENT,
  name VARCHAR(30) NOT NULL,
  PRIMARY KEY (id)
    );

 -- DROP TABLE IF EXISTS "employee";
CREATE TABLE employee (
  id INTEGER NOT NULL AUTO_INCREMENT,
  first_name varchar(30) DEFAULT NULL,
  last_name varchar(30) DEFAULT NULL,
  role_id INTEGER(10) DEFAULT NULL,
  manager_id INTEGER(10) DEFAULT NULL,
  department INTEGER(10) DEFAULT NULL,
  PRIMARY KEY (id)
  );

-- DROP TABLE IF EXISTS "role";
CREATE TABLE role (
  id INTEGER NOT NULL AUTO_INCREMENT,
  title varchar(30) DEFAULT NULL,
  salary decimal(10,4) DEFAULT NULL,
  department_id INTEGER(10) DEFAULT NULL,
  PRIMARY KEY (id)
 
);

INSERT INTO department (id,name)VALUES (1,"programing");
INSERT INTO department (id,name)VALUES (2,"sales");
INSERT INTO department (id,name)VALUES (3,"hr");


INSERT INTO employee (id,first_name,last_name,role_id,manager_id,department)VALUES (1,"john", "smith",  100 ,null,3);
INSERT INTO employee (id,first_name,last_name,role_id,manager_id,department)VALUES (2,"mary", "water",  200, 1,2);
INSERT INTO employee (id,first_name,last_name,role_id,manager_id,department)VALUES (3,"mark", "twain",  300, 1,2);
INSERT INTO employee (id,first_name,last_name,role_id,manager_id,department)VALUES (4,"robin", "hood",  100, 2,3);
INSERT INTO employee (id,first_name,last_name,role_id,manager_id,department)VALUES (5,"john", "little",  400, 3,1);
INSERT INTO employee (id,first_name,last_name,role_id,manager_id,department)VALUES (6,"patrick", "carston", 100, 3,2);
INSERT INTO employee (id,first_name,last_name,role_id,manager_id,department)VALUES (7,"ryan", "latham",  200, 2,1);
INSERT INTO employee (id,first_name,last_name,role_id,manager_id,department)VALUES (8,"steven", "cuthan", 300, 3,2);
INSERT INTO employee (id,first_name,last_name,role_id,manager_id,department)VALUES (9,"nicole", "waine",  100, 3,1);
INSERT INTO employee (id,first_name,last_name,role_id,manager_id,department)VALUES (10,"isabel", "towhand", 400, 2,2);
INSERT INTO employee (id,first_name,last_name,role_id,manager_id,department)VALUES (11,"tom", "bigbootae",  100, 2,1);



INSERT INTO role (title,salary,department_id)VALUES ("manager", 90000.00, 100);
INSERT INTO role (title,salary,department_id)VALUES ("programmer", 60000.00, 200);
INSERT INTO role (title,salary,department_id)VALUES ("customer service", 30000.00, 300);
INSERT INTO role (title,salary,department_id)VALUES ("floor manager", 30000.00, 400);
INSERT INTO role (title,salary,department_id)VALUES ("stocker", 24000.00, 500);


-- select * from department;
-- select * from employee;
-- select * from role;