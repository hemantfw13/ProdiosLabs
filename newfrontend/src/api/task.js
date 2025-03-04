import axios from "axios";

const API_URL = "https://prodiosbackend-1.onrender.com/task"; 

export const fetchTasks = async () => {
    try {
        const res = await axios.get(API_URL, { withCredentials: true });
        console.log("Fetched tasks:", res.data); 
        return res.data;
    } catch (error) {
        console.error("Error fetching tasks:", error);
        return [];
    }
};

export const createTask = async (task) => {
    try {
        const res = await axios.post(API_URL, task, { withCredentials: true });
        return res.data;
    } catch (error) {
        console.error("Error creating task:", error);
        return null;
    }
};
