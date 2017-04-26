# one-way-no-way

This small todo app exists to demonstrate why `computed.oneWay` properties can be dangerous.

### How to use this tool:
  * Start the server
  * Click through the three Todos, noting that the `todo-display` component updates accordingly
  * Click on the `Update Body` button that appears
     * This button overwrites the `title` oneWay computed property
  * Click on a different Todo
  * Note that the updated value still persists, and is not reset when the component receives a different Todo.
