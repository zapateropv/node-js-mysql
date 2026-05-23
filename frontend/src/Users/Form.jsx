import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import useInsert from "../../custom_hooks/useInsert";

const Form = ({getAllUsers}) => {
    const [users, setUsers] = useState({
        firstName: "",
        lastName: "",
        email: "",
        age: "",
        course: "",
    }); 
    const [isEditing, setIsEditing] = useState(false);
    const location = useLocation()
    const id = location.state?.id || {}
    const {insertUser} = useInsert({getAllUsers, setUsers, users})
    useEffect(() => {
          if(location.state?.editing){
         const { firstName, lastName, email, age, course } = location.state;

        setUsers({
            firstName,
            lastName,
            email,
            age,
            course,
        });
//test
          setIsEditing(true);
    }
    },[location.state])

    /*
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
*/
    const updateUser = async () => {
        await axios.put(`http://localhost:8000/${id}`, users)
    }

    return (
        <div className=" flex items-center justify-center bg-gray-100">
            <form
                className="bg-white p-6 rounded-xl shadow-md w-full max-w-md space-y-4"     
                   
            >
                <h2 className="text-xl font-bold text-center text-gray-700">
                    Add User
                </h2>

                <input
                    className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="First name"
                    value={users.firstName}
                    onChange={(e) =>
                        setUsers({ ...users, firstName: e.target.value })
                    }
                />

                <input
                    className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Last name"
                    value={users.lastName}
                    onChange={(e) =>
                        setUsers({ ...users, lastName: e.target.value })
                    }
                />

                <input
                    className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Email"
                    value={users.email}
                    onChange={(e) =>
                        setUsers({ ...users, email: e.target.value })
                    }
                />

                <input
                    className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Age"
                    type="number"
                    value={users.age}
                    onChange={(e) =>
                        setUsers({ ...users, age: e.target.value })
                    }
                />

                <input
                    className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Course"
                    value={users.course}
                    onChange={(e) =>
                        setUsers({ ...users, course: e.target.value })
                    }
                />

                <button
                  
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md transition"
                    onClick={isEditing ? ()=> updateUser() : (e)=> insertUser(e)}
                >
                    {isEditing ? "Update" : "Add User"}
                </button>
               
            </form>
        </div>
    );
};

export default Form;