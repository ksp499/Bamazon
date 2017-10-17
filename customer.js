var mysql = require("mysql");
var inquirer = require("inquirer");
var Table = require("cli-table");

var connection = mysql.createConnection({
	host: "127.0.0.1",
	port: 3306,
	user: 'root',
	password: '8624560',
	database: 'bamazon'
});

connection.connect();

connection.query('SELECT item_id, product_name, department_name, price, stock_quantity FROM products', function(error, result) {
	if(error) {
		console.log(error);
	}

	var table = new Table({
		head: ['Item Id', 'Product Name', 'Department Name', 'Price', 'Stock Quantity'],
		style: {
			head: ['cyan'],
			compact: false,
			colAlign: ['center']
		},
		chars: { 'top': '═' , 'top-mid': '╤' , 'top-left': '╔' , 'top-right': '╗'
         , 'bottom': '═' , 'bottom-mid': '╧' , 'bottom-left': '╚' , 'bottom-right': '╝'
         , 'left': '║' , 'left-mid': '╟' , 'mid': '─' , 'mid-mid': '┼'
         , 'right': '║' , 'right-mid': '╢' , 'middle': '│' }
	});


	for (var i = 0; i < result.length; i++) {
		table.push([ result[i].item_id, result[i].product_name, result[i].department_name, result[i].price, result[i].stock_quantity ]);
	}

	console.log(table.toString());
	prompt();
});

var prompt = function() {
	inquirer.prompt([{
		name: "item_id",
		type: "input",
		message: "What is the ID of the product you would like to buy?",
		validate: function(value) {
			if (isNaN(value) == false) {
				return true;
			} else {
				return false;
			}
		}
	}, {
		name: "quantity",
		type: "input",
		message: "How many units of this product would you like to buy?",
		validate: function(value) {
			if (isNaN(value) == false) {
				return true;
			} else {
				return false;
			}
		}
	}]).then(function(answer) {

	});
}