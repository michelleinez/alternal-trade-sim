


module.export({
  this.sensor = function(update){
      if (update.symbol in this.memory) {
        this.updateMemory(update);
        this.decide(this.memory[update.symbol]);
      }
  },
  this.holdings = {
    // TODO: these need to be BigNumbers due to precision errors in js!
    'BTC': 2,
    'ETH': 10,
  },
  this.memory = {
    'BTC' : {
      '2_week_avg' : 0,
      '1_week_avg' : 0,
      '3_day_avg' : 0,
      '1_day_avg' : 0,
      '12_hour_avg' : 0,
      '6_hour_avg' : 0,
      '3_hour_avg' : 0,
      '1_hour_avg' : 0,
      'last_price' : 0,
      'complicated_formula': 0,
    },
    'ETH': {}
    // ...
  },
  this.updateMemory = function(update) {
    // update this.memory with the data
  },
  this.decide = function(data) {
    // maybe execute a trade
  }

});
