// 2 type of lyfe cycle , different states of a components is called life cycle
// 1. mounting - jananam - if i call a component with in another component ,the component is born

// putting element in the DOM

// 2 UPDATING - any values in the component changes that is mean by updating
// 3 UNMOUND - component dead
// (removing element in the DOM)

// useEffect handle the 3 phase (mounting) 



// import React, { useEffect, useState } from "react";

// const Study = ({soo}) => {
//   const [color, setColor] = useState("red");
// // did mount, did update
//   useEffect(() => {  
//     setTimeout(() => {
//         setColor('blue')
//     },6000);
//   }, []);


// // did update - via props or state change with in this component , did update happens
//   useEffect(() => {  
// console.log(soo);
//   }, [soo]);


// //  component unmount(cleanup function)
// useEffect(() => {  
// return () => {
// console.log('cleanup');
// }
//       }, []);

//   return <>
//   {color}
//   {soo}
//   </>;

// };
// export default Study;



// es6 - modern react is written in es6 (ecma script => es6)
// Classes
// Arrow Functions
// Variables (let, const, var)
// Array Methods like .map() 
// Destructuring
// Modules
// Ternary Operator
// Spread Operator


// === => to check type also with value

import React from 'react'

const Study = () => {
   

//     && - left and right => both left side  and right side true , right side will work
// || - either left or right => either left or right must be true

// const a=2
// const b=3
// // true
// console.log(a<0 || b>0);
// false
// console.log(a<0 && b>0);

// true || true; // t || t returns true
// false || true; // f || t returns true
// true || false; // t || f returns true
// false || 3 === 4; // f || f returns false
// "Cat" || "Dog"; // t || t returns "Cat"
// false || "Cat"; // f || t returns "Cat"
// "Cat" || false; // t || f returns "Cat"
// "" || false; // f || f returns false
// false || ""; // f || f returns ""
// false || varObject; // f || object returns varObject

// a1 = true && true; // t && t returns true
// a2 = true && false; // t && f returns false
// a3 = false && true; // f && t returns false
// a4 = false && 3 === 4; // f && f returns false


// usememo => based on performance 
// values inside usememo will cached => 
    // let v= 5 ,5 will cached 


  return (

    <div>Study</div>
  )
}

export default Study