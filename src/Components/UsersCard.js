import React from 'react'

const UsersCard = ({name,username, users, id,setUsers}) => {
 

    function handleDeleteUser(){
    fetch (` https://restaurant-booking-app-production.up.railway.app/users/${id}`, {
      method: "DELETE"
    })
    .then((r)=> r.json)
    .then(() => {
      const availableUsers = users.filter((user) => {
        return user.id !== id
      })
      setUsers(availableUsers)
    })
}
    
  return (
    
      <tr style={{paddingLeft: "10px"}}>
        <td>{name}</td>
        <td>{username}</td>
        <td><button className="btn btn secondary" onClick={handleDeleteUser}>Delete this user</button></td>
      </tr>
        
   
  )
}

export default UsersCard