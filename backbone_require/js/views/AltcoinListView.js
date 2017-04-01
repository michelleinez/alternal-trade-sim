/*global define*/
define([
	'jquery',
	'underscore',
	'backbone',
	'text!templates/altcoinListTemplate.html'
], function (
	$,
	_,
	Backbone,
	altcoinsTemplate
) {
	'use strict';

	var TodoView = Backbone.View.extend({

		template: _.template(altcoinsTemplate),

		initialize: function () {

		},

		render: function () {
			debugger;
			this.$el.html(this.template(this.model.toJSON()));
			console.log('Model: ' + this.model.get());
			return this;
		},

		// Remove the item, destroy the model from *localStorage* and delete its view.
		clear: function () {
			this.model.destroy();
		}
	});

	return TodoView;
});
