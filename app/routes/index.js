import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      matatus: this.store.findAll('matatu'),
      comments: this.store.findAll('comment')
    })
  }
});
