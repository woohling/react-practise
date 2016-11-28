/**
 * Created by EmmaWu on 2016/11/28.
 */

import React from 'react';

export default class CreateTodo extends React.Component {
    constructor() {
        super();
        this.state = {
            error: null
        }
    }

    handleCreate(e) {
        e.preventDefault();

        const task = this.refs.createInput.value;
        const validateInput = this.validateInput(task);

        if (validateInput) {
            this.setState({err: validateInput});
            return;
        }

        this.setState({err: null});

        this.props.createTask(task);
        this.refs.createInput.value = '';
    }

    validateInput(task) {
        if (!task) {
            return 'Please enter a task';
        } else if (_.find(this.props.todos, todo => todo.task === task)) {
            return 'Task already exists';
        } else {
            return null;
        }
    }

    renderErr() {
        if (!this.state.err) {
            return null;
        }
        return <div style={{color: 'red'}}>{this.state.err}</div>
    }

    render() {
        return (
            <form onSubmit={this.handleCreate.bind(this)}>
                <input type="text" placeholder="what do I need to do" ref="createInput" />
                <button>create</button>
                {this.renderErr()}
            </form>
        )
    }
};