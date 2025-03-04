import { useDrop } from "react-dnd";
import TaskCard from "./TaskCard";

const ListColumn = ({ status, tasks }) => {
    const [{ isOver }, drop] = useDrop(() => ({
        accept: "TASK",
        drop: (item) => console.log(`Moved task ${item.id} to ${status}`),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),
    }));

    return (
        <div className="list-column">
        <h3 className="list-title">{status}</h3>
        {tasks.map((task) => (
          <div key={task.id} className="task-item">
            {task.title}
          </div>
        ))}
      </div>
    );
};

export default ListColumn;
