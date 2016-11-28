/**
 * Created by EmmaWu on 2016/11/28.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './todo-list';
import CreateTodo from './create-todo';

const todos = [
    {
        task: 'make react tutorial',
        isCompleted: false
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

    render () {
        return (<div>
            <h1>Todo App</h1>
            <CreateTodo/>
            <TodoList todos={this.state.todos}/>
        </div>);
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);

export default App;
