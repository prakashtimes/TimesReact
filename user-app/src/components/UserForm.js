import {useState} from "react";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import { Dropdown } from 'react-bootstrap';
import { DropdownButton } from 'react-bootstrap';
export default function UserForm(){
    const[userform, setUserform]=useState({firstname:"Ram",age:"20"}); // hook function
    
    const handleEvent =function(event){
        console.log(event);
        setUserform({...userform, [event.target.name]:event.target.value})
    }
    const handleEvent2 = function (event) {
        console.log(event);
        setUserform({ ...userform, "skill": event });
        
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
            <h3>Create User form</h3>
            <div className='form-group'>
                <input placeholder='First Name' name='firstname' className='form-control' value={userform.firstname} onChange={handleEvent}>
                </input>
            </div>
            <input placeholder='Age' type='number' name='age' value={userform.age} className='form-control' onChange={handleEvent}></input>
            <label htmlFor='joiningDate'>Joining date:</label>
            <div className='form-group'>
                <input name='joiningDate' type="date" value={userform.joiningDate} className='form-control' onChange={handleEvent}></input>
            </div>
            <DropdownButton
                alignRight
                title="Skill"
                id="dropdown-menu-align-right"
                onSelect={handleEvent2}
                name='skill'
            >
                <Dropdown.Item eventKey="HTML">HTML</Dropdown.Item>
                <Dropdown.Item eventKey="CSS">CSS</Dropdown.Item>
                <Dropdown.Item eventKey="JS">JS</Dropdown.Item>
            </DropdownButton>
            <br />
            <div className='form-group'>
                <Button onClick={save} className='form-control'>Save</Button>
            </div>
            {/* <div className='form-group'>
                <button onClick={save} className='form-control btn-primary'>Save</button>
            </div> */}

        </div>
    )
}