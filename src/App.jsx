import './App.css';
import TaskColumn from './components/TaskColumn';
import TaskForm from './components/TaskForm';
import todoIcon from './assets/direct-hit.png';
import doingIcon from './assets/glowing-star.png';
import doneIcon from './assets/check-mark-button.png';
import { useEffect, useState } from 'react';

const oldTasks = localStorage.getItem('tasks');
console.log(oldTasks);

const App = () => {

  const [tasks, setTasks] = useState( JSON.parse(oldTasks) || []);
  let [editTask, setEditTask] = useState({});
  // console.log(tasks);
  
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);
  
  const handleEdit = (id) => {
    // console.log(id, 'Edit button clicked!');
    // console.log(typeof(tasks), tasks, tasks[id]);
    setEditTask(tasks[id])
  }

  // const handleDelete = (id) => {
  //   const newTasks = tasks.filter((task, index) => index !== id)
  //   setTasks(newTasks)
  // }

  return (
    <div className="app">
      <TaskForm editTask={editTask} setTasks={setTasks}/>
      <main className="app_main">
        {/* <TaskColumn title='To do' icon={todoIcon} tasks={tasks} status='todo' handleDelete={handleDelete}/>
        <TaskColumn title='Doing' icon={doingIcon} tasks={tasks} status='doing' handleDelete={handleDelete}/>
        <TaskColumn title='Done' icon={doneIcon} tasks={tasks} status='done' handleDelete={handleDelete}/>  */}

        <TaskColumn title='To do' icon={todoIcon} tasks={tasks} status='todo' setTasks={setTasks} handleEdit={handleEdit}/>
        <TaskColumn title='Doing' icon={doingIcon} tasks={tasks} status='doing' setTasks={setTasks} handleEdit={handleEdit}/>
        <TaskColumn title='Done' icon={doneIcon} tasks={tasks} status='done' setTasks={setTasks} handleEdit={handleEdit}/>
      </main>
    </div>
  );
};

export default App;
