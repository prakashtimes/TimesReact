import { useEffect, useState } from "react"
import UserForm from './UserForm'
// import Userlist from './Userlist';
import axios from "axios";


export default function UserList(){
    const[users,setUsers] =useState([]);
    useEffect(() => {
        if(users.length !=0){
            return;
        }
        console.log('called......................');
        const promise = axios.get("http://localhost:4200/users");
        promise.then( (response) => setUsers(response.data))
    })
    return (

        <div>
            <table className="table table-bordered table-hover table-responsive">
                <thead>
                    <tr>
                        <td> FirstName</td>
                        <td>Age</td>
                    </tr>

                </thead>
                <tbody>
                    {users.map((user, index) => <tr>
                            <td>{user.firstname}</td>
                            <td>{user.age}</td>
                        </tr>
                    )}
                </tbody>
                <tbody>
                <tr>
                    <td>Ravi </td>
                    <td>23</td>
                </tr>
            </tbody>
            </table>
           
        </div>
    )
}