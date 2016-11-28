/**
 * Created by EmmaWu on 2016/11/28.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './todo-list';
import CreateTodo from './create-todo';
import _ from 'lodash';

const todos = [
    {
        task: 'make react tutorial',
        isCompleted: true
    },
    {
        task: 'eat dinner',
        isCompleted: false
    }
];


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos
        }
    }

    createTask(task) {
        this.state.todos.push({
            task,
            isCompleted: false
        });

        this.setState({todos: this.state.todos});
    }

    toggleTask(task) {
        const foundTodo = _.find(this.state.todos, todo => todo.task === task);
        foundTodo.isCompleted = !foundTodo.isCompleted;
        this.setState({todos: this.state.todos});
    }

    saveTask(newTask, oldTask) {
        const foundTodo = _.find(this.state.todos, todo => todo.task === oldTask);
        foundTodo.task = newTask;
        this.setState({todos: this.state.todos});
    }

    deleteTask(taskToDelete) {
       _.remove(this.state.todos, todo => todo.task === taskToDelete);
        this.setState({todos: this.state.todos});
    }

    render () {
        return (<div>
            <h1>Todo App</h1>
            <CreateTodo createTask={this.createTask.bind(this)} todos={this.state.todos}/>
            <TodoList todos={this.state.todos}
                      toggleTask={this.toggleTask.bind(this)}
                      saveTask={this.saveTask.bind(this)}
                      deleteTask={this.deleteTask.bind(this)}
            />
        </div>);
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);

export default App;
