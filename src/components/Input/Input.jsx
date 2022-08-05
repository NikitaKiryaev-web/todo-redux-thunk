/* eslint-disable react-hooks/exhaustive-deps */
import './Input.scss'
import { changeInputValueAction } from '../../store/inputReducer'
import { addTodoAction } from '../../store/todoReducer'
import { setInputErrorAction } from '../../store/inputReducer'
import {
  useSelector,
  useDispatch,
} from 'react-redux'
import { useEffect } from 'react'

function Input() {
  const dispatch = useDispatch()
  const inputValue = useSelector(
    (state) => state.input.text,
  )
  const inputErrorText = useSelector(
    (state) => state.input.errorText,
  )

  function handleChange(e) {
    dispatch(
      changeInputValueAction(e.target.value),
    )
  }

  function addTodo() {
    if (inputValue !== '') {
      const todo = {
        text: inputValue,
        isComplete: false,
        id: Date.now(),
      }
      dispatch(addTodoAction(todo))
      dispatch(setInputErrorAction(''))
    } else {
      dispatch(
        setInputErrorAction(
          'Поле не может быть пустым',
        ),
      )
    }
  }

  function keyHandler(event) {
    event.key === 'Enter' && addTodo()
  }

  useEffect(() => {
    document.addEventListener(
      'keydown',
      keyHandler,
    )
    return () => {
      document.removeEventListener(
        'keydown',
        keyHandler,
      )
    }
  }, [inputValue])

  //TODO Переделать инпут на неконтролируемый с помощью useRef()

  return (
    <>
      <div className="todo-add">
        <input
          placeholder="Напишите что-нибудь"
          type="text"
          maxLength="50"
          className="todo-add__input"
          onChange={handleChange}
          value={inputValue}
        />
        <button
          type="button"
          aria-label="Add"
          className="todo-add__btn"
          onClick={addTodo}
        ></button>
      </div>
      <span className="todo-add__error">
        {inputErrorText !== '' && inputErrorText}
      </span>
      <hr className="todo-add__divider" />
    </>
  )
}

export default Input
