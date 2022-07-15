import React from 'react'
import { Box, Paper } from '@mui/material'

import TodoItem from './TodoItem'

const todoList = [
  {
    id: 1,
    name: 'task 1',
    description: 'JavaScript',
    checked: false,
  },
  {
    id: 2,
    name: 'task 2',
    description: 'React',
    checked: false,
  },
  {
    id: 3,
    name: 'task 3',
    description: 'TypeScript',
    checked: true,
  },
]

const TodoList = () => (
  <Box sx={{ marginTop: 2, width: '100%' }}>
    {todoList.map((todo) => (
      <TodoItem todo={todo} />
    ))}
  </Box>
)

export default TodoList
