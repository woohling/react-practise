/**
 * Created by EmmaWu on 2016/12/29.
 */

import React from 'react';
import { addTodo } from '../actions/index';
import { connect } from 'react-redux';

let AddTodo = ({dispatch}) => {
    let input;
    return (
        <div>
            <form onSubmit={e => {
                e.preventDefault();
                if (!input.value.trim()) {
                    return
                }
                console.log(input.value);
                dispatch(addTodo(input.value));
                input.value = '';
            }}>
                <input type="text" ref={node => {input=node}}/>
                <button>add todo</button>
            </form>
        </div>
    )
};

AddTodo = connect()(AddTodo);

export default AddTodo;