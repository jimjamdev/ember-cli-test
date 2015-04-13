import Ember from 'ember';

export default Ember.Route.extend({
    titleToken: 'Buy, Sell & Trade in Malta',
    // Tell ember what Model listings will use
    model: function() {
        return this.store.find('listing');
    }
});
