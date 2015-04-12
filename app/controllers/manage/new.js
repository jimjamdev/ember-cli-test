import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        addListing: function() {
            var newListing = this.store.createRecord('listing', {
                name: this.get('name'),
                body: this.get('body'),
                price: this.get('price'),
                posted: new Date(),
                active: true,
                enhanced: false,
                slug: this.get('name').dasherize().decamelize()
            });
            newListing.save();
            this.transitionTo('manage.listings');
            /*this.setProperties({
                name: '',
                body: '',
                price: '',
                posted: '',
                active: '',
                enhanced: '',
                slug: ''
            });*/
        }
    }
});
