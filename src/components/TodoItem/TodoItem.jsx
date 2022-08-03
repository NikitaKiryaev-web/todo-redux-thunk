import './TodoItem.scss'

function TodoItem(props) {
  return (
    <div className="todo-item">
      <label className="todo-item__checkbox-label">
        <input type="checkbox" />
        <span className="todo-item__checkmark"></span>
      </label>
      <p className="todo-item__text">
        {props.text}
      </p>
      <btn className="todo-item__delete"></btn>
    </div>
  )
}

export default TodoItem
