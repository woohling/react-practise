/**
 * Created by EmmaWu on 2016/11/28.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './todo.list';

const todos = [
    {
        task: 'make react tutorial',
        isCompleted: false
    },
    {
        task: 'eat dinner',
        isCompleted: false
    }
];

class App extends React.Component {
    constructor() {
        super();
        this.state = {increasing: false};
        this.update = this.update.bind(this);
    }

    update(e) {

    }

    componentWillReceiveProps(nextProps) {
        this.setState({increasing: nextProps.val > this.props.val})
    }

    componentWillMount() {
        console.log('mounting');
        this.setState({m: 2});
    }

    componentDidMount() {
        console.log('mounted');
    }

    componentWillUnmount() {
        console.log('bye');
    }
    render() {
        return <button>Button</button>;
    }
}

ReactDOM.render(<App />, document.getElementById('app'));

export default App;

