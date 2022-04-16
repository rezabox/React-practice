import { Component } from 'react';


class Product extends Component {
    imageUrl = "https://picsum.photos/200"
    state = {
        count : 0,
        product: 'Reza project',
        Car: 'Mustang',
    }
    render() { 
        return(
            <>
            <span className="btn-success m-5" >{this.state.product}</span>
            <span className="m-2 bage bg-primary">{this.state.Car}</span>
            <button onClick={this.handleIncrement} className="btn-success m-5" >;d;fmm</button>
            <button onClick={()=> {this.handleDelete(20)}} className="btn-success m-5" >pojrg</button>
            <button onClick={()=> {this.handleDecrement(99)}} className="btn-success m-5" >delesste</button>
            <img src={this.imageUrl}  alt="" />
            <h1 style={{color:'red',backgroundColor:'blue'}}>Reza is seek</h1>
            </>
        );
    };
    
handleIncrement = ()=> {
     const count = this.state.count;
     this.setState({count:  count+ 1});
     console.log(this.state);
}
handleDelete(item){
     console.log(item);
     console.log('Delete');
}
handleDecrement(num){
    console.log(num);
    console.log('Decrement');
}
}

 
export default Product;