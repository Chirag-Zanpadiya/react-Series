import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import React from 'react'

// function MyApp() {

//     return (
  
//       <>
//       <h1>Chirag Zanpadiya... Jay Swaminarayan  </h1>
     
//       </>
//     )
//   }

// behind the react convert the element into this ye mai man ke chal raha hau
// const ReactElement = {
//     type: "a",
//     prop: {
//       href: "https://google.com",
//       target: "_blank",
//     },
  
//     children: "Google Me",
//   };

// 

// const AnotherEle = (
//     <a href="https://google.com">Google Me | ZCA</a>
// );  



// react have own methods to create the eleme
let username = "chirag zanpadiya"
const eleCreatedByReact = React.createElement(
    'a',
    {href : "https:google.com" , target:"_blank"},
    "Google Me | By React create element method",

    // evaluated expression means : yaha pai if | for | foreach isa chu  bhi nahi a sakta
username

)


// react ki render methods ko kuch specifis ways me parameter chahiye hoge eliye hamara customreact wala functin works nai kar raha hai
createRoot(document.getElementById('root')).render(

    // MyApp() at the end myapp ek function hi to hai to use hmm execute kara dete hai 
    // but it is not good practice 
    //  <App/>
    //  <MyApp/>
    
    //reactElement
    // <ReactElement/>

    // react behind the scene element ko aise hi convert karta hai 

    // AnotherEle
    
    eleCreatedByReact

)
