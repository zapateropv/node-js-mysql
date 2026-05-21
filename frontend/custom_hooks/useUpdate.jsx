import React from 'react'
import axios from 'axios'

const useUpdate = () => {

    const updateUser = async (id) =>{
        await axios.post(`http://localhost:8000/${id}` )
    }

  return {updateUser}
}

export default useUpdate
