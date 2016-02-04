/*jslint node: true */
'use strict';

var enterCredentials = function(page) {
	console.log('Enter Credentials');
	page.injectJs('./tools/jQuery.min.js');
	page.evaluate(function() {
		$('#email').val('EMAIL');
		$('#password').val('PASSWORD');
		console.log(document.title);
	});
};

exports = module.exports = enterCredentials;