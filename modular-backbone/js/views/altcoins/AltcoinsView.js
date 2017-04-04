define([
  'jquery',
  'underscore',
  'backbone',
  'collections/contributors/ContributorsCollection',
  'collections/altcoins/AltcoinsCollection',
  'views/contributors/ContributorsListView',
  'text!templates/altcoins/altcoinsTemplate.html'
], function(
    $,
    _,
    Backbone,
    ContributorsCollection,
    AltcoinsCollection,
    ContributorsListView,
    altcoinsTemplate
){

  //var contributorsListView;

  var AltcoinsView = Backbone.View.extend({

    el: $("#page"),

    initialize:function() {
      var that = this;

      var onDataHandler = function(collection) {
          that.render();
      }

      this.collection = new AltcoinsCollection([]);
      this.collection.fetch({ success : onDataHandler, dataType: "json" });
    },

    render: function(){
        $('.menu li').removeClass('active');
        $('.menu li a[href="'+window.location.hash+'"]').parent().addClass('active');
        altcoins = this.collection.models
        var data = {
          altcoins: altcoins
      }

      // main view
      var compiledTemplate = _.template( altcoinsTemplate, data );
      this.$el.html( compiledTemplate );

    }

  });
  return AltcoinsView;
});
