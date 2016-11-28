/**
 * Created by EmmaWu on 2016/11/28.
 */
import React from 'react';

export default class TodoListItem extends React.Component {
    constructor() {
        super();

        this.state = {
            isEditing: false
        };
    }

    onEditClick() {
        this.setState({isEditing: true});
    }

    renderActionSection() {
        if (this.state.isEditing) {
            return (
                <td>
                    <button>Save</button>
                    <button>Cancel</button>
                </td>
            );
        }

        return (
            <td>
                <button onClick={this.onEditClick.bind(this)}>Edit</button>
                <button>Delete</button>
            </td>
        );
    }

    render() {
        return (
            <tr>
                <td>{this.props.task}</td>
                {this.renderActionSection()}
            </tr>
        )
    }
}