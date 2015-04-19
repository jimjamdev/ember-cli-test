import Ember from 'ember';

export default Ember.Route.extend({
    actions: {

        loginFacebook: function() {

            this.get('session').authenticate('simple-auth-authenticator:torii', 'facebook-oauth2').then(function() {
                //alert('SUCCESS ' + this.get('session.token'));
                this.transitionTo('manage');

            }, function(error) {
                console.log('auth failed '+error.message);
            });
        },

        loginGoogle: function() {
            this.get('session').authenticate('simple-auth-authenticator:torii', 'google-oauth2').then(function() {
                this.transitionTo('manage');
            }, function(error) {
                console.log('auth failed '+error.message);
            });
        },

        /*loginGoogle: function() {
            this.get('session').authenticate('simple-auth-authenticator:torii', 'google-auth');
            return;
        },*/
    }
});
