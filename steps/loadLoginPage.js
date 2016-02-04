/*jslint node: true */
'use strict';

var loadLoginPage = function (page) {
  console.log('Load Login Page');
  page.settings.userAgent = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_2) AppleWebKit/537.11 (KHTML, like Gecko) Chrome/23.0.1271.6 Safari/537.11';
  //page.open(config.urls.shop.login);
  page.open('https://passport.dx.com');
};

exports = module.exports = loadLoginPage;