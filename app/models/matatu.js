import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  sacco: DS.attr(),
  image: DS.attr(),
  plate: DS.attr(),
  Route: DS.attr()

});
