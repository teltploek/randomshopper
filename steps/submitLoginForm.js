/*jslint node: true */
'use strict';

var submitLoginForm = function(page) {
	console.log('login');
	page.evaluate(function() {
		console.log(document.title);
		$('#loginForm').submit();
	});
};

exports = module.exports = submitLoginForm;