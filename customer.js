var inquirer = require('inquirer');
var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    port: 8080,

    user: 'root',

    password: '',
    database: 'Bamazon'
});

function bamazonRun() {
    connection.query('SELECT * FROM products', function (err, res) {
        if (err) throw err;
        console.log('welcome to bamazon')

    })

    for (var i = 0; i < res.length; i++) {
        console.log("ID: " + res[i].item_id + " | " + "Product: " + res[i].product_name + " | " + "Department: " + res[i].department_name + " | " + "Price: " + res[i].price + " | " + "QTY: " + res[i].stock_quantity);
        console.log('--------------------------------------------------------------------------------------------------')
    }

    inquirer.prompt([
        {
            type: "input",
            name: "id",
            message: "what is the ID of the product you would like to purchase",
            validate: function (value) {
                if (isNaN(value) == false && parseInt(value) <= res.length && parseInt(value) > 0) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "qty",
            message: "how much would you like to purchase",
            validate: function (value) {
                if (isNaN(value)) {
                    return false;
                } else {
                    return true;
                }
            }
        }
    ]).then(function (answer) {

        var buyWhat = (answer.id) - 1;
        var howMuch = parseInt(answer.qty);
        var total = parseFloat(((res[buyWhat].price) * howMuch).toFixed(2));

        if (res[whatToBuy].StockQuantity >= howMuch) {
            //after purchase, updates quantity in Products
            connection.query("UPDATE Products SET ? WHERE ?", [
                { stock_quantity: (res[buyWhat].stock_quantity - buyWhat) },
                { Item_id: answer.id }
            ], function (err, result) {
                if (err) throw err;
                console.log("Success! Your total is $" + total.toFixed(2) + ". Your item(s) will be shipped to you in 3-5 business days.");
            });



        }
    });
}