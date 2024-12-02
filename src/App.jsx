import './App.css'
import AddTodo from './components/AddTodo'
import TodoProvider from './components/TaskWrapper'
import TodoList from './components/Todolist'

function App() {

  return (
    <div>
      <h1>Todo List</h1>
      <AddTodo />
      <TodoList />
    </div>
  )
}

export default App
