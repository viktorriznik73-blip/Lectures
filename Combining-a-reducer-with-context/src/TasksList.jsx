import { useState } from "react";

export default function TaskList({tasks, onChangeTask, onDeleteTask }) {
      return (
        <ul>
            {tasks.map((task) => (
              <li key={task.id}>
                <Task task={task} onChange={onChangeTask} onDelete={onDeleteTask} />
              </li>
            ))}
        </ul>
      )
      function Task({ task, onChange, onDelete }) {
        const [isEditing, setIsEditing] = useState(false)
        const [editText, setEditText] = useState(task.text);
        let taskContent;
        if (isEditing) {
            taskContent = (
                <>
                <input value={editText} onChange={e => setEditText(e.target.value)}/>
               <button onClick={() => {
                setIsEditing(false);
                onChange({
                    ...task,
                    text: editText
                });
            }}>Save</button>
                </>
            )
        } else {
            taskContent = (
                <>
                {task.text}
                <button onClick={() => {setEditText(task.text); setIsEditing(true)}}>
                    Edit
                </button>
                </>
            )
        }
        return (
            <label>
                <input type="checkbox" checked={task.done} onChange={e => {onChange({
                    ...task, done: e.target.checked
                })}}/>
                {taskContent}
                <button onClick={(e) => onDelete(task.id)}>Delete</button>
            </label>
        )
      }
    }
