export function initialize(/* container, application */) {
    // application.inject('route', 'foo', 'service:foo');
}

export default {
    name: 'authentication',
    after: 'simple-auth',
    initialize: function(container, application) {
        var applicationRoute = container.lookup('route:application');
        var session          = container.lookup('simple-auth-session:main');
        // handle the session events
        session.on('sessionAuthenticationSucceeded', function() {
            applicationRoute.transitionTo('index');
        });
        session.on('sessionAuthenticationFailed', function() {
            Ember.Logger.debug('Session authentication failed!');
        });
        session.on('sessionInvalidationSucceeded', function() {
            applicationRoute.transitionTo('index');
        });
        session.on('sessionInvalidationFailed', function() {
            Ember.Logger.debug('Session invalidation failed!');
        });
    }
};
