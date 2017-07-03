import { combineReducers } from 'redux';
import PostsReducer from './reducer_todo';
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
    todolist: PostsReducer,
    form: formReducer
});

export default rootReducer;
