import Ember from 'ember';

export default Ember.Route.extend({
    beforeModel: function(authData) {
        if (authData) {
            alert("User " + authData.uid + " is logged in with " + authData.provider);
        } else {
            alert("User is logged out");
        }
    }
});
