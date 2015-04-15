import Ember from 'ember';

/*export default Ember.Route.extend({
    actions: {
        login: function() {
            this.get('auth').login();
        },

        logout: function() {
            this.get('auth').logout();
        }
    }
});*/

export default Ember.ArrayController.extend({
    sortProperties: ['posted'],
    sortAscending: false
});
