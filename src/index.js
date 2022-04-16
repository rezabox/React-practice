import React from "react";
import ReactDOM, { render } from "react-dom";
import { useState,useMemo } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Product from "./components/product";
// import Message from './components/person'
// import Garage from "./app";
// import Car from './components/person';
// import Header from './practice';
// import './Btn.css';
// import Todos from "./Todos"
import './Create.scss'

// const App = () => {
//   const [count, setCount] = useState(0);
//   const [todos, setTodos] = useState([]);
//   const calculate = useMemo(() => expensiveCalculation(count), [count]);

//   const increment = () => {
//     setCount((c) => c +1);
//   }
//   const addTodo = () => {
//     setTodos((t) => [...t,"New todo"]);
//   };

//   return(
//     <>
//         <h2>My Todos</h2>
//          {todos.map((todo,index) =>{
//             return <p key={index}>{todo}</p>
//          })}
//          <button onClick={addTodo}>Add Todo</button>
//       <hr/>
//        <div>
//          count: {count}
//          <button type="btn" onClick={increment}>+</button>
//          <h2>Express Calculation</h2>
//          {calculate}
//        </div>       
//     </>
//   )
// }
// const expensiveCalculation = (num) => {
//   for(let i = 0; i < 1000000; i++){
//       num += 1;
//   }
//   return num;
// }

ReactDOM.render(<Product  /> , document.querySelector('#root'));

