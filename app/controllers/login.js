import Ember from 'ember';


export default Ember.Controller.extend({
    actions: {
        login: function() {
            var controller = this;
            controller.get("session").login().then(function(user) {
                // Persist your users details.
            }, function() {
                // User rejected authentication request
            });
        }
    }
});
