import { useState } from "react";
import { useTodos } from "./TaskWrapper";

export default function AddTodo(){
    const [text, setText] = useState('');
    const { addTodo } = useTodos();
    function submitHandler(e){
        e.preventDefault();
        
        addTodo(text);
        setText('');
    }
    return (
        <form action="" onSubmit={submitHandler}>
            <input type="text" value={text} placeholder="add a new todo" onChange={(e) => setText(e.target.value)} />
            <button type="submit">Add Todo</button>
        </form>
    )
}