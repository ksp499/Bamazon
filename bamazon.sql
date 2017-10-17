create database bamazon;

use bamazon;

create table products(
	item_id int not null,
    product_name varchar(50),
    department_name varchar(50),
    price decimal(5,2),
    stock_quantity int,
    primary key (item_id)
);

insert into products (item_id, product_name, department_name, price, stock_quantity) values (
	123, 'fabric cutter', 'clothing', 19.99, 25
);

insert into products (item_id, product_name, department_name, price, stock_quantity) values (
	493, 'drone', 'toys', 89.99, 10
);

insert into products (item_id, product_name, department_name, price, stock_quantity) values (
	255, 'harry potter', 'book', 15.99, 30
);

insert into products (item_id, product_name, department_name, price, stock_quantity) values (
	4568, 'starbucks coffee mug', 'kitchen', 8.99, 25
);

insert into products (item_id, product_name, department_name, price, stock_quantity) values (
	1555, 'playstation 4', 'electronics', 199.99, 10
);

insert into products (item_id, product_name, department_name, price, stock_quantity) values (
	7741, 'samsung TV 55in', 'electronics', 485.99, 5
);

insert into products (item_id, product_name, department_name, price, stock_quantity) values (
	4561, 'slipper', 'shoes', 25.99, 10
);

insert into products (item_id, product_name, department_name, price, stock_quantity) values (
	583, 'home alone', 'dvd', 15.99, 15
);

insert into products (item_id, product_name, department_name, price, stock_quantity) values (
	4614, 'halloween costume', 'clothing', 29.99, 10
);

insert into products (item_id, product_name, department_name, price, stock_quantity) values (
	1235, 'smart water 9pk', 'food', 19.99, 10
);