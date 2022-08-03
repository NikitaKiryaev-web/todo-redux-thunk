const initialState = {
  text: '',
  errorText: '',
}

const CHANGE_INPUT_VALUE = 'CHANGE_INPUT_VALUE'
const SET_INPUT_ERROR = 'SET_INPUT_ERROR'

export const inputReducer = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case CHANGE_INPUT_VALUE:
      return { ...state, text: action.payload }
    case SET_INPUT_ERROR:
      return {
        ...state,
        errorText: action.payload,
      }
    default:
      return state
  }
}

export const changeInputValueAction = (
  payload,
) => ({ type: CHANGE_INPUT_VALUE, payload })

export const setInputErrorAction = (payload) => ({
  type: SET_INPUT_ERROR,
  payload,
})
