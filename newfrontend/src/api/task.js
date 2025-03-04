import axios from "axios";

const API_URL = "http://localhost:1010/task"; // Ensure correct API path

export const fetchTasks = async () => {
    try {
        const res = await axios.get(API_URL, { withCredentials: true });
        console.log("Fetched tasks:", res.data); // Debugging log
        return res.data;
    } catch (error) {
        console.error("Error fetching tasks:", error);
        return []; // Return empty array to prevent crashes
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
