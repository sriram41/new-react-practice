import React, { useEffect, useState } from "react";

const URL = "https://jsonplaceholder.typicode.com/users";

const EffectIndex2 = () => {

    

    const [userData, setUserData] = useState([])
    const [loading, setLoading] = useState(false)
    const [isError, setIsError] = useState({status:false, msg:''})

   const fetchingFunction = async(url) => {
       setLoading(true)
       setIsError({status:false, msg:''})
     try {
        const response = await fetch(url)
     const data = await response.json()
     console.log(data);
     setUserData(data)
     setLoading(false)
    setIsError({status:false, msg:''})
    if(response.status === 404) {
        throw new Error('data not found')
    }
     } catch (error) {
        setLoading(false)
       setIsError({status:true,
         msg:error.message || "something went wrong"})
     }
     

   }


  useEffect (() => {
    fetchingFunction(URL)
  }, [])

  if(loading) {
      return <h1>loading..</h1>
    
  }

  if(isError?.status) {
    return (
        <h1 style={{color:"red"}}>{isError.msg}</h1>
    )
  }

    return (
        <div>
            <ul>
               
                
                {
                 userData.map((eachitem) => {
                    const {id, name, email } = eachitem
                    return (
                        <li key={id} >
                        <h3 >{name}</h3>
                        <h3>{email}</h3>
                        </li>
                    )
                 })
                }
            </ul>

        </div>
    )
}


export default EffectIndex2