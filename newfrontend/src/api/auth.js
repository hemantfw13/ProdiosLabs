import axios from "axios";

const API_URL = "http://localhost:1010/user"; 

export const loginUser = async (email, password) => {
    const res = await axios.post(`${API_URL}/login`, { email, password }, { withCredentials: true });
    return res.data;
};

export const registerUser = async (name, email, password) => {
    const res = await axios.post(`${API_URL}/signup`, { name, email, password }, { withCredentials: true });
    return res.data;
};

