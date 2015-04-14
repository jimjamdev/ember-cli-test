import Ember from 'ember';

export default Ember.Route.extend({
    actions: {
        login: function() {
            this.get('auth').login();
        },

        logout: function() {
            this.get('auth').logout();
        }
    },
    // Tell ember what Model listings will use
    model: function() {
        return this.store.find('listing');
    }
});
