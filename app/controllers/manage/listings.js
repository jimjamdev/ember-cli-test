import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        removeListing: function(listing) {
            console.log('removeListing', listing);
            listing.destroyRecord();
        }
    }
});
