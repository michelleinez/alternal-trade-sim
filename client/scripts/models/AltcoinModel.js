
/*global define*/
define([
	'underscore',
	'backbone'
], function (_, Backbone) {
	'use strict';

	var Todo = Backbone.Model.extend({
		// Default attributes for the todo
		// and ensure that each todo created has `title` and `completed` keys.
		defaults: {
			title: '',
			tickerSymbol: false
		},

		setTickerSymbol: function (tickerSymbol) {
			this.save({
				tickerSymbol: tickerSymbol
			});
		}
	});

	return Todo;
});
