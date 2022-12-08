import React from 'react'
import { useEffect, useState } from 'react'
import UserDisplay from "./UserDisplay"


const UserList = () => {
  const [users, setUsers] = useState("")

  useEffect(() => {
    fetch("https://restaurant-booking-app-production.up.railway.app/users")
    .then((r) => r.json())
    .then((users) => setUsers(users));
}, [users])

  return (
    <div>
        <UserDisplay setUsers={setUsers} users = {users}/>
    </div>
  )
}

export default UserList