import { useState } from "react"

const Counter = () => {
  
const [count , setCount] = useState(10);
  
  const increaseBy =(value: number) =>{
    setCount(count  + value);
  }

    return (
    <>
     <h3>Contador: <small>{count}</small></h3> 

     <div>
      <button onClick={()=>increaseBy(+1)} >+1</button>
      &nbsp;
      <button onClick={()=>increaseBy(-1)}>-1</button>
     </div>
    </>
  )
}

export default Counter
