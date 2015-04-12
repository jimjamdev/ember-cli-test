import DS from 'ember-data';

export default DS.Model.extend({
    name: DS.attr('string'),
    body: DS.attr('string'),
    price: DS.attr('string'),
    posted: DS.attr('date'),
    active: DS.attr('boolean'),
    slug: DS.attr('string')
});
