/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, useContext, useEffect } from "react";
import { registerRequest, loginRequest } from "../api/user";

const UserContext = createContext()

export const useUser = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error("useUser must be used within an UserProvider");
    }
    return context;
};

export const UserProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [errors, setErrors] = useState([]);

    const registerContext = async (user) => {
        try {
            const res = await registerRequest(user);
            console.log(res.data);
            setUser(res.data);
            setIsAuthenticated(true);
        } catch (error) {
            if (Array.isArray(error.response.data)){  
                return setErrors(error.response.data);
            } 
            setErrors([error.response.data.message]);
        }
    };

    const loginContext = async (user) => {
        try {
            const res = await loginRequest(user);
            console.log(res)
            setUser(res.data);
            setIsAuthenticated(true);
        } catch (error) {
            if (Array.isArray(error.response.data)){  
                return setErrors(error.response.data);
            } 
            setErrors([error.response.data.message]);
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

    return (
        <UserContext.Provider
        value={{
            registerContext,
            user,
            isAuthenticated,
            errors,
            loginContext
        }}>
            {children}
        </UserContext.Provider>
    );
};