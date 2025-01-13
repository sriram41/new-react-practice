import React, { useState, useSyncExternalStore } from "react";


const FinalIndex = () => {

    const [list, setList] = useState([])
    const [message, setMessage] = useState({id:'',text:''})
    const [editing, setEditing] = useState({id:'', isediting:false})
    
 const addSubmitHandler = (e) => {
    e.preventDefault()
    let todo = {
        id:new Date().getTime().toString(),
        text:message.text
    }
    
    setList([...list, todo])
    setMessage({id:'',text:''})
 }

 const deleteHandler = (Id) => {
    const filterdata = list.filter((eachitem) => eachitem.id !== Id)
setList(filterdata)
 }


 const editHandler = (id) => {
    setEditing({...editing,
        id:id,
        isediting:true
    })

    const newEdit = list.find((each) => each.id === id)

    setMessage({...message,
        id:newEdit.id,
        text:newEdit.text
    })
 }

 const editSubmitHandler = (e) => {
    e.preventDefault()
    const newtodo = list.map((eachitem) => {
        if(eachitem.id === editing.id) {
            return {
                id:editing.id,
                text:message.text
            }
        } else {
            return eachitem
        }
    })

    setList(newtodo)
    setMessage({id:'',text:''})
    setEditing({id:'', isediting:false})
    
 }

    return (
        <div>
            <form> 
                <input type="text" value={message.text} placeholder="message" onChange={(e) => setMessage({...message, text:e.target.value})} />
            {editing.isediting?(<button type="submit" onClick={editSubmitHandler}>edit</button>):
            (<button type="submit" onClick={addSubmitHandler}>add</button>)}
            </form>
            <ul>
                {list.map((eachitem) => {
                    const {id, text} = eachitem
                    return (
                        <li key={id}>
                            <h3>{text}</h3>
                            
                <button type="button" onClick={() => deleteHandler(id)}>delete</button>
                <button type="button" onClick={() => editHandler(id)}>edit</button>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default FinalIndex