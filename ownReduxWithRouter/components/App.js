/**
 * Created by EmmaWu on 2016/12/29.
 */

import React from 'react'
import AddTodo from '../containers/AddTodo';
import VisibilityTodoList from '../containers/VisibilityTodoList';
import Footer from '../components/Footer';

const App = ({params}) => {
    return (
        <div>
            <AddTodo />
            <VisibilityTodoList filter={params.filter || 'SHOW_ALL'}/>
            <Footer />
        </div>
    )
};

export default App;