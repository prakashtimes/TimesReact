import {useState} from "react"
export default function UserForm(){
    const[userform, setUserform]=useState({firstname:"Ram"});
    return (
        <div>
            <h3>Create User</h3>
            <input value={userform.firstname} />
            
        </div>
    )
}