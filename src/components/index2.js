import React, { useState } from "react";
import initialarray from "./data";

const Index2 = () => {

    const [data, setData] = useState(initialarray)

    const deleteHandle = (Id) => {
        const filterdata = data.filter((eachitem) => eachitem.id !== Id)
        setData(filterdata)
    }

    return (
        <div>
            <ul>
                {data.map((eachitem) => {
                    const {id, firstName, LastName} = eachitem 
                    return (
                        <li key={id}>
                            <p>{firstName}</p>
                            <p>{LastName}</p>
                            <button onClick={() => deleteHandle(id)}>delete</button>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Index2