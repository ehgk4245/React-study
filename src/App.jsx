import { useEffect, useRef, useState } from 'react'

function App() {
    const [todos, setTodos] = useState([])
    const lastIdRef = useRef(0)

    const handleSubmit = (event) => {
        event.preventDefault()
        const id = lastIdRef.current + 1
        if (event.target.todo.value.length == 0) {
            alert('값이 비었다.')
            return
        }

        addTodo(event.target.todo.value, id)

        event.target.todo.value = ''
    }

    const addTodo = (todo, id) => {
        setTodos([
            {
                id: id,
                completed: false,
                todo: todo,
            },
            ...todos,
        ])
        lastIdRef.current = id
    }

    const removeTodo = (selectedId) => {
        const filterTodos = todos.filter((todo) => todo.id != selectedId)
        setTodos(filterTodos)
    }

    const updateTodo = (selectedId) => {
        const checkTodo = todos.map((todo) => (todo.id == selectedId ? { ...todo, completed: !todo.completed } : todo))
        setTodos(checkTodo)
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
