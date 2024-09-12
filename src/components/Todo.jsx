import { useState } from "react"
import Form from "./form";
import TodoList from "./TodoList";

export default function Todo() {

    const [todos, setTodos] = useState([]);
    const completedTodos =  todos.filter((todo) =>todo.done).length
    return (
        <div>
            <Form todos={todos} setTodos={setTodos} />
            <TodoList todos={todos} setTodos={setTodos}  />
            <h4>Completed tasks : {completedTodos}</h4>

            
        </div>
    )
}