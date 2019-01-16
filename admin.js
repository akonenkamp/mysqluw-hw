var inquirer = require('inquirer');
var mysql = require('mysql');
require("console.table");

var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,

    user: 'root',

    password: 'password',
    database: 'Bamazon'
});

connection.connect(function (err) {
    if (err) {
        console.error("error connect" + err.stack);
    }
    loadMgrMenu();
});

function loadMgrMenu() {
    connection.query("select * from products", function(err, res){
        if (err) throw err;
        loadMgrOptions();

    });
}

function loadMgrOptions(products) {
    inquirer
    .prompt ({
        type: "list",
        name: "choice",
        choices: ["view products for sale", "view Low Inventory", "Add to inventory", "addd new products", "quit"],
        message: "what would you like to do"
    })
    .then(function(value){
        //or choice?
        switch(value.choices) {
        case "view products for sale" :
        console.table(products)

        default:
        console.log("Goodbye!");
        process.exit(0);
        break;

        }
    });
}



