import React from "react";




const Child=React.memo(({ onClick }) => {

  console.log("Child component rendered");   
  return (
    <div>
      <h2>Child Component</h2>
      <button onClick={onClick}>Click Me</button>
    </div>
  );
  
})

function PerfomanceOptimization() {


  const [count ,setCount] = React.useState(0);


  const handleClick =React.useCallback(() => {
    console.log("Button clicked");
  }, [count]);

  //   const handleClick =() => {
  //   console.log("Button clicked");
  // };


  return (   
     <div>
      <h1>Perfomance Optimization</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
     
     <Child onClick={handleClick} />
     {/* <Child  /> */}

    </div>
  );


}

export default PerfomanceOptimization;