import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    saveMatatu(params) {
      var newMatatu = this.store.createRecord('matatu', params)
      alert('saved new entry')
      newMatatu.save()
      this.transitionTo('index')
    }
  }
});
