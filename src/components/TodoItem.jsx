import styles from './styles.module.css' 
export default function TodoItem({ item, todos, setTodos }) {

    function handleDel(item) {
        console.log("Delete btn", item)
        setTodos(todos.filter((todo) => todo !== item))
    }

    function handleCl(name) {
        const newArray = todos.map((todo) => todo.name === name ? { ...todo, done: !todo.done } : todo)
        setTodos(newArray)
        console.log(todos)
    }

    const comp = item.done ? styles.completed : ""
    return (
        <ul>
            <li>
                <h3>  <span className={comp}   onClick={() => handleCl(item.name)}>{item.name} </span>
                    <button onClick={() => handleDel(item)} className="ms-3">X</button> </h3>

            </li>
        </ul>

    )
}