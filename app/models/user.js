import DS from 'ember-data';

export default DS.Model.extend({
    firstName: DS.attr('string'),
    lastName: DS.attr('string'),
    emailAddress: DS.attr('string'),
    registeredDate: DS.attr('date'),
    lastLoginDate: DS.attr('date'),
    active: DS.attr('boolean'),
    slug: DS.attr('string')
});
