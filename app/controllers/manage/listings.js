import Ember from 'ember';

export default Ember.ObjectController.extend({
    // Delete Listing
    actions: {
        removeListing: function(listing) {
            var controller = this;
            /// Delete and go to manage/listings
            listing.destroyRecord().then(function() {
                controller.transitionToRoute('manage.listings');
            });
        }
    }
});
