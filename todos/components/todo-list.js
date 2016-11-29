/**
 * Created by EmmaWu on 2016/11/28.
 */
import React from 'react';
import TodoListHeader from './todo-list-header';
import TodoListItem from './todo-list-item';
import _ from 'lodash';

export default class TodoList extends React.Component {
    renderItems() {
        const props = _.omit(this.props, 'todos');
        return _.map(this.props.todos, (todo, index) => {
            return <TodoListItem key={index} {...todo} {...props}/>;
        });
        // task = {todo.task} isCompleted = {todo.completed}
    }

    render() {
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