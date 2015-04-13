import Ember from 'ember';

export default Ember.Route.extend({
    // Meta Title
    titleToken: function(model) {
        return model.get('name');
    }
});
