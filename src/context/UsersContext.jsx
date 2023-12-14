/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useState } from "react"
import { getUsersRequest, deleteUserRequest, updateProfileRequest,getProfileRequest } from "../api/user";

const UsersContext = createContext();

export const useUsers = () => {
    const context = useContext(UsersContext);
    if(!context) {
        throw new Error("useUsers must be used within a useUsersContext");
    }
    return context;
}


export function UsersProvider  ( { children })  {

    const [users, setUsers] = useState([]);
    const [errors, setErrors] = useState([]);

    const getUsers = async () => {
        try {
            const res = await  getUsersRequest()
            const users = res.data;
            setUsers(users);
            console.log(users);
        } catch (error) {
            console.error("Error fetching user:", error);
        }
    };

    const getUser = async(id) => {
        try {
            const res = await getProfileRequest(id);
            const user = res.data;
            return user;
        } catch (error) {
            console.log(error)
        }
    };

    const deleteUser = async(id) => {
        try {
            const res = await deleteUserRequest(id);
            if (res.status === 200) setUsers(users.filter((user) => user._id !== id));
        } catch (error) {
            console.log(error);
        }
    };


    const updateUser = async(id, user) => {
        try {
            const res = await updateProfileRequest(id, user);
            const updateUser = res.data;
            setUsers((prevUsers) =>
                prevUsers.map((c) => (c._id === updateUser._id ? updateUser : c))
            );
        } catch (error) {
            console.log("Error updating car:", error);
        }
    };

    useEffect(() => {
        if (errors.length > 0) {
            const timer = setTimeout(() => {
                setErrors([]);
        },5000);
        return () => clearTimeout(timer);
        }
    },[errors])

    return(
        <UsersContext.Provider value={{
            users,
            getUsers,
            deleteUser,
            updateUser,
            getUser,
            errors,
        }}>
            {children}
        </UsersContext.Provider>
    )
}