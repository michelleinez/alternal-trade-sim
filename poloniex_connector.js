var autobahn = require('autobahn');
var wsuri = "wss://api.poloniex.com";
var connection = new autobahn.Connection({
	  url: wsuri,
      realm: "realm1"
});

// get this from trading_bot.js
var myBot = {};

connection.onopen = function (session) {
		function marketEvent (args, kwargs) {
			console.log('market event:');
			console.log(args);
			console.log('market event kwargs:');
			console.log(kwargs);
		}

		function tickerEvent (args, kwargs) {
			console.log('ticker event:');
					console.log(args);
			myBot.sensor(args);
		}

		function trollboxEvent (args, kwargs) {
			console.log('trollbox event:');
			console.log(args);
		}

		session.subscribe('BTC_XMR', marketEvent);
		session.subscribe('ticker', tickerEvent);
		session.subscribe('trollbox', trollboxEvent);
}

connection.onclose = function () {
	console.log("Websocket connection closed");
}

connection.open();
