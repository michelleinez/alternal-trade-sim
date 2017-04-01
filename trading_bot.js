


module.export({
  this.sensor = function(update){
    if (update.symbol in this.targets)
    {
      this.maybeTrade(update);
    }
  },
  this.targets = {
    // Example: if BTC goes above 2000 USD, issue a sell order at 1999 USD for half of our holdings
    'BTC': {
      action:'sell',
      threshold: 2000,
      currency: 'USD',
      condition: 'above',
      // this can depend on lots of stuff, just an example
      price: 1999,
      proportion: 0.5,
    },
    
  },
  this.holdings = {
    // TODO: these need to be BigNumbers due to precision errors!
    'BTC': 2,
    'ETH': 10,
  }
  this.maybeTrade = function(update) {
    order = this.targets[update.symbol];
    if (order.condition == 'above') {
      if (update.price >= order.threshold) {
        // place trade with api
      }
    } else if (order.condition == 'below') {
      if (update.price <= order.threshold) {
        // place trade with api
      }
    } else {
      console.error('waht');
    }
  },

});
