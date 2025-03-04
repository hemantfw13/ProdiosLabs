import { useEffect, useState } from "react";
import { fetchTasks } from "../api/task";
import ListColumn from "../components/ListColumn";
import AddTaskForm from "../components/AddTaskForm";

const Board = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const getTasks = async () => {
            const fetchedTasks = await fetchTasks();
            setTasks(fetchedTasks);
        };
        getTasks();
    }, []);

    const handleTaskAdded = (newTask) => {
        setTasks([...tasks, newTask]); // Add new task to the state
    };

    return (
        <div>
            <AddTaskForm onTaskAdded={handleTaskAdded} />
            <div style={{ display: "flex", gap: "20px" }}>
                {["To Do", "In Progress", "Done"].map((status) => (
                    <ListColumn key={status} status={status} tasks={tasks.filter((t) => t.status === status)} />
                ))}
            </div>
        </div>
    );
};

export default Board;
