import { useReducer } from 'react'
import './App.css'
import AddTask from './AddTask.jsx'
import TaskList from './TasksList.jsx'
export default function TaskApp() {
  const [tasks, dispatch] = useReducer(
    tasksReducer,
    initialTasks
  )

  function handleAddTask(text) {
    dispatch({
      type: 'added',
      id: nextId++,
      text: text,
    })
  }
  function handleChangeTask(task) {
     dispatch({
      type: 'changed',
      task: task,
     })
  }
  function handleDeleteTask(taskId) {
    dispatch({
      type: 'deleted',
    id: taskId,
    })
  }
  return (
    <>
    <h1>Programming Learning</h1>
    <AddTask onAddTask={handleAddTask} />
    <TaskList tasks={tasks} onChangeTask={handleChangeTask} onDeleteTask={handleDeleteTask} />
    </>
  )

  function tasksReducer(tasks, action) {
 switch(action.type) {
  case 'added': {
    return [...tasks, {
      id: action.id,
      text: action.text,
      done: false
    }]
  }
  case 'changed': {
    return tasks.map(t => {
      if (t.id === action.task.id) {
        return action.task;
      } else {
        return t;
      }
    })
  }
  case 'deleted': {
    return tasks.filter(t => t.id !== action.id)
  }
  default: {
    throw new Error('Unknown action: ' + action.type)
  }
}
  }
}
let nextId = 3;
const initialTasks = [
  { id: 0, text: 'Learning React', done: true },
  { id: 1, text: 'CS50 Lectures', done: false },
  { id: 2, text: 'Coding', done: false }
];

