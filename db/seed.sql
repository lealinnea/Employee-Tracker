 INSERT INTO department (name)
    VALUES ("Sales"), ("Finance"), ("Engineering"), ("Legal");

INSERT INTO role (title, salary, department_id)
VALUES ("Sales Team Lead", 100000,1);
INSERT INTO role (title, salary, department_id)
VALUES ("Salesperson", 50000,1);

INSERT INTO role (title, salary, department_id)
VALUES ("Accountant", 80000,2);
INSERT INTO role (title, salary, department_id)
VALUES ("Lead Finance Manager", 120000,2);

INSERT INTO role (title, salary, department_id)
VALUES ("Software Engineer", 100000,3);
INSERT INTO role (title, salary, department_id)
VALUES ("Lead Engineer", 100000,3);

INSERT INTO role (title, salary, department_id)
VALUES ("Lawyer", 150000,4);
INSERT INTO role (title, salary, department_id)
VALUES ("Legal Aide", 50000,4);



    
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Sam", "Smith",1, NULL);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Lea", "Guerrero",2, NULL);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Andy", "Shoe",3, NULL);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Logan", "Square",4, NULL);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Pam", "Stewert",5, NULL);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Kevin", "Hart",6, NULL);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Dora", "Explorer",7, NULL);

UPDATE employee SET manager_id = 1 WHERE id = 5;
UPDATE employee SET manager_id = 1 WHERE id = 4;
UPDATE employee SET manager_id = 1 WHERE id = 3;