import Ember from 'ember';

export default Ember.Route.extend({
    title: function(tokens) {
        // Meta Title
        var base = 'Maltadz';
        var hasTokens = tokens && tokens.length;

        return hasTokens ? tokens.reverse().join(' - ') + ' - ' + base : base;
    },
    todaysDate: function () {
        return (new Date()).toDateString();
    }
});
