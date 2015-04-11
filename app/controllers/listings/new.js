import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        addListing: function() {
            var newListing = this.store.createRecord('listing', {
                name: this.get('name'),
                body: this.get('body')
            });
            newListing.save();
            this.setProperties({
                name: '',
                body: ''
            });
        }
    }
});
