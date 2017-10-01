import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveMatatu() {
      var params = {
        name: this.get('name'),
        image: this.get('image'),
        sacco: this.get('sacco'),
        route: this.get('route'),
        plate: this.get('plate'),

      };
      console.log(params);
      this.sendAction('saveMatatu', params);
    }
  }
});
