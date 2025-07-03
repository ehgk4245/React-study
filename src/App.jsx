import { useEffect, useState } from 'react'

function App() {
    useEffect(() => {
        fetch('https://dummyjson.com/todos')
            .then((res) => res.json())
            .then((res) => setTodos(res.todos))
    }, [])

    const [todos, setTodos] = useState([])

    const [nextId, setNextId] = useState(0)

    const handleSubmit = (event) => {
        event.preventDefault()

        if (event.target.todo.value.length == 0) {
            alert('값이 비었다.')
            return
        }

        addTodo(event.target.todo.value)

        event.target.todo.value = ''
    }

    const addTodo = (todo) => {
        fetch('https://dummyjson.com/todos/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                todo: todo,
                completed: false,
                userId: 5,
            }),
        })
            .then((res) => res.json())
            .then(console.log)
        // setTodos([
        //     {
        //         id: nextId,
        //         completed: false,
        //         todo: todo,
        //     },
        //     ...todos,
        // ])
        // setNextId(nextId + 1)
    }

    const removeTodo = (selectedId) => {
        const filterTodos = todos.filter((todo) => todo.id != selectedId)
        setTodos(filterTodos)
    }

    const updateTodo = (selectedId) => {
        const completed = todos.filter((todo) => selectedId == todo.id).completed
        /* updating completed status of todo with id 1 */
        fetch(`https://dummyjson.com/todos/${selectedId}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                completed: !completed,
            }),
        })
            .then((res) => res.json())
            .then(console.log)
        // const checkTodo = todos.map((todo) => (todo.id == selectedId ? { ...todo, completed: !todo.completed } : todo))
        // setTodos(checkTodo)
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" name="todo" />
                <button type="submit">등록</button>
            </form>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        <input type="checkbox" checked={todo.completed} onChange={() => updateTodo(todo.id)} />
                        {todo.id} / {JSON.stringify(todo.completed)} / {todo.todo}
                        <button className="border rounded p-2 m-2" onClick={() => removeTodo(todo.id)}>
                            삭제
                        </button>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default App
