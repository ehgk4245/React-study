function TodoWriteForm({ addTodo }) {
    const handleSubmit = (e) => {
        e.preventDefault()
        addTodo(e.target.todo.value)
        e.target.todo.value = ''
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" name="todo" />
                <button type="submit">등록</button>
            </form>
        </>
    )
}

export default TodoWriteForm
