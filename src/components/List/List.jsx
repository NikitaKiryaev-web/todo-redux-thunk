import './List.scss'
import TodoItem from '../TodoItem/TodoItem'
import { useSelector } from 'react-redux'

function List() {
  const todoItems = useSelector(
    (state) => state.todo.todo,
  )

  return (
    <ul className="list">
      {todoItems.map((todo) => {
        return (
          <li className="list__item">
            <TodoItem
              text={todo.text}
              key={todo.id}
            />
          </li>
        )
      })}
    </ul>
  )
}

export default List
