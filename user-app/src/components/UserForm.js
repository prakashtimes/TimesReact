import {useState} from "react"
export default function UserForm(){
    const[userform, setUserform]=useState({firstname:"Ram",age:"20"}); // hook function
    
    const handleEvent =function(event){
        console.log(event);
        setUserform({...userform, [event.target.name]:event.target.value})
    }
    
    const save = function(event){
        console.log(userform);
    }
    return (
        <div>
            <h3>Create User</h3>
            <input name='firstname' value={userform.firstname} onChange={handleEvent} />
            <input  name='age' value={userform.age} onChange={handleEvent} />
            <button onClick={save}>Save</button>
        </div>
    )
}