import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);



    const login = async (email, password) => {
        const res = await axios.post("https://prodiosbackend-1.onrender.com/user/login", { email, password }, { withCredentials: true });
        setUser(res.data.user);
    };


    return (
        <AuthContext.Provider value={{ user, login }}>
            {children}
        </AuthContext.Provider>
    );
};
