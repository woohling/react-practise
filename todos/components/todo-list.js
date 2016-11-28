/**
 * Created by EmmaWu on 2016/11/28.
 */
import React from 'react';
import TodoListHeader from './todo-list-header';
import TodoListItem from './todo-list-item';
import _ from 'lodash';

export default class TodoList extends React.Component {
    renderItems() {
        return _.map(this.props.todos, (todo, index) => {
            console.log(todo);
            return <TodoListItem key={index} {...todo} />;
        });
        // task = {todo.task} isCompleted = {todo.completed}
    }

    render() {
        console.log(this.props.todos);
        return (
            <table>
                <TodoListHeader/>
                <tbody>
                    {this.renderItems()}
                </tbody>
            </table>
        )
    }
};