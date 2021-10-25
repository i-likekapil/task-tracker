import Task from "./Task";

const Tasks = ({ data , onDelete, onToggle}) => {
  return (
    <>
      {data.map((task) => (
        <Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle} />
      ))}
    </>
  );
};

export default Tasks;
