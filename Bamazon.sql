CREATE DATABASE Bamazon;
USE Bamazon;

-- Create a table called 'products' which will contain the store inventory --
CREATE TABLE products (
	item_id INTEGER(11) AUTO_INCREMENT NOT NULL,
	product_name VARCHAR(30) NOT NULL,
	department_name VARCHAR(20) NOT NULL,
	price DECIMAL(10,2) NOT NULL,
	stock_quantity INTEGER(11) NOT NULL,
	PRIMARY KEY (item_id)
);

-- Insert data into the 'products' table --
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES  ('Pacifica Shampoo', 'Cosmetics', 9.75, 300),
		('Dove Conditioner', 'Cosmetics', 6.25, 47),
		('Organics Trash Bags', 'Grocery', 7.99, 30),
		('Brawny Paper Towels', 'Grocery', 4.25, 400),
		('Granny Smith Apples', 'Produce', 0.35, 800),
		('Nestle Brownie Mix', 'Grocery', 4.50, 270),
		('Charmin Toiler Paper', 'Grocery', 12.99, 575),
		('Yoga Mat', 'Sports', 17.00, 200),
		('5lb Dumb bell', 'Sports', 7.99, 89),
		('Tie Dye Shirt', 'Clothing', 5.55, 120),
		('Adidas Shorts', 'Clothing', 17.88, 250),
		('Purina Cat Chow', 'Pet', 7.25, 157),
		('Fancy Feast Wet Cat Food', 'Pet', 12.50, 163),
		('Ibuprophen', 'Pharmacy', 4.95, 389),
		('Tylenol', 'Pharmacy', 2.25, 550),
		('Ben & Jerry Ice Cream', 'Grocery', 3.25, 432);
        ('Jump Rope', 'Sports', 17.99, 819),
