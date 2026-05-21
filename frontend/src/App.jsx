import User from "./Users/User"
import Form from "./Users/Form"
import { useState, useEffect } from "react"
import axios from "axios"

function App() {
 
    const [user, setUsers] = useState([])
    const getAllUsers = async () => {
            const getuser = await axios.get('http://localhost:8000')
            setUsers(getuser.data)
            console.log(getuser.data)
        }


    useEffect(() => {
      
        getAllUsers()
    }, [])

  return (
    <>
     <Form getAllUsers={getAllUsers}/>
     <User user={user} setUsers={setUsers} />
       
    </>
  )
}

export default App
