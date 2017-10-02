import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('matatu', params.matatu_id)
  },
  // average: Ember.computed('matatu.comments', function() {
  //   console.log(this.get('matatu.comments'));
  // }),
  sortBy: ['rating:desc'],

  sortedComments: Ember.computed.sort("matatu.comments", 'sortBy'),
  actions: {
    saveComment(params) {

      // alert('the comment action is reaching the route')
      var newComment = this.store.createRecord('comment', params)
      var matatu = params.matatu;
      matatu.get('comments').addObject(newComment).then(function() {

        return newComment.save()
      })
      this.transitionTo('matatu', matatu)
    },
    deleteMatatu(matatu) {
      console.log(matatu);
      if (confirm('you are about to delete the matatu are you sure')) {
        matatu.destroyRecord()
        this.transitionTo('index')

      }
    }
  }
});
