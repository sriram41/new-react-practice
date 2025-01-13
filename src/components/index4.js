import React, { useState } from "react";

const Index4 = () => {

    const [firsName, setFirstName] = useState('')
    const [password, setPassword] = useState('')

    const submitHandle = (e) => {
        e.preventDefault()
        let useObj = {
            name:firsName,
            password:password
        }

        console.log(useObj)
    }

    return (
        <div>
          <form onSubmit={submitHandle}>
            <input type="text" value={firsName} placeholder="name" onChange={(e) => setFirstName(e.target.value)} />
            <input type="password" value={password} placeholder="name" onChange={(e) => setPassword(e.target.value)} />
            <button type="submit">submit</button>
          </form>
        </div>
    )
}

export default Index4