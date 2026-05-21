import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import useDelete from '../../custom_hooks/useDelete'
import { useNavigate } from "react-router-dom";

const User = ({ user,setUsers }) => {

   const navigate = useNavigate()
   const {deleteUser} = useDelete()

   const handleDelete = async (id) => {
        const success = await deleteUser(id);
         if (success) {
      setUsers((prev) => prev.filter((item) => item.id !== id));
    }
   }

   const handleUpdate = (id, firstName, lastName, email, age, course) => {
    
    navigate('/', {
        state: {
            id, firstName, lastName, email, age, course,
            editing: true
        },
        
    })
   }
   
    return (
        <div className="p-6">
            <div className="overflow-x-auto">
                <table className="min-w-full border border-gray-200 shadow-md rounded-lg overflow-hidden">


                    <thead className="bg-gray-100 text-gray-700 uppercase text-sm">
                        <tr>
                            <th className="px-4 py-3 text-left">Number</th>
                            <th className="px-4 py-3 text-left">First Name</th>
                            <th className="px-4 py-3 text-left">Last Name</th>
                            <th className="px-4 py-3 text-left">Email</th>
                            <th className="px-4 py-3 text-left">Age</th>
                            <th className="px-4 py-3 text-left">Course</th>
                            <th className="px-4 py-3 text-left">Action</th>
                        </tr>
                    </thead>


                    <tbody className="text-gray-700 text-sm">
                        {user.map((item, index) => (
                            <tr
                                key={index}
                                className="border-t hover:bg-gray-50 transition"
                            >
                                <td className="px-4 py-3">{index + 1}</td>
                                <td className="px-4 py-3">{item.firstName}</td>
                                <td className="px-4 py-3">{item.lastName}</td>
                                <td className="px-4 py-3">{item.email}</td>
                                <td className="px-4 py-3">{item.age}</td>
                                <td className="px-4 py-3">{item.course}</td>

                                <td className="px-4 py-3 flex gap-2">
                                    <button className="bg-blue-500 cursor-pointer hover:bg-blue-600 text-white px-3 py-1 rounded-md text-xs"
                                    onClick={()=> handleUpdate(item.id, item.firstName,item.lastName, item.email, item.age,item.course )}>
                                        Edit
                                    </button>

                                    <button className="bg-red-500 cursor-pointer hover:bg-red-600 text-white px-3 py-1 rounded-md text-xs"
                                    onClick={()=> handleDelete(item.id)}>
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>

                </table>
            </div>
        </div>
    )
}

export default User
