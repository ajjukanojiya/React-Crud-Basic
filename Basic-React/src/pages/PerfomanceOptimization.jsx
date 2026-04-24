import React from "react";

function PerfomanceOptimization() {


    const childComponant=(data)=>{
        console.log('Child Rerendered');
        return (<>
        {  data.map((item) => (<p key={item}>{item}</p>))}
        </>)
    }
  return (
    <div>
      <h1>Performance Optimization</h1>
      <p>Performance optimization in React involves techniques to improve the speed and efficiency of React applications. This can include memoization, code splitting, lazy loading, and optimizing rendering.</p>
    </div>
  );
}

export default PerfomanceOptimization;