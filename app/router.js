import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
    location: config.locationType
});

export default Router.map(function () {
  this.route('listing', {path: '/listing/:listing_id'});
  this.resource('manage', function () {
      this.route("listings");
      this.route("new");
      this.route('edit', {path: ':listing_id'});
  });
  this.route("login");
  this.route('register');
});
