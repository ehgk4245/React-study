import { useEffect, useRef, useState } from 'react'
import TodoWriteForm from './components/TodoWriteForm'
import ItemList from './components/ItemList'

function App() {
    const [todos, setTodos] = useState([])
    const lastIdRef = useRef(0)

    const addTodo = (todo) => {
        const id = lastIdRef.current + 1
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
            <TodoWriteForm addTodo={addTodo}></TodoWriteForm>
            <ItemList todos={todos} removeTodo={removeTodo} updateTodo={updateTodo}></ItemList>
        </>
    )
}

export default App
