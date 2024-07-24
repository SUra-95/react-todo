import { useEffect, useState } from "react";
import Tag from "./Tag";
import "./TaskForm.css";

const TaskForm = ({ setTasks, editTask }) => {
    //     const [task, setTask] = useState("");
    //     const [status, setStatus] = useState("todo");

    //     const handleTaskChange = (e) => {
    //         setTask(e.target.value);
    //     }

    //     const handleStatusChange = (e) => {
    //         setStatus(e.target.value);
    //     }

    //     console.log(task, status);
    console.log(editTask);
    
    const [taskData, setTaskData] = useState({
        task: "",
        status: "todo",
        tags: [],
    });

    const selectTag = (tag) => {
        if (taskData.tags.some(item => item === tag)) {
            const filtertags = taskData.tags.filter(item => item !== tag)
            setTaskData(prev => {
                return { ...prev, tags: filtertags }
            })
        } else {
            setTaskData(prev => {
                return { ...prev, tags: [...prev.tags, tag] }
            })
        }
    }
    // console.log(taskData.tags);

    const checkTag = (tag) => {
        return taskData.tags.some(item => item === tag)
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        // console.log(name, value);
        setTaskData((prev) => {
            return { ...prev, [name]: value }
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(taskData);
        setTasks(prev => {
            return [...prev, taskData]
        })
        setTaskData({
            task: "",
            status: "todo",
            tags: [],
        });
    }

//     useEffect(() => {
//         console.log(editTask);
        
//         {editTask && 
//             setTaskData({
//                 task: editTask.task,
//                 status: editTask.status,
//                 tags: [editTask.tags],
//             })
//         }
      
// console.log(taskData);

//     }, [editTask]);
    

    return (
        <header className="app_header">
            <form>
                <input
                    name="task"
                    type="text"
                    className="task_input"
                    placeholder="Enter your task"
                    onChange={handleChange}
                    value={taskData.task}
                />
                <div className="task_form_bottom_line">
                    <div>
                        <Tag tagName={'HTML'} selectTag={selectTag} selected={checkTag('HTML')} />
                        <Tag tagName={'CSS'} selectTag={selectTag} selected={checkTag('CSS')} />
                        <Tag tagName={'Javascript'} selectTag={selectTag} selected={checkTag('Javascript')} />
                        <Tag tagName={'React'} selectTag={selectTag} selected={checkTag('React')} />
                    </div>
                    <div className="buttons">
                        <select name="status" className="task_status" id="" onChange={handleChange} value={taskData.status}>
                            <option value="todo">Todo</option>
                            <option value="doing">Doing</option>
                            <option value="done">Done</option>
                        </select>
                        <button type="submit" className="task_submit" onClick={handleSubmit}>+ Add Task</button>
                    </div>
                </div>
            </form>
        </header>

    );
};

export default TaskForm;
