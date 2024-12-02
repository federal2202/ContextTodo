import { useState } from "react"
import { useTodos } from "./TaskWrapper"


export default function TodoList(){
    const {todos, toggleTodo} = useTodos()
    return (
        <div>
            {todos.map((todo, index) => (
                <div key={index}>
                    <input type="checkbox" checked={todo.completed} onChange={() => toggleTodo(index)} />
                    <label htmlFor="">{todo.text}</label>
                    {
                        todo.completed && todo.completedAt && (
                            <span>Completed at: {new Date(todo.completedAt).toLocaleString()}</span>
                        )
                    }
                </div>
            ))}
        </div>
    )
}