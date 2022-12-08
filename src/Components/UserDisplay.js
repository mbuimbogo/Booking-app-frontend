import React from 'react'
import UsersCard from './UsersCard'

const UserDisplay = ({users, setUsers}) => {
    const userDisp = users && users.map((user) => {
        return(
        <UsersCard 
        key={user.id} 
        setUsers = {setUsers}
        name = {user.name}
        username = {user.user_name}
        id={user.id}
        />
     
     ) })

     const myStyle = {
  //  alignItems: 'center',
      paddingTop: "40px",
      boxShadow: "50px 0px 75px 10px rgb(19 8 73 /13%)",
      borderRadius: "20px",
      width: "100%",
     backgroundColor:"white"
    }

  return (
    <table className="ui celled striped padded table" style ={myStyle}>
      <tbody style ={myStyle}>
        <tr>
          <th>
            <h3 className="ui center aligned header">Name</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Usernname</h3>
          </th>
        </tr>
        {userDisp/* render a list of <UserCard> components here */}
      </tbody>
    </table>
   
    ) 
}

export default UserDisplay