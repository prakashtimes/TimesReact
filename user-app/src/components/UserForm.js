import {useState} from "react"
export default function UserForm(){
    const[userform, setUserform]=useState({firstname:"Ram",age:"20"}); // hook function
    
    const handleEvent =function(event){
        console.log(event);
        setUserform({...userform, firstname:event.target.value})
    }
    const handleEventforAge =function(event){
        console.log(event);
        setUserform({...userform, age:event.target.value})
    }
    const save = function(event){
        console.log(userform);
    }
    return (
        <div>
            <h3>Create User</h3>
            <input value={userform.firstname} onChange={handleEvent} />
            <input value={userform.age} onChange={handleEventforAge} />
            <button onClick={save}>Save</button>
        </div>
    )
}