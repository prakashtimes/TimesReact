import {useState} from "react";
import axios from "axios";
export default function UserForm(){
    const[userform, setUserform]=useState({firstname:"Ram",age:"20"}); // hook function
    
    const handleEvent =function(event){
        console.log(event);
        setUserform({...userform, [event.target.name]:event.target.value})
    }
    
    const save = function(event){
        console.log(userform);
        const promise= axios.post("http://localhost:4200/users", userform);
        promise.then(function(response){
            console.log(response);
        })
    }
    return (
        <div>
            <h3>Create User</h3>
            <input placeholder='First Name' name='firstname' value={userform.firstname} onChange={handleEvent} />
            <input  placeholder='Age' type='number' name='age' value={userform.age} onChange={handleEvent} />
            Joining Date:
            <input name='date' type="date" value={userform.date} onChange={handleEvent}/>
            <button onClick={save}>Save</button>
        </div>
    )
}