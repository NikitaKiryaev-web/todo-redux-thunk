import { addTodoApiAction } from '../store/todoReducer'

export const fetchTodo = () => {
  return function (dispatch) {
    fetch(
      'https://jsonplaceholder.typicode.com/todos',
    )
      .then((res) => res.json())
      .then((todoList) =>
        dispatch(addTodoApiAction(todoList)),
      )
  }
}
