import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        /*authenticate: function() {
            var data = this.getProperties('identification', 'password');
            return this.get('session').authenticate('simple-auth-authenticator:oauth2-password-grant', data);
        },*/

        loginFacebook: function() {
            this.get('session').authenticate('simple-auth-authenticator:torii', 'facebook-oauth2').open('facebook-oauth2').then(function() {
                this.transitionTo('manage');
            }, function(error) {
                console.log('auth failed '+error.message);
            });
        },

        loginGoogle: function() {
            this.get('session').authenticate('simple-auth-authenticator:torii', 'google-oauth2').open('google-oauth2').then(function() {
                this.transitionTo('manage');
            }, function(error) {
                console.log('auth failed '+error.message);
            });
        },

        logout: function() {
            this.get('session').invalidate();
        }
    }
});
