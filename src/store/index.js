import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import thunk from 'redux-thunk';
import { todoReducer } from './reducers/todoReducer';
import { inputReducer } from './reducers/inputReducer';

const rootReducer = combineReducers({
  todo: todoReducer,
  input: inputReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);
