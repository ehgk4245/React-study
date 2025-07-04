import TodoWriteForm from './components/TodoWriteForm'
import ItemList from './components/ItemList'
import useTodos from './hooks/useTodos'

function App() {
    const { todos, addTodo, removeTodo, updateTodo } = useTodos()

    return (
        <>
            <TodoWriteForm addTodo={addTodo}></TodoWriteForm>
            <ItemList todos={todos} removeTodo={removeTodo} updateTodo={updateTodo}></ItemList>
        </>
    )
}

export default App
