import Ember from 'ember';

export default Ember.Route.extend({
    title: function(tokens) {
        return tokens.join(' - ') + ' - Maltadz';
    },
    todaysDate: function () {
        return (new Date()).toDateString();
    }
});
