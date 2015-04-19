/* jshint node: true */


module.exports = function (environment) {
    var ENV = {
        modulePrefix: 'ember-cli-test',
        environment: environment,
        baseURL: '/',
        locationType: 'auto',
        firebase: 'https://maltadz-production.firebaseio.com/',
        EmberENV: {
            FEATURES: {
                // Here you can enable experimental features on an ember canary build
                // e.g. 'with-controller': true
            }
        },
        contentSecurityPolicy: {
        'default-src': "'none'",
            'script-src': "'self'",
            'font-src': "'self' http://*.gstatic.com http://*.googleapis.com",
            'connect-src': "'self' wss://*.firebaseio.com http://*.firebaseio.com http://*.googleapis.com",
            'img-src': "'self'",
            'style-src': "'self' 'unsafe-inline' http://*.googleapis.com",
            'media-src': "'self'"
        },

        APP: {
            // Here you can pass flags/options to your application instance
            // when it is created
        },

        // Torri Login authentication
        torii: {
            // a 'session' property will be injected on routes and controllers
            sessionServiceName: 'session',
            providers: {
                'facebook-oauth2': {
                    apiKey:      '870451673026285',
                    redirectUri: 'http://localhost:4200/manage'
                },
                'google-oauth2': {
                    apiKey:      '793909324830-eakdn581je60jj3veuf3cho14rqqspl2.apps.googleusercontent.com',
                    scope: 'profile email',
                    redirectUri: 'http://localhost:4200/manage'
                }

            }
        }
    };





    if (environment === 'development') {
        //ENV.APP.LOG_RESOLVER = true;
        //ENV.APP.LOG_ACTIVE_GENERATION = true;
        //ENV.APP.LOG_TRANSITIONS = true;
        //ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
        //ENV.APP.LOG_VIEW_LOOKUPS = true;
        //ENV.firebase = 'https://maltadz-dev.firebaseio.com/';
    }

    if (environment === 'test') {
        // Testem prefers this...
        ENV.baseURL = '/';
        ENV.locationType = 'none';

        // keep test console output quieter
        ENV.APP.LOG_ACTIVE_GENERATION = false;
        ENV.APP.LOG_VIEW_LOOKUPS = false;

        ENV.APP.rootElement = '#ember-testing';
        //ENV.firebase = 'https://maltadz-dev.firebaseio.com/';

    }

    if (environment === 'production') {
        //ENV.firebase = 'https://maltadz-production.firebaseio.com/';
    }

    return ENV;
};
