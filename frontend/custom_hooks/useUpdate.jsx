import axios from "axios";

const useUpdate = ({ users, id, setUsers,getAllUsers,setIsEditing }) => {
  const updateUser = async (e) => {
    e.preventDefault()
    if (!id) return;

    await axios.put(`http://localhost:8000/${id}`, users);
     
            setUsers({
                firstName: "",
                lastName: "",
                email: "",
                age: "",
                course: "",
            });
            setIsEditing(false)
            getAllUsers()
  };

  return { updateUser };
};

export default useUpdate;