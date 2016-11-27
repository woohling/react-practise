import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            txt: 'this is the props text from constructor'
        }
    }
    render () {
        return <h1> {this.state.txt} </h1>
        // return React.createElement('h1', null, 'hello world 2');
        // return (
        //     <div>
        //     <h1>hello world</h1>
        //     <bold> Emma Wu</bold>
        //     </div>
        // );
    }
}

App.propTypes = {
    txt: React.PropTypes.string,
    cat: React.PropTypes.number.isRequired
};

App.defaultProps = {
    txt: 'this is the default text',
};

ReactDOM.render(
    <App cat={5}/>,
    /*<App txt="this is the props text" cat={5}/>,*/
    document.getElementById('app')
);
// const App = () => <h1> Hello EggHead </h1>;

export default App;