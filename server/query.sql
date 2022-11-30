-- Active: 1669293785404@@localhost@5432@belanja
create table users(
    id varchar(255) primary key,
    firstname varchar(20),
    lastname varchar(20),
    email varchar(50),
    phoneNumber varchar(13),
    password varchar(255)
);

create table products(
    id varchar(255) primary key,
    nama varchar(50),
    toko varchar(50),
    price int,
    origin varchar,
    species varchar(50),
    roast_level varchar(50),
    tasted varchar(50),
    processing varchar(50),
    deskripsi text,
    informasi text,
    photo varchar(255),
    stock int
);