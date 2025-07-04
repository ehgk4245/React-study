function TodoListItem({ todo, todosState }) {
    const { updateTodo, removeTodo } = todosState

    return (
        <>
            <input type="checkbox" checked={todo.completed} onChange={() => updateTodo(todo.id)} />
            {todo.id} / {JSON.stringify(todo.completed)} / {todo.todo}
            <button className="border rounded p-2 m-2" onClick={() => removeTodo(todo.id)}>
                삭제
            </button>
        </>
    )
}

export default TodoListItem
