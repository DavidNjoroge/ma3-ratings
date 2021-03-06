import Ember from 'ember';

export default Ember.Component.extend({
  addComment: false,
  actions: {
    cancel() {
      this.set('addComment', false)
    },
    commentFormShow() {
      this.set('addComment', true)
    },
    saveComment() {
      var params = {
        author: this.get('author'),
        rating: this.get('rating'),
        content: this.get('content'),
        matatu: this.get('matatu'),
      }
      console.log(params);
      this.set('addComment', false)
      this.sendAction('saveComment', params)
    }

  }
});
