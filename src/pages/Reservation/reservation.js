const express = require('express');
const session = require('express-session');
const path = require('path');
const app = express();
var dbcon = require("../../dbcon");
console.log(dbcon.testmsg);

app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'static')));

// http://localhost:3000/reserve
app.post('/reserve', function(request, response) {
	// Capture the input fields
	let start_time = request.body.start_time;
	let end_time = request.body.end_time;
	let book_id = request.body.book_id;
	let entry_time = request.body.entry_time;
    let exit_time = request.body.exit_time;
	// Ensure the input fields exists and are not empty
	if (start_time && end_time && book_id && entry_time && exit_time) {
		// Execute SQL query that'll select the account from the database based on the specified username and password
		dbcon.con.query('INSERT INTO reservation (?,?,?,?,?)  FROM login WHERE username = ? AND password = ?', [start_time,end_time,book_id,entry_time,exit_time], function(error, results, fields) {
			// If there is an issue with the query, output the error
			if (error) throw error;
			// If the account exists
			if (results.length > 0) {
				// Successful reservation
				response.send('Reservation was made successfully!');
			} else {
				// unsuccessful reservation
				response.send('Reservation was unsuccessful!');
			}			
			response.end();
		});
	} else {
		response.send('Please enter all details to make a reservation!');
		response.end();
	}
});
