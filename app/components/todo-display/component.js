import Ember from 'ember';

const { computed, set } = Ember;

export default Ember.Component.extend({
  todo: null,
  title: computed.oneWay('todo.title'),
  body: computed.oneWay('todo.body'),

  actions: {
    updateBody(){
      set(this, 'body', 'jk, do this thing. haha! youre stuck doing this thing instead');
    }
  }
});
