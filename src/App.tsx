import { Box } from '@mui/material'
import React from 'react'
import './App.css'

// components
import Header from './components/Header'
import Panel from './components/Panel'
import TodoList from './components/TodoList'

function App() {
  return (
    <Box display='flex' flexDirection='column' width='500px' margin='0 auto'>
      <div className='App'>
        <Header />
        <Panel />
        <TodoList />
      </div>
    </Box>
  )
}

export default App
