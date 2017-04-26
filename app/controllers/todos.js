import Ember from 'ember';

const { set } = Ember;

export default Ember.Controller.extend({
  todos: null,
  selectedTodo: null,

  actions: {
    pageTodo(todo) {
      set(this, 'selectedTodo', todo);
    }
  }
});
