// import logo from './logo.svg';
// import './App.css';
// import Headings from './Headings'


// function App() {
//   return (
//     <>
//    <Headings/>
//    </>
//   );
// }

// export default App;


//Practice 2

import React from "react";
import List from "./List";
import { Heading , course } from "./Heading";
import{add , sub ,mul,div} from "./Calculator"
function App()
{
    return(
        <>
        <Heading />
        <List />
        <List />
       <h1>{course}</h1>
       <p>sum of two number is {add(2,4)} </p>
       <p>sub of two number is {sub(5,2)} </p>
       <p>mul of two number is{mul(4,4)} </p>
       <p>div of two number is {div(2,3)} </p>
        </>
    )
}
export default App;
