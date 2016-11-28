import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor() {
        super();
        // this.state = {val: 0};
        // this.state = {
        //     red: 0,
        //     green: 0,
        //     blue: 0
        // };
        this.state = {increasing: false};
        this.update = this.update.bind(this);
    }

    update(e) {
        ReactDOM.render(
            <App val={this.props.val + 1} />,
            document.getElementById('app')
        );
        // this.setState({val : this.state.val + 1});
        // this.setState({
        //     red: ReactDOM.findDOMNode(this.refs.red).value,
        //     blue: ReactDOM.findDOMNode(this.refs.blue).value,
        //     green: ReactDOM.findDOMNode(this.refs.green).value
        // })
    }

    componentWillReceiveProps(nextProps) {
        this.setState({increasing: nextProps.val > this.props.val})
    }

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.val % 5 === 0;
    }

    componentWillMount() {
        console.log('mounting');
        this.setState({m: 2});
    }

    componentDidMount() {
        console.log('mounted');
        // this.inc = setInterval(this.update, 500);
    }

    componentWillUnmount() {
        console.log('bye');
        // clearInterval(this.inc);
    }

    render() {
        console.log(this.state.increasing);
        return <button onClick={this.update}>{this.props.val}</button>;
        /*return <button onClick={this.update}>{this.state.val * this.state.m}</button>;*/
        //return <Button> I <Heart></Heart> React</Button>;
        // return (
            // <div>
            //     <Slider ref="red" update={this.update}/>
            //     {this.state.red}
            //     <br/>
            //     <Slider ref="green" update={this.update}/>
            //     {this.state.green}
            //     <br/>
            //     <Slider ref="blue" update={this.update}/>
            //     {this.state.blue}
            //     <br/>
            // </div>
        // );
        // return React.createElement('h1', null, 'hello world 2');
        // return (
        //     <div>
        //     <h1>hello world</h1>
        //     <bold> Emma Wu</bold>
        //     </div>
        // );
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('prevPops' , prevProps);
    }
}

App.defaultProps = {
    val: 0
};

//
// class Wrapper extends React.Component() {
//     constructor() {
//         super();
//     }
//     mount() {
//         ReactDOM.render(<App/>, document.getElementById('a'));
//     }
//     unmount() {
//         ReactDOM.unmountComponentAtNode(document.getElementById('a'));
//     }
//     render() {
//         return (
//             <div>
//                 <button onClick={this.mount.bind(this)}>Mount</button>
//                 <button onClick={this.unmount.bind(this)}>unMount</button>
//                 <div id="a"></div>
//             </div>
//         )
//     }
// }

class Button extends React.Component {
    render() {
        return <button>{this.props.children}</button>
    }
}

const Heart = () => <span className="glyphicon glyphicon-heart"></span>

class Slider extends React.Component {
    render() {
        return (
            <input type="range" min="0" max="255" onChange={this.props.update}/>
        )
    }
}

const Widget = (props) => {
    return (
        <div>
            <input type="text" onChange={props.update}/>
            <h1>{props.txt}</h1>
        </div>
    )
};

// App.propTypes = {
//     txt: React.PropTypes.string,
//     cat: React.PropTypes.number.isRequired
// };
//
// App.defaultProps = {
//     txt: 'this is the default text',
// };

ReactDOM.render(
    <App cat={5}/>,
    /*<App txt="this is the props text" cat={5}/>,*/
    document.getElementById('app')
);
// const App = () => <h1> Hello EggHead </h1>;
//

export default App;