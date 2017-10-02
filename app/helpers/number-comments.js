import Ember from 'ember';

export function numberComments(params /*, hash*/ ) {
  var matatu = params[0]
  var comments = matatu.get('comments').get('rating')
  console.log(comments);

  var total = matatu.get('comments').get('length')
  for (var i = 0; i < 5; i++) {
    matatu[i]
  }

  return Ember.String.htmlSafe('<span>' + total + '<span')
}

export default Ember.Helper.helper(numberComments);
