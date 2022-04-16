import { Component } from 'react';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {color: "red"};
    }
    componentDidMount() {
        setTimeout(() => {
           this.setState({color : "blue"})
        },2000)
    }
    render() { 
        return (
            <h1>My favotite color is {this.state.color}</h1>
        );
    }
}
 
export default Header;
