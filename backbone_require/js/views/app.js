/*global define*/
define([
	// Libraries
	'jquery',
	'underscore',
	'backbone',
	// Collections
	'collections/AltcoinCollection',
	// Views
	'views/AltcoinListView',
	// Templates
	'text!templates/AltcoinListTemplate.html'
], function (
	// References to Libraries
	$,
	_,
	Backbone,
	// References to Collections
	AltcoinCollection,
	// References to Views
	AltcoinListView,
	// References to Templates
	AltcoinListTemplate
) {

	'use strict';

	// Our overall **AppView** is the top-level piece of UI.
	var AppView = Backbone.View.extend({

		// Instead of generating a new element, bind to the existing skeleton of
		// the App already present in the HTML.
		el: '#todoapp',

		// Compile our stats template
		altcoinListTemplate: _.template(AltcoinListTemplate),

		// Delegated events for creating new items, and clearing completed ones.
		events: {
		},

		// At initialization we bind to the relevant events on the `Todos`
		// collection, when items are added or changed. Kick things off by
		// loading any preexisting todos that might be saved in *localStorage*.
		initialize: function () {
			// this.altcoinCollection = new AltcoinCollection();
			// this.altcoinCollection.fetch();

			this.altcoinListView = new AltcoinListView();
		},

		// Re-rendering the App just means refreshing the statistics -- the rest
		// of the app doesn't change.
		render: function () {
			// console.log(this.altcoinCollection);

			// this.$altcoinList.html(this.altcoinListTemplate({
			// 	tickerSymbol: 'hello world'
			// }));
		}
	});

	return AppView;
});
