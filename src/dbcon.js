const mysql = require('mysql');

var con = mysql.createConnection({
    host: "sql5.freemysqlhosting.net",
    user: "sql5520452",
    password: "ymwP2d1XPQ",
    port: "3306",
    database: "sql5520452"
});

con.connect(function (err) {
    if (err) {
        console.log("Error in the con")
        console.log(err)
    }
    else {
        console.log(`Database Connected`)
        con.query(`SHOW DATABASES`,
            function (err, result) {
                if (err)
                    console.log(`Error executing the query - ${err}`)
                else
                    console.log("Result: ", result)
            })
    }
});

module.exports = {
    mysql,
    con
};