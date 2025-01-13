import React, { useState } from "react";

const IndexFullUseState = () => {

const [list, setList] = useState([])    
const [message, setMessage] = useState({id:'', text:''})
const [editing, setEditing] = useState({id:'', isEditing:false})

// const messageHandler = (e) => {
//     setMessage ({...message,
        
//         text:e.target.value
//     })
// }

const submitedAdd = (e) => {
    e.preventDefault()
    let newTodo = {
        id:new Date().getTime().toString(),
        text:message.text
    }
    setList([...list, newTodo])
    setMessage({id:'', text:''})
    console.log(list)
}

const deleteHandle = (Id) => {
    const filterdata = list.filter((each) => each.id !== Id)
    setList(filterdata)
}

const editHandle = (Id) => {
    setEditing({
        ...editing,
        id:Id,
        isEditing:true
    })
    const editlist = list.find((each) => each.id === Id)
    setMessage({
        id:editlist.id,
        text: editlist.text
    })
   
   
}

const submitedEdit = (e) => {
    e.preventDefault()
    let newTodolist = list.map((eachitem) => {
    if(eachitem.id === editing.id) {
        return {
           id:editing.id,
           text:message.text
        }
    } else {
        return eachitem
    }

    })

    setList(newTodolist)

    setMessage({id:'', text:''})
    setEditing({id:'', isEditing:false})
    
   
}


    return (
        <div>
        <form>
         <input type="text" placeholder="message" value={message.text} onChange={(e) => setMessage({...message, text:e.target.value})} />
         {editing.isEditing ? (<button type="submit" onClick={submitedEdit}>edit</button>) :
        (<button type="submit" onClick={submitedAdd}>add</button>)}
        </form>
        {list.length === 0 && (<p>No list items</p>)}
        <ul>
        {
            list.map((eachitem) => {
                const {id, text} = eachitem
                return (
                    <li key = {id}>
                        <h3>{text}</h3>
                    <button onClick={() => deleteHandle(id)}>delete</button> 
                    <button onClick={() => editHandle(id)}>edit</button> 
                       
                    </li>
                )
            })
        }
        </ul>
        </div>
    )
}

export default IndexFullUseState