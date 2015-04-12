import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
    location: config.locationType,
    todaysDate: function() {
        return (new Date()).toDateString();
    }.property()
});

export default Router.map(function () {
  this.resource('listings', function() {
      this.route("listing");
  });
  this.resource('manage', function() {
      this.route("login");
      this.route("listings");
      this.route("new");
  });
});
