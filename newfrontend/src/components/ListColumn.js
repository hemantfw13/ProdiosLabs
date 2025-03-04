

import { useDrop } from "react-dnd";

const ListColumn = ({ status, tasks }) => {
    const [, drop] = useDrop({
        accept: "TASK",
        drop: (item) => console.log(`Dropped task: ${item.id} in ${status}`),
    });

    return (
        <div className="list-column" ref={drop} style={{ padding: "10px", border: "1px solid gray" }}>
            <h3 className="list-title">{status}</h3>
            {tasks.map((task) => (
                <div key={task.id} className="task-item" style={{ padding: "5px", margin: "5px", background: "lightgray" }}>
                    {task.title}
                </div>
            ))}
        </div>
    );
};

export default ListColumn;

