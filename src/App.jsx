import { useState } from 'react'

function App() {
    const [todos, setTodos] = useState(['할일1', '할일2', '할일3'])

    const handleSubmit = (event) => {
        event.preventDefault()

        setTodos([event.target.todo.value, ...todos])
    }

    const removeTodo = (selectedIndex) => {
        const filterTodos = todos.filter((todo, index) => index != selectedIndex)
        setTodos(filterTodos)
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
                        {todo}
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
