import { useState } from 'react'

function App() {
    const [todos, setTodos] = useState([
        {
            checked: false,
            todo: '할일 1',
        },
        {
            checked: false,
            todo: '할일 2',
        },
    ])

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
        setTodos([
            {
                checked: false,
                todo: todo,
            },
            ...todos,
        ])
    }

    const removeTodo = (selectedIndex) => {
        const filterTodos = todos.filter((todo, index) => index != selectedIndex)
        setTodos(filterTodos)
    }

    const updateTodo = (selectedIndex) => {
        const checkTodo = todos.map((todo, index) =>
            index == selectedIndex ? { ...todo, checked: !todo.checked } : todo,
        )
        setTodos(checkTodo)
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" name="todo" />
                <button type="submit">등록</button>
            </form>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>
                        <input type="checkbox" checked={todo.checked} onChange={() => updateTodo(index)} />
                        {todo.todo}
                        <button className="border rounded p-2 m-2" onClick={() => removeTodo(index)}>
                            삭제
                        </button>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default App
