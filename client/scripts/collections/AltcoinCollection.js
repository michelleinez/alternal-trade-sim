/*global define */
define([
	'underscore',
	'backbone',
	'backboneLocalstorage',
	'models/todo'
], function (_, Backbone, Store, Altcoin) {
	'use strict';

	var AltcoinCollection = Backbone.Collection.extend({
		// Reference to this collection's model.
		model: Altcoin,

		// Save all of the todo items under this example's namespace.
		localStorage: new Store('altcoins-backbone'),

		get: function() {
			return this.findall();
		}
		// Filter down the list of all todo items that are finished.
		getCoinBySymbol: function (tickerSymbol) {
			return this.where({tickerSymbol: tickerSymbol});
		},

		// We keep the Altcoins in sequential order, despite being saved by unordered
		// GUID in the database. This generates the next order number for new items.
		nextOrder: function () {
			return this.length ? this.last().get('order') + 1 : 1;
		},

		// Todos are sorted by their original insertion order.
		comparator: 'order'
	});

	return new AltcoinCollection();
});
