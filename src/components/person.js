import  { Component } from 'react';

class Car extends Component { 
  constructor(props) {
    super(props);
    this.state = {
      brand: "Ford",
      model: "Mustang",
      color: "red",
      year: 1964
    };
}
shouldComponentUpdate() {
  return true;
}
componentDidUpdate() {
  setTimeout(() => {
    this.setState({color: 'blue'})
  },2000)
}
changeModel = () => {
    this.setState({model: 'kobra'})
}
  render() { 
    return (
      <div>
        <h1>who live{this.state.brand} in my car</h1>
        <h3>The model of my car is {this.state.model}</h3>
        <h4>my color of my car is {this.state.color}</h4>
        <button type='btn' onClick={this.changeModel}>changeModel</button>
      </div>
    );
  }
}  
export default Car;
