import { useDrag } from "react-dnd";

const TaskCard = ({ task }) => {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: "TASK",
        item: { id: task._id },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    }));

    return (
        <div ref={drag} style={{ opacity: isDragging ? 0.5 : 1, border: "1px solid black", padding: "10px" }}>
            <h4>{task.title}</h4>
            <p>{task.description}</p>
        </div>
    );
};

export default TaskCard;
