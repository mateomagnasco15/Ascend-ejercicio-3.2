import { useState } from "react"
import "./Todo.css"

interface TodoProps  {
    id: number
    children: string
    completed: boolean
}

const Todo = ({ id, children, completed }: TodoProps) => {
    
    const [task, setTask] = useState(completed)

    const taskHandler = () => {
        setTask(!task)
    }
    
    return (
        <div className="todos">
            <ul>
                <label htmlFor={id.toString()} className={`${task ? "done" : "notDone"}`}>{children}</label>
                <input onClick={taskHandler} id={id.toString()} type="checkbox" checked={task} onChange={taskHandler} />

            </ul>
        </div>
        
    )
}

export default Todo;