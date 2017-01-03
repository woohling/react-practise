/**
 * Created by EmmaWu on 2016/12/29.
 */

import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { render } from 'react-dom';

import TodoApp from './reducers';
import App from './components/App';

const store = createStore(TodoApp);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);





