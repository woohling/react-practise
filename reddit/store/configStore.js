/**
 * Created by EmmaWu on 2017/1/5.
 */

import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import rootReducer from '../reducers/reducers';

const loggerMiddleware = createLogger();

export default function configureStore(preloadedState) {
    return createStore(
        rootReducer,
        preloadedState,
        applyMiddleware(
            thunkMiddleware,
            loggerMiddleware
        )
    )
}
