function ItemList({ todosState }) {
    const { todos, removeTodo, updateTodo } = todosState

    return (
        <>
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

export default ItemList
