import { Box } from '@mui/material'
import React from 'react'
import './App.css'

// components
import Header from './components/Header'
import Panel from './components/Panel'
import TodoList from './components/TodoList'

export type Todo = {
  id: number
  name: string
  descritpion: string
  checked: boolean
}

function App() {
  const [todoList, setTodoList] = React.useState([
    {
      id: 1,
      name: 'task 1',
      descritpion: 'JavaScript',
      checked: false,
    },
    {
      id: 2,
      name: 'task 2',
      descritpion: 'React',
      checked: false,
    },
    {
      id: 3,
      name: 'task 3',
      descritpion: 'TypeScript',
      checked: true,
    },
  ])

  const onDeleteTodo = (id: Todo['id']) => {
    setTodoList(todoList.filter((todo) => todo.id !== id))
  }

  const onAddTodo = ({ name, descritpion }: Omit<Todo, 'id' | 'checked'>) => {
    setTodoList([...todoList, { id: todoList[todoList.length - 1].id + 1, descritpion, name, checked: false }])
  }

  return (
    <Box display='flex' flexDirection='column' width='500px' margin='0 auto'>
      <div className='App'>
        <Header />
        <Panel onAddTodo={onAddTodo} />
        <TodoList todoList={todoList} onDeleteTodo={onDeleteTodo} />
      </div>
    </Box>
  )
}

export default App
