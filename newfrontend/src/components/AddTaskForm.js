import { useState } from "react";
import { createTask } from "../api/task";

const AddTaskForm = ({ onTaskAdded }) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [status, setStatus] = useState("To Do");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newTask = await createTask({ title, description, status });
        if (newTask) {
            onTaskAdded(newTask); 
            setTitle("");
            setDescription("");
            setStatus("To Do");
        }
    };

    return (
        <form className="add-task-form" onSubmit={handleSubmit}>
            <h3>Create New Task</h3>
            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
            />
            <select value={status} onChange={(e) => setStatus(e.target.value)}>
                <option value="To Do">To Do</option>
                <option value="In Progress">In Progress</option>
                <option value="Done">Done</option>
            </select>
            <button type="submit">Add Task</button>
        </form>
    );
};

export default AddTaskForm;
