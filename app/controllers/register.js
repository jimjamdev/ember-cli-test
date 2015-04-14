import Ember from 'ember';


export default Ember.Controller.extend({
    actions: {
        createUser: function() {
            var newUser = this.store.createRecord('user', {
                firstName: this.get('firstName'),
                lastName: this.get('lastName'),
                email: this.get('email'),
                password: this.get('password'),
            });
            newUser.save();
            this.setProperties({
                firstName: '',
                lastName: '',
                email: '',
                password: '',
            });
            this.transitionTo('manage');
        }
    }
});
