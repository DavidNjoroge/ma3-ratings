import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('matatu', params.matatu_id)
  },
  saveComment3(params) {
    var newComment = this.store.createRecord('comment', params)
    // newComment.save()
    alert('the comment action is reaching the route')
    this.transitionTo('matatu')
  }
});
