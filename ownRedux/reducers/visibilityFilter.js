/**
 * Created by EmmaWu on 2016/12/30.
 */

const visibilityFilter = (state='SHOW_ALL', action) => {
    console.log(action);
    switch (action.type) {
        case 'SET_VISIBILITY_FILTER':
            return action.filter;
        default:
            return state;
    }
};

export default visibilityFilter;
