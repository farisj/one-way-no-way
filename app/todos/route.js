import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return [
      { title: 'Todo A', body: 'Do Thing A'},
      { title: 'Todo B', body: 'Do Thing B'},
      { title: 'Todo C', body: 'Do Thing C'},
    ]
  },

  setupController(controller, model) {
    controller.setProperties({
      todos: model
    })
  }
});
