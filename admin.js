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



