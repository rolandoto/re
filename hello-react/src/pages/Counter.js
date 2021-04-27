
import React, { useState }  from 'react'


function useIncrease(max) {
    const [counte,setcount] = useState(8)

    if(counte > max ) {
        setcount(0)
    }
    return [counte,setcount]
}

export default function Counter() {

       const[count,setcount] =  useIncrease(4)



      
    return (
        <div>
            <button onClick={() => setcount(count + 1)}>+1</button>
            <button onClick={() => setcount(count - 1)}>-1</button>
            <button onClick={() => setcount(count == count)}>reset</button>
            <h1>{count}</h1>
        </div>
    )
}
