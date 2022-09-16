// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import './index.css'

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

//Practice
// import React from "react";
// import ReactDom from 'react-dom'
// import App from "./App";
// ReactDom.render(<h2>hello React</h2>,document.getElementById('root'))

// ReactDom.render(
//   <div>
//     <h2>hello React</h2>
//     <p>hello</p>
//     <p>hello</p>
//   </div>
//   , document.getElementById('root'))


//task
// ReactDom.render(
//   <>
//     <h1>Netflix</h1>
//     <ol>
//       <li>Dark</li>
//       <li>Extra curricular</li>
//       <li>My Holo love</li>
//     </ol>
//   </>
//   , document.getElementById('root'))

// let name1 = 'sumair'
// let name2 = 'ul haq'
// ReactDom.render(
//  <h1>hello {name1} {name2}</h1>
//   , document.getElementById('root'))

// let name1 = 2
// let name2 = 4
// ReactDom.render(<>
// <h3>hello {name1+name2}</h3>
// </>,document.getElementById('root')

// let name1 = 'sumair'
// let name2 = 'ul haq'
// ReactDom.render(
//   <h1>{`hello ${name1} ${name2}`}</h1>
//   , document.getElementById('root'))

// let num1 = 10
// let num2 = 5
// ReactDom.render(
//   <h1>{`Total is : ${num1+num2}`}</h1>
//   , document.getElementById('root'))

// let date = new Date()
// ReactDom.render(
//   <>
//   <h1>Date and Time !!</h1>

//   <p>{`Today date is ${date.toLocaleDateString()}`}</p>
//   <p>{`Current time is ${date.toLocaleTimeString()}`}</p>
//   </>
//   ,document.getElementById('root'))

// let img1 = 'https://picsum.photos/200/300'
// let facebook = 'https://www.facebook.com/'
// ReactDom.render(
//   <>
//     <h1 className="red">Gallery</h1>
//     <img src={img1} />
//     <br/>
//     <a href={facebook}>facebook</a>
//   </>
//   ,document.getElementById('root'))

// let img1 = 'https://picsum.photos/200/300'
// let img2 = 'https://picsum.photos/220/300'
// let img3 = 'https://picsum.photos/230/300'
// let facebook = 'https://www.facebook.com/'
// ReactDom.render(
//   <>
//     <h1 style={{color:'red',textShadow:' 2px 2px #FF0000'}}>Gallery</h1>
//     <img src={img1} />
//     <img src={img2} />
//     <img src={img3} />
//     <br/>
//     <a href={facebook}>facebook</a>
//   </>
//   ,document.getElementById('root'))

// function Items(props)
// {
//   return (
//     <>
//     <img src={props.image} />
//   <h2>{props.price}</h2>
//   </>
//   );
// }

// ReactDom.render(<> <h1>hello Sumair</h1> <h2>how are u ?</h2>
//   {/* <Items  image ='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfmns5LQjn5imNgcW3cozyKAtjRy7v-2I2kw&usqp=CAU'
//    price='10M' />
//   <Items image = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqJGqNrVAWTmU6agbE6Q5EXpRixpEoXsbe2NIyRA8qM1O8jx3DQ-AswJvN0pULVG_o64I&usqp=CAU' 
//   price='11M'/>
//   <Items image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsd3wFYcHFlU-kEvuUC-_X4o_lipU4Dy-14FdlvwY8mbCFh9T6iltxQcUVM8jVvtrsUhk&usqp=CAU'
//   price = '16M' /> */}
// </>,document.getElementById('root'))


//Practice2

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import './index.css'

ReactDOM.render(
  <>
    <App/>
  </>, document.getElementById('root'))