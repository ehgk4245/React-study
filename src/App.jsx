import TodoWriteForm from './components/TodoWriteForm'
import ItemList from './components/ItemList'
import useTodos from './hooks/useTodos'

function App() {
    const todosState = useTodos()

    return (
        <>
            <TodoWriteForm todosState={todosState}></TodoWriteForm>
            <ItemList todosState={todosState}></ItemList>
        </>
    )
}

export default App
