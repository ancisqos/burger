// create object with all sorts of methods in it
// all the different things we can do with data

const connection = require("./connection.js");

// "OH CRUD."

const orm = {

	//all data from database
	all: function(tableInput, cb){
		connection.query('SELECT * FROM '+tableInput+';', function(err, result){
			if(err) throw err;
			cb(result)
		})
	}
}

module.exports = orm;


	// selectAll ()
	// // orm.all
	// insertOne ()
	// // orm.create
	// updateOne ()
	// // orm.update