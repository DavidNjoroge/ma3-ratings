import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('matatu', params.matatu_id)
  },
  actions: {
    saveComment(params) {

      // alert('the comment action is reaching the route')
      var newComment = this.store.createRecord('comment', params)
      var matatu = params.matatu;
      matatu.get('comments').addObject(newComment).then(function() {
        console.log(matatu);
        return newComment.save()
      })
      this.transitionTo('matatu', matatu)
    }
  }
});
