import DS from 'ember-data';

export default DS.Model.extend({
    rev: DS.attr('string'),
    title: DS.attr('string'),
    slug: DS.attr('string'),
    body: DS.attr('string')
});
