/**
 * Created by EmmaWu on 2016/11/28.
 */

import React from 'react';

export default class CreateTodo extends React.Component {
    render() {
        console.log(this.props.todos);
        return (
            <form>
                <input type="text" placeholder="what do I need to do" />
                <button>create</button>
            </form>
        )
    }
};