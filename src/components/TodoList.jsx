import TodoListItem from './TodoListItem'

function ItemList({ todosState }) {
    const { todos } = todosState

    return (
        <>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        <TodoListItem todo={todo} todosState={todosState} />
                    </li>
                ))}
            </ul>
        </>
    )
}

export default ItemList
