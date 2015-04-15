import Ember from 'ember';


export default Ember.Controller.extend({
   /* actions: {
        login: function() {
            Ember.debug("Accessed login controller");
            var controller = this;
            controller.get("session").login().then(function(user) {
                // Persist your users details.
            }, function() {
                // User rejected authentication request
            });
        }
    }*/
    actions: {
        login: function(provider) {
            this.get('session').login(provider);
        },

        logout: function() {
            this.get('session').logout();
        }
    }
});
