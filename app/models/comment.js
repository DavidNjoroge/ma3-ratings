import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr(),
  content: DS.attr(),
  rating: DS.attr(),
  matatu: DS.belongsTo('matatu', {
    async: true
  })

});
