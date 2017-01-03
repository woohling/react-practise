/**
 * Created by EmmaWu on 2016/12/29.
 */

import React from 'react';
import { connect } from 'react-redux';
import TodoList from '../components/TodoList';
import { toggleTodo } from '../actions';

function filterTodos(state) {
    if (state.visibilityFilter === 'SHOW_ALL') {
        return state.todos.filter(t => t);
    } else if (state.visibilityFilter === 'SHOW_ACTIVE') {
        return state.todos.filter(t => !t.completed);
    } else if (state.visibilityFilter === 'SHOW_COMPLETED') {
        return state.todos.filter(t => t.completed);
    }
    return state.todos;
}

const mapStateToProps = (state, ownProps) => {
    return {
        todos: filterTodos(state)
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onTodoClick: (id) => {
            dispatch(toggleTodo(id))
        }
    }
};

const VisibilityTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);

export default VisibilityTodoList;

