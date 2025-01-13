import React, { useEffect, useState } from "react";
// total value
const EffectIndex1 = () => {

    const [count, setCount] = useState(0)

    useEffect(() => {
        console.log('hello the count current', count);
        
    }, [count])

    return (
        <div>
       <button onClick={() => setCount((perv) =>perv+1)}>increment {count}</button>
        </div>
    )
}

export default EffectIndex1
