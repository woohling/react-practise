/**
 * Created by EmmaWu on 2016/12/30.
 */

const todos = (todos=[], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...todos,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ];
        case 'TOGGLE_TODO':
            return todos.map(todo => {
                if (todo.id === action.id) {
                    todo.completed = !todo.completed;
                    return todo;
                } else {
                    return todo;
                }
            });
        default:
            return todos;
    }
};

export default todos;