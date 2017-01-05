/**
 * Created by EmmaWu on 2016/12/29.
 */

import { combineReducers } from 'redux';
import visibilityFilter from './visibilityFilter';
import todos from './todos';

const TodoApp =  combineReducers({
    visibilityFilter,
    todos
});

export default TodoApp;

