import DS from 'ember-data';

export default DS.Model.extend({
    provider: DS.attr('string'),
    name: DS.attr('string'),
    email: DS.attr('string'),
    timestamps: DS.attr('string'),
    stageId: DS.attr('string')
});
