-- Setup

-- Assume DB = postgresql

-- Given the table:

CREATE TABLE something
(
    id uuid NOT NULL,
    name  CHARACTER VARYING(255) NOT NULL,
    email CHARACTER VARYING(255) NOT NULL,
    phone CHARACTER VARYING(255),
    birthday DATE,
    age INTEGER
);

-- create a trigger/function which will calculate the age on insert or modify given the birthday
CREATE or replace FUNCTION getAge() RETURNS trigger AS $get_age_trg$
BEGIN
perform 'id', 'birthday', EXTRACT( YEAR FROM age(CAST(birthday as DATE))) AS "age" from something;
return 'age';

END;
$get_age_trg$ LANGUAGE plpgsql;

CREATE TRIGGER get_age_trg AFTER INSERT ON something
FOR EACH ROW EXECUTE PROCEDURE getAge();
