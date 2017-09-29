import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('matatu', params.matatu_id)
  },
  actions: {
    saveComment3(params) {
      debugger
      alert('the comment action is reaching the route')
      var newComment = this.store.createRecord('comment', params)
      var matatu = params.matatu;
      matatu.get('comments').addObject(newComment).then(function() {
        return newComment.save()
      })
      this.transitionTo('matatu', matatu)
    }
  }
});
