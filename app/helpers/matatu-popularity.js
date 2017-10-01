import Ember from 'ember';

export function matatuPopularity(params /*, hash*/ ) {
  var matatu = params[0]
  console.log(matatu);
  if (matatu.get('comments').get('length') >= 5) {

    return Ember.String.htmlSafe('<span><img  class="icon" src="http://www.oogazone.com/wp-content/uploads/best-15-flame-icon-fire-clipart-black-and-photos.jpg" alt=""></span>')
  }
}

export default Ember.Helper.helper(matatuPopularity);
