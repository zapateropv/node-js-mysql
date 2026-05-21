import React from 'react'
import axios from 'axios'

const useInsert = ({getAllUsers, setUsers, users}) => {

      const insertUser = async (e) => {
        try {
            e.preventDefault()
            const user = await axios.post('http://localhost:8000', users)
            
            setUsers({
                firstName: "",
                lastName: "",
                email: "",
                age: "",
                course: "",
            });
             
            getAllUsers()
        } catch (error) {
            alert(error)
        }


    }
  return {insertUser}
}

export default useInsert
