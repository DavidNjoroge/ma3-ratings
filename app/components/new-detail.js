import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveMatatu() {
      var params = {
        name: this.get('name'),
        sacco: this.get('sacco'),
        image: this.get('image'),
        plate: this.get('plate'),
        route: this.get('route'),
      };
      console.log(params);
      // this.sendAction('saveRental2', params);
    }
  }
});
