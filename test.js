/*jslint node: true */
'use strict';

// phantomjs code to log in to Amazon
// based on the code from this Stackoverflow answer: http://stackoverflow.com/questions/9246438/how-to-submit-a-form-using-phantomjs
// I'm injecting jQuery so this assumes you have jQuery in your project directory
var page = require('webpage').create(),
		testindex = 0,
		loadInProgress = false,
		interval;

page.onConsoleMessage = function(msg) {
  console.log(msg);
};

page.onLoadStarted = function() {
  loadInProgress = true;
  console.log('load started');
};

page.onLoadFinished = function() {
  loadInProgress = false;
  console.log('load finished');
};

var steps = [
  require('./steps/loadLoginPage'),
  require('./steps/enterCredentials'),
  require('./steps/submitLoginForm'),
  require('./steps/printUsername')
];

interval = setInterval(function() {
  if (!loadInProgress && typeof steps[testindex] === 'function') {
    console.log('### Step', (testindex + 1), ' ###');

    steps[testindex](page);
    
    testindex++;
  }
  if (typeof steps[testindex] !== 'function') {
    console.log('test complete!');
    phantom.exit();
  }
}, 50);