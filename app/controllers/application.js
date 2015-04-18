import Ember from 'ember';

export default Ember.Controller.extend({
    beforeModel: function() {
        this.get("session").fetch().catch(function() {});
    },
    actions: {
        login: function(provider) {
            this.get('session').login(provider);
            this.transitionTo('manage');
        },

        logout: function() {
            this.get('session').logout();
            this.transitionTo('index');
        }
    }
});
