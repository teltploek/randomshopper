/*jslint node: true */
'use strict';

var printUsername = function(page) {
	console.log('checking success');
	page.injectJs('./tools/jQuery.min.js');
	page.evaluate(function() {
		var name = $('.login_info .unvip a').attr('title');
		console.log(name);
	});
};

exports = module.exports = printUsername;