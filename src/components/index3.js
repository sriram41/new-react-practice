import React, { useState } from "react";

const Index3 = () => {

    const [toggle, setToggle] = useState(false)

   
    

    return (
        <div>
         <button onClick={() => setToggle(!toggle)}> {toggle ? "hide" : "show"}</button>
           {toggle && ( <div> loermdfdsjlkfj jeworj0ewjfesfoijsao kdsmcklsmdcnsnf
         sdfsdofjoiejfjw jfodjfojsdkfpsfkl jjeofjwejjofj jwofejewfowa=fl;sdckfojp </div>)}
         {toggle ? ( <div> loermdfdsjlkfj jeworj0ewjfesfoijsao kdsmcklsmdcnsnf
            sdfsdofjoiejfjw jfodjfojsdkfpsfkl jjeofjwejjofj jwofejewfowa=fl;sdckfojp </div>):(<p>text is hidden</p>)}
        </div>
    )
}

export default Index3