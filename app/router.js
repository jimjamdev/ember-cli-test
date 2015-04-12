import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
    location: config.locationType,
    todaysDate: function () {
        return (new Date()).toDateString();
    }.property()
});

export default Router.map(function () {
    this.route('listing', {path: '/listing/:slug'});
    this.resource('manage', function () {
        this.route("login");
        this.route("listings");
        this.route("new");
        this.route('edit', {path: ':listing_id'});
    });
});
