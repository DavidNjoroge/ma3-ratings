import Ember from 'ember';

export default Ember.Component.extend({

  average: Ember.computed('comment', function() {
    console.log(this.get('matatu.comments'));
    return
  }),


});
