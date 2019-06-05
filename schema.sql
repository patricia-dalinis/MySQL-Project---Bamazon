DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;
USE bamazon;

CREATE TABLE products (
    id INT NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(100) NULL,
    department_name VARCHAR(100) NULL,
    price DECIMAL(10,2) NULL,
    stock_quantity INT NULL,
    PRIMARY KEY (id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES 
("Music Box", "Home Decor", 15.00, 20), 
("Stuffed Squirrel", "Toys", 5.00, 55), 
("Water Bottle", "Athletics", 8.00, 100), 
("Silver Fork", "Kitchen", 3.50, 50), 
("Sandbox", "Outdoor", 30.00, 15), 
("Blank CDs", "Office", 10.00, 10), 
("Toe Socks", "Clothing", 7.75, 48), 
("Fancy Soap", "Personal Care", 4.00, 102), 
("Phone Case", "Technology", 12.50, 35), 
("Snow Globe", "Home Decor", 5.50, 7);