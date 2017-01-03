/**
 * Created by EmmaWu on 2016/12/24.
 */

import React from 'react';
import Footer from './Footer';
import AddToDo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibilityTodoList';

const App = () => {
    return <div>
        <AddToDo />
        <VisibleTodoList />
        <Footer />
    </div>
};

export default App;