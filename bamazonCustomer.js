var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Yo!MTV1raps",
    database: "bamazon"
});

connection.connect(function (err) {
    if (err) throw err;
    displayInventory();
});

let displayInventory = () => {
    //console.log("SQL Connection Established")
    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err
        for (let i = 0; i < res.length; i++) {
            console.log(" - - - - - - - - - - - - - - - ")
            console.log("Item ID Number: " + res[i].item_id)
            console.log("Item: " + res[i].product_name)
            console.log("Price: $" + res[i].price)
            console.log("\n")
        }
        purchase();
    })
};

// Purchase function to prompt the customer for an item to purchase
let purchase = () => {
    inquirer.prompt([{
                type: "input",
                name: "item_id",
                message: "Please input the Item Number you wish to purchase: ",
                filter: Number
            },
            {
                type: "input",
                name: "quantity",
                message: "How many of this item would you like to purchase? ",
                filter: Number
            }
        ])
        .then(function (purchase) {
            let item = purchase.item_id;
            let quantity = purchase.quantity;

            let queryStr = 'SELECT * FROM products WHERE ?';

            connection.query(queryStr, {
                item_id: item
            }, function (err, res) {
                if (err) throw err

                if (res.length === 0) {
                    console.log("ERROR: Invalid Item ID. Please select a valid Item ID.")
                    displayInventory()
                } else {

                    let productInfo = res[0]

                    if (quantity <= productInfo.stock_quantity) {
                        console.log(productInfo.product_name + " = IN STOCK! Placing order now!")
                        console.log("\n")

                        var updateQueryStr = "UPDATE products SET stock_quantity = " + (productInfo.stock_quantity - quantity) + " WHERE item_id = " + item

                        // Update the inventory
                        connection.query(updateQueryStr, function (err, data) {
                            if (err) throw err;

                            console.log("Your total is $" + productInfo.price * quantity)
                            console.log("Your order has been placed!");
                            console.log(" - - - - - - - - - - - - - - - ")

                            connection.end();
                        })
                    } else {
                        console.log("Sorry, " + productInfo.product_name + " = out of stock.")
                        console.log("\n")
                    }
                }
            })
        })
}