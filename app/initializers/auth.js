import Ember from "ember";
// Since I've defined my url in environment.js I can do this
import ENV from '../config/environment';
var ref = new window.Firebase(ENV.firebase);

export function initialize(container, app) {
    // session object is nested here as we need access to the container to get the store
    var session = Ember.Object.extend({

        // initial state
        authed: false,

        // get access to the ember data store
        store: container.lookup('store:main'),

       revokeAppAccess: function() {
            if (this.get('authData')) {
                var url, params;
                switch (this.get('authData.provider')) {
                    case "google":
                        url 	= 'https://accounts.google.com/o/oauth2/revoke';
                        params 	= { token: this.get('authData.google.accessToken') };
                        break;
                    case "facebook":
                        url 	= 'https://graph.facebook.com/v2.2/me/permissions';
                        params 	= { access_token: this.get('authData.facebook.accessToken'), method: 'delete' };
                        break;
                    default:
                        return;
                }
                Ember.$.ajax(url, {
                    type: 'POST',
                    data: params,
                    crossDomain: true,
                    dataType: 'jsonp',
                    contentType: 'application/json'
                });
            }
        },

        init: function() {
            // on init try to login
            ref.onAuth(function(authData) {
                // Not authenticated
                if (!authData) {
                    this.set('authed', false);
                    this.set('authData', null);
                    this.set('user', null);
                    return false;
                }

                // Authenticated
                this.set('authed', true);
                this.set('authData', authData);
                this.afterAuthentication(authData.uid);
            }.bind(this));
        },

        // Call this from your Ember templates
        login: function(provider, options) {
            this._loginWithPopup(provider, options);
        },

        // Call this from your Ember templates
        logout: function() {
            // Uncommenting the line below will make the user able to switch account used
            // without leaving your webpage. The way I see it, that is the main goal of
            // having a logout button at all.
            // this.revokeAppAccess();
            ref.unauth();
        },

        // Default login method
        _loginWithPopup: function(provider, options) {
            var _this = this;
            Ember.debug('logging in with popup ' + provider + " " + options);
            ref.authWithOAuthPopup(provider, function(error, authData) {
                if (error) {
                    if (error.code === "TRANSPORT_UNAVAILABLE") {
                        // fall-back to browser redirects, and pick up the session
                        // automatically when we come back to the origin page
                        _this._loginWithRedirect(provider, options);
                    }
                } else if (authData) {
                    // we're good!
                    // this will automatically call the on ref.onAuth method inside init()
                }
            }, options);
        },

        // Alternative login with redirect (needed for Chrome on iOS)
        _loginWithRedirect: function(provider, options) {
            ref.authWithOAuthRedirect(provider, function(error, authData) {
                if (error) {

                } else if (authData) {
                    // we're good!
                    // this will automatically call the on ref.onAuth method inside init()
                }
            }, options);
        },

        // Runs after authentication
        // It either sets a new or already exisiting user
        afterAuthentication: function(userId) {
            var _this = this;

            // See if the user exists using native Firebase because of EmberFire problem with "id already in use"
            ref.child('users').child(userId).once('value', function(snapshot) {
                var exists = (snapshot.val() !== null);
                userExistsCallback(userId, exists);
            });

            // Do the right thing depending on whether the user exists
            function userExistsCallback(userId, exists) {
                if (exists) {
                    _this.existingUser(userId);
                } else {
                    _this.createUser(userId);
                }
            }
        },

        // Existing user
        existingUser: function(userId) {
            this.store.find('user', userId).then(function(user) {
                this.set('user', user);
            }.bind(this));
        },

        // Create a new user
        createUser: function(userId) {
            var _this = this;

            this.get('store').createRecord('user', {
                id: userId,
                provider: this.get('authData.provider'),
                name: this.get('authData.facebook.displayName') || this.get('authData.google.displayName'),
                email: this.get('authData.facebook.email') || this.get('authData.google.email'),
                timestamps: [new Date().getTime()],
                stageId: 0
            }).save().then(function(user){

                // Proceed with the newly create user
                _this.set('user', user);
            });
        },

        // This is the last step in a successful authentication
        // Set the user (either new or existing)
        afterUser: function(user) {
            this.set('user', user);
        }
    });

    // Register and inject the 'session' initializer into all controllers and routes
    app.register('session:main', session);
    app.inject('route', 'session', 'session:main');
    app.inject('controller', 'session', 'session:main');
}

export default {
    name: 'session',
    after: 'store', // Run the initializer after the store is ready

    initialize: initialize
};
