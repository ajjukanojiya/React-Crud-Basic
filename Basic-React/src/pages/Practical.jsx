
import React, { useReducer } from 'react';
function Practical() {


  const startstate={count:4};
  function reducer(state,action){
    switch(action.aj){    
      case "increment":
        return {count: state.count + 1};
      case "decrement":
        return {count: state.count - 1};
      default:
        return state;
    }
  }         

const [state,dispatch]=useReducer(reducer,startstate);



  return (<><div>Practical Component</div>
  <button onClick={() => dispatch({aj: "increment"})}>Increment</button>  {/* onclcik karnge tab ise ander wala function call hoga */}
  <button onClick={() => dispatch({aj: "decrement"})}>Decrement</button>
  <p>Count: {state.count}</p>

  </>)
}

//aa = arr.filter((x) => x % 2 === 0 && x !== 0)  
// const arr = [1, 2, 3, 4, 5, 6, 0];
// const aa = arr.filter((x) => x % 2 === 0 && x !== 0);
// console.log(aa);

//Frequency count
const arr = ['a','b','c','a','b','d']

// const freq = {};
// arr.forEach((x) => {
//   if (freq[x]) {
//     freq[x]++;
//   } else {
//     freq[x] = 1;
//   }
// });

// console.log(freq);
const freq = {};    
arr.forEach(function(x)  {
  if(freq[x]) {
    freq[x]++;
  } else {
    freq[x] = 1;    
  }             
})
console.log(freq);



export default Practical;