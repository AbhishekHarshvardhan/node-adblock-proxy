#!/usr/bin/nodejs


(function() {

	/*
	 * GET ROOT FOLDER
	 */

	var root = null;
	var port = process.env.PORT || 4711;
	var host = process.env.HOST || '127.0.0.1'
	console.log("🚀 ~ file: start.js ~ line 13 ~ host", host);
	console.log("🚀 ~ file: start.js ~ line 12 ~ port", port);
	var tmp  = null;

	var file = __filename.split('/');
	if (file.pop() === 'start.js') {
		root = file.join('/');
	}

	if (root === null) {
		root = __dirname || null;
	}


	/*
	 * GET SETTINGS
	 */

	if (process.argv instanceof Array) {

		if (typeof process.argv[2] === 'string') {
			tmp  = parseInt(process.argv[2], 10);
			port = !isNaN(tmp) ? tmp : port;
		}

	}


	var _Proxy = require('./lib/proxy.js');


	var proxy = new _Proxy({
		root: root
	});


	proxy.listen('http',   port);
	proxy.listen('socks5', Number(process.env.PORT || 4711) + 1);

})();

