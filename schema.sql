DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;
USE bamazon;

CREATE TABLE products (
    item_id INT(3) NOT NULL,
    product_name VARCHAR(100) NULL,
    department_name VARCHAR(100) NULL,
    price DECIMAL(10,2) NULL,
    stock_quantity INT NULL,
    PRIMARY KEY (item_id)
);

Select * FROM products;

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES 
(315, "Music Box", "Home Decor", 15.00, 20), 
(835, "Stuffed Squirrel", "Toys", 5.00, 55), 
(556, "Water Bottle", "Athletics", 8.00, 100), 
(432, "Silver Fork", "Kitchen", 3.50, 50), 
(965, "Sandbox", "Outdoor", 30.00, 15), 
(523, "Blank CDs", "Office", 10.00, 10), 
(889, "Toe Socks", "Clothing", 7.75, 48), 
(200, "Fancy Soap", "Personal Care", 4.00, 102), 
(453, "Phone Case", "Technology", 12.50, 35), 
(254, "Snow Globe", "Home Decor", 5.50, 7);