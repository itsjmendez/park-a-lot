const express = require('express');
const session = require('express-session');
const path = require('path');
const app = express();
var dbcon = require("../../dbcon");
console.log(dbcon.testmsg);

dbcon.con.connect(function (err) {
    if (err) {
        console.log("Error in the con")
        console.log(err)
    }
    else {
        console.log(`Database Connected`)
        dbcon.con.query(`SHOW DATABASES`,
            function (err, result) {
                if (err)
                    console.log(`Error executing the query - ${err}`);
                else
                    console.log("Result: ", result);
            });
    }
});

app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'static')));

// http://localhost:3000/auth
app.post('/auth', function(request, response) {
	// Capture the input fields
	let username = request.body.username;
	let password = request.body.password;
	// Ensure the input fields exists and are not empty
	if (username && password) {
		// Execute SQL query that'll select the account from the database based on the specified username and password
		dbcon.con.query('SELECT * FROM login WHERE username = ? AND password = ?', [username, password], function(error, results, fields) {
			// If there is an issue with the query, output the error
			if (error) throw error;
			// If the account exists
			if (results.length > 0) {
				// Authenticate the user
				request.session.loggedin = true;
				request.session.username = username;
				// Redirect to home page
				response.redirect('/home');
			} else {
				response.send('Incorrect Username and/or Password!');
			}			
			response.end();
		});
	} else {
		response.send('Please enter Username and Password!');
		response.end();
	}
});
