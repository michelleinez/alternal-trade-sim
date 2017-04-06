
/*global define*/
define([
	'underscore',
	'backbone'
], function (_, Backbone) {
	'use strict';

	var altcoinModel = Backbone.Model.extend({
		// Default attributes for the todo
		// and ensure that each todo created has `title` and `completed` keys.
		defaults: {
			title: '',
			tickerSymbol: false
		},
		
		url : function() {
			return 'https://poloniex.com/public?command=returnTicker';
		},

		parse: function(res) {
	    return res;
	  },

		setTickerSymbol: function (tickerSymbol) {
			this.save({
				tickerSymbol: tickerSymbol
			});
		}
	});

	return altcoinModel;
});
