
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

		parse : function(res) {
        // because of jsonp
	        return res.data;
	    },

		setTickerSymbol: function (tickerSymbol) {
			this.save({
				tickerSymbol: tickerSymbol
			});
		}
	});

	return altcoinModel;
});
