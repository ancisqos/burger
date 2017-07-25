const express = require("express");
const router = express.Router();
const burger = require("../models/burger.js")

// set up basic route
// goes to base route of "/"
// renders 'index' from views folder
router.get('/', function(req,res){
	burger.all(function(burger_data){
		console.log(burger_data);
			res.render('index');
	})
})

module.exports = router;