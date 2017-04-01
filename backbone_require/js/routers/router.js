/*global define*/
define([
	'jquery',
	'backbone',
	'collections/AltcoinCollection',
], function ($, Backbone, AltcoinCollection) {
	'use strict';

	var TodoRouter = Backbone.Router.extend({
		routes: {}
	});

	return TodoRouter;
});
