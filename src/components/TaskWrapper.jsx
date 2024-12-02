import {createContext, useEffect} from 'react';
import { useState, useContext } from 'react';


const TodoContext = createContext()

export default function TodoProvider({children}){
    const [todos, setTodos] = useState(() => {
        const localTodos = localStorage.getItem("todos");
        return localTodos ? JSON.parse(localTodos) : []
    });
    useEffect(() => {
        if(todos.length > 0){
            localStorage.setItem("todos", JSON.stringify(todos))
        }
    }, [todos])

    function addTodo(text){
        const newTodo = {text, completed: false};
        setTodos([...todos, newTodo]);
    }
    function toggleTodo(index){
        const newTodos = todos.map((todo, i) => {
            if(i === index) {
                return {...todo, completed: !todo.completed, completedAt: !todo.completed ? new Date().toISOString() : null};
            }
            return todo;
        })
        setTodos(newTodos);
    }

    return (
        <TodoContext.Provider value={{todos, addTodo, toggleTodo}}>
            {children}
        </TodoContext.Provider>
    )
}
export function useTodos(){
    const context = useContext(TodoContext)
    return context;
}