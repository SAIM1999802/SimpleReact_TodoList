import { useState } from "react"

export default function Form({todos,setTodos}) {

    // const [todo, setTodo] = useState("");
    const [todo, setTodo] = useState({name : "",done:false});

    function handleSubmit(e) {
        e.preventDefault();
        setTodos([...todos, todo])
        setTodo({name : "",done:false})
    }

    return (

        <div>
            <form onSubmit={handleSubmit} >
                <input onChange={(e) => setTodo({name:e.target.value , done:false})}
                    value={todo.name} type="text" />
                <button id="basic-addon2">Add</button>
            </form>
        </div>

    )

}