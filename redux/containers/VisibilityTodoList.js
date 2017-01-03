/**
 * Created by EmmaWu on 2016/12/25.
 */

import { connect } from 'react-redux';
import {toggleTodo} from '../actions';
import TodoList from '../components/TodoList';

const getVisibleTodos = (todos, filter) => {
   switch (filter) {
       case 'SHOW_ALL':
           return todos;
       case 'SHOW_COMPLETED':
           return todos.filter(t => t.completed);
       case 'SHOW_ACTIVE':
           return todos.filter(t => !t.completed);
   }
};

const mapStateToPops = (state) => {
    return {
        todos: getVisibleTodos(state.todos, state.visibilityFilter)
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onTodoClick: (id) => {
            dispatch(toggleTodo(id))
        }
    }
};

const VisibleTodoList = connect(
    mapStateToPops,
    mapDispatchToProps
)(TodoList);

export default VisibleTodoList;