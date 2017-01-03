/**
 * Created by EmmaWu on 2016/12/29.
 */

import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos, onTodoClick }) => {
    return (
        <ul>
            {todos.map(todo => <Todo key={todo.id} {...todo} onClick={() => onTodoClick(todo.id)}></Todo>)}
        </ul>
    );
};

export default TodoList;