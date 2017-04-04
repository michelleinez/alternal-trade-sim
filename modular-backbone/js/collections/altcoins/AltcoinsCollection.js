define([
  'underscore',
  'backbone',
  'models/altcoin/AltcoinModel'
], function(_, Backbone, AltcoinModel){

  var AltcoinsCollection = Backbone.Collection.extend({

      model: AltcoinModel,

      initialize : function(models, options) {},

      url : function() {
        return 'https://poloniex.com/public?command=returnTicker';
      }

  });

  return AltcoinsCollection;

});
