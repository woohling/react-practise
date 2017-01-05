/**
 * Created by EmmaWu on 2016/12/29.
 */

import React from 'react';
import { createStore } from 'redux';
import { render } from 'react-dom';

import TodoApp from './reducers';
const store = createStore(TodoApp);

import Root from './components/Rooter';

render(
    <Root store={store}></Root>,
    document.getElementById('app')
);





