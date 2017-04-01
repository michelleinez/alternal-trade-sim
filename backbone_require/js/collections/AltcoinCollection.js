/*global define */
define([
	'underscore',
	'backbone',
	'models/AltcoinModel'
], function (
	_,
	Backbone,
	AltcoinModel
) {
	'use strict';

	var AltcoinCollection = Backbone.Collection.extend({
		// Reference to this collection's model.
		model: AltcoinModel,

		url: 'https://poloniex.com/public?command=returnTicker',

		// Filter down the list of all todo items that are finished.
		getCoinBySymbol: function (tickerSymbol) {
			return this.where({tickerSymbol: tickerSymbol});
		}

	});

	return new AltcoinCollection();
});
