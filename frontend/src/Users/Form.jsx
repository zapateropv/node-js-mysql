import React, { useState } from "react";
import axios from "axios";

const Form = () => {
    const [users, setUsers] = useState({
        firstName: "",
        lastName: "",
        email: "",
        age: "",
        course: "",
    });


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
             
        } catch (error) {
            alert(error)
        }


    }

    return (
        <div className=" flex items-center justify-center bg-gray-100">
            <form
                className="bg-white p-6 rounded-xl shadow-md w-full max-w-md space-y-4"
                onSubmit={insertUser}
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
                    type="submit"
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md transition"
                >
                    Add User
                </button>
            </form>
        </div>
    );
};

export default Form;