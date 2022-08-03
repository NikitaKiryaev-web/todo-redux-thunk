const defaultState = {
  todo: [],
}

const ADD_TODO = 'ADD_TODO'
const REMOVE_TODO = 'REMOVE_TODO'
const ADD_TODO_API = 'ADD_TODO_API'
const COMPLETE_TODO = 'COMPLETE_TODO'

export const todoReducer = (
  state = defaultState,
  action,
) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todo: [...state.todo, action.payload],
      }

    case REMOVE_TODO:
      return {
        ...state,
        todo: state.todo.filter(
          (todoItem) =>
            todoItem.id !== action.payload,
        ),
      }

    case ADD_TODO_API:
      return {
        ...state,
        todo: [...state.todo, action.payload],
      }

    case COMPLETE_TODO:
      return {
        ...state,
        todo: state.todo.map((todoItem) => {
          return todoItem.id === action.payload
            ? {
                ...todoItem,
                isComplete: true,
              }
            : todoItem
        }),
      }

    default:
      return state
  }
}

export const addTodoAction = (payload) => ({
  type: ADD_TODO,
  payload: payload,
})
export const removeTodoAction = (payload) => ({
  type: REMOVE_TODO,
  payload: payload,
})
export const addTodoApiAction = (payload) => ({
  type: ADD_TODO_API,
  payload: payload,
})
export const completeTodoAction = (payload) => ({
  type: COMPLETE_TODO,
  payload: payload,
})