/**
 * Created by EmmaWu on 2017/1/5.
 */

import React, { Component }from 'react';
import { Provider } from 'react-redux';
import configStore from '../store/configStore';
import AsyncApp from './AsyncApp';

const store = configStore();

export default class Root extends Component {
    render() {
        return (
            <Provider store={store}>
                <AsyncApp />
            </Provider>
        )
    }
}
