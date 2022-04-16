import { Component } from "react";



function Car() {
    return ( <h2>hi my car</h2> );
}

function Garage() {
    return ( 
        <>
          <h1>whats this</h1>
          <Car/>
        </>
     );
}

export default Garage;
