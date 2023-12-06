/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, useContext, useEffect } from "react";
import { registerRequest, loginRequest, verifyTokenRequest } from "../api/user";
import Cookies from 'js-cookie';

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
    const [loading, setLoading] = useState(true);
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

    const logout = async () => { 
        Cookies.remove("token");
        setIsAuthenticated(false);
        setUser(null);
    };

    useEffect(() => {
        if (errors.length > 0) {
            const timer = setTimeout(() => {
                setErrors([]);
        },5000);
        return () => clearTimeout(timer);
        }
    },[errors])



    useEffect(() => {
        const checkLogin = async () => {
            const cookies = Cookies.get();
            if (!cookies.token) {
                setIsAuthenticated(false);
                setLoading(false);
                return;
            }
            try {
                const res = await verifyTokenRequest(cookies.token);
                console.log(res);
                if (!res.data) return setIsAuthenticated(false);
                setIsAuthenticated(true);
                setUser(res.data);
                setLoading(false);
            } catch (error) {
                setIsAuthenticated(false);
                setLoading(false);
            }
        };
        checkLogin();
    },[])

    return (
        <UserContext.Provider
        value={{
            registerContext,
            user,
            isAuthenticated,
            errors,
            loginContext,
            loading,
            logout
        }}>
            {children}
        </UserContext.Provider>
    );
};