class MyComponent extends React.Component { //is React Component a React default Class????
    constructor(props) { //props get passed through the constructor function
        console.log('This is the constructor running', props)
        super(props)
        this.state = {
            value: 0,
            name: 'Default'
        }
    }
    componentDidMount() {
        console.log('My Component has landed')
    }
    componentDidUpdate() {
        console.log('Thsi component has changes in props or state')
    }
    componentWillUnmount() {
        console.log('This component is being removed from DOM')
    }
    handleClick = () => {
        console.log('Hello Im Handle Click')
        this.setState({
            value: this.state.value + 1,
            name: this.state.name = 'Catherine'
        })
    }
    handleDecreae = () => {
        this.setState({
            value: this.state.value - 1,
            name: this.state.name = 'Nick'
        })
    }
    render() { //Render() gets called when ever the state changes
        console.log('This is the render being called', this.props)

        return <div>
                Hello {this.state.name}
                <h1>{this.state.value}</h1>
                <button onClick={this.handleClick}>Increase</button>
                <button onClick={this.handleDecreae}>Decrease</button>
                </div>
    }
}


ReactDOM.render(<MyComponent />, document.getElementById('root')) //name = 'banana' is props being passed through

