import Ember from 'ember';


export default Ember.Controller.extend({
    actions: {
        createUser: function() {
            var newUser = this.store.createRecord('user', {
                email: this.get('name'),
            });
            newUser.save();
            this.setProperties({
                email: '',
                password: '',
            });
            this.transitionTo('manage');
        }
    }
});