import './TaskColumn.css'
import TaskCard from './TaskCard';

const TaskColumn = ({ title, icon, tasks, status, /*handleDelete*/ setTasks, handleEdit }) => {

    const handleDelete = (id) => {
        const newTasks = tasks.filter((task, index) => index !== id)
        setTasks(newTasks)
    }
    // const handleEdit = (id) => {
    //     console.log('This is from TaskColoumn Component');
    // }

    return (
        <section className="task_column">
            <h2 className="task_column_header">
                <img className="task_column_icon" src={icon} alt="" />{title}
            </h2>
            {
                tasks.map((task, index) => task.status === status && (
                    <TaskCard
                        key={index}
                        title={task.task}
                        tags={task.tags}
                        handleDelete={handleDelete}
                        handleEdit={handleEdit}
                        id={index}
                    />
                ))
            }
        </section>

    );
};

export default TaskColumn;
