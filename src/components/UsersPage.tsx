import axios from 'axios';
import React, { useEffect } from 'react'

const UsersPage = () => {

    useEffect(()=>{

        axios.get('https://reqres.in/api/users?page=2')
        .then( resp => console.log(resp) );
        

       /* fetch('https://reqres.in/api/users?page=2')
            .then(resp => resp.json())
            .then( data => console.log(data));
    */          
   

        })


  return (
    <div>
      
    <h3>Usuarios</h3>

    <table>
    <thead>
    <tr>

    <th>Avatar</th>
    <th>Nombre</th>
    <th>Email</th>
    </tr>
    </thead>
    <tbody>
        <tr>
            <td>avatar</td>
            <td>nombre</td>
            <td>email</td>
        </tr>
    </tbody>
    </table>


    </div>
  )
}

export default UsersPage