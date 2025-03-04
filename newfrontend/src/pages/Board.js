import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { useEffect, useState } from "react";
import { fetchTasks } from "../api/task";
import ListColumn from "../components/ListColumn";

const Board = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const getTasks = async () => {
            const fetchedTasks = await fetchTasks();
            setTasks(fetchedTasks);
        };
        getTasks();
    }, []);

    return (
        <DndProvider backend={HTML5Backend}>
        <div className="board-container">
          {["To Do", "In Progress", "Done"].map((status) => (
            <ListColumn key={status} status={status} tasks={tasks.filter((t) => t.status === status)} />
          ))}
        </div>
      </DndProvider>
    );
};

export default Board;
