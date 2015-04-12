import Ember from 'ember';

export default Ember.Route.extend({
    titleToken: 'Sell & Buy Online',
    // Tell ember what Model listings will use
    model: function() {
        return this.store.find('listing');
    }
});
