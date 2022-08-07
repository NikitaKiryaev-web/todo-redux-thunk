/* eslint-disable react-hooks/exhaustive-deps */
import './Input.scss'
// import { changeInputValueAction } from '../../store/inputReducer'
import { addTodoAction } from '../../store/todoReducer'
import { setInputErrorAction } from '../../store/inputReducer'
import {
  useSelector,
  useDispatch,
} from 'react-redux'
import { useEffect, useRef } from 'react'
import { fetchTodo } from '../../asyncActions/todo'

function Input() {
  const dispatch = useDispatch()
  // const inputValue = useSelector(
  //   (state) => state.input.text,
  // )
  const inputErrorText = useSelector(
    (state) => state.input.errorText,
  )

  const inputRef = useRef()

  // function handleChange(e) {
  //   dispatch(
  //     changeInputValueAction(e.target.value),
  //   )
  // }

  function addTodo() {
    if (inputRef.current.value !== '') {
      const todo = {
        title: inputRef.current.value,
        completed: false,
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
  }, [])

  //TODO Переделать инпут на неконтролируемый с помощью useRef()

  return (
    <>
      <div className="todo-add">
        <input
          placeholder="Напишите что-нибудь"
          type="text"
          maxLength="50"
          className="todo-add__input"
          // onChange={handleChange}
          // value={inputValue}
          ref={inputRef}
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
      <button
        type="button"
        aria-label="api-add"
        className="todo-add__btn-api"
        onClick={() => dispatch(fetchTodo())}
      >
        Добавить TODO из API
      </button>
      <hr className="todo-add__divider" />
    </>
  )
}

export default Input
