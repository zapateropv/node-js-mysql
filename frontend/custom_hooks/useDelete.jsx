import React from 'react'
import axios from 'axios'

const useDelete = () => {

    
    const deleteUser = async(id) => {
        try {
             const res = await axios.delete(`http://localhost:8000/${id}`)
             return true;
        } catch (error) {
            alert(error)
            return false
        }
       
    }

  return {deleteUser}
}

export default useDelete
