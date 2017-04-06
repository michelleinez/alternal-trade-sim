define([
  'jquery',
  'underscore',
  'backbone',
  'models/altcoin/AltcoinModel',
  'text!templates/altcoins/altcoinsTemplate.html'
], function(
    $,
    _,
    Backbone,
    AltcoinModel,
    altcoinsTemplate
){

  //var contributorsListView;

  var AltcoinsView = Backbone.View.extend({

    el: $("#page"),

    initialize:function() {
      this.altcoinModel = new AltcoinModel([]);
      var that = this;
      var onDataHandler = function(collection) {
          that.render();
      }
      this.altcoinModel.fetch({ success : onDataHandler, dataType: "json" });
    },

    render: function(){
      $('.menu li').removeClass('active');
      $('.menu li a[href="'+window.location.hash+'"]').parent().addClass('active');
      var altcoins = this.altcoinModel.attributes;
      _.each(altcoins, function(coinData, altcoin) {
        console.log(altcoin);
        console.log(coinData);
      });
      var data = {
        altcoins: altcoins
      }
      console.log("data = ", data);
      // main view
      var compiledTemplate = _.template( altcoinsTemplate, data );
      this.$el.html( compiledTemplate );

    }

  });
  return AltcoinsView;
});
