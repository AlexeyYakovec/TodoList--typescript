import React from 'react'
import { Box } from '@mui/material'

import type { Todo } from '../../App'
import TodoItem from './TodoItem'

interface TodoListProps {
  todoList: Todo[]
  onDeleteTodo: (id: Todo['id']) => void
}

const TodoList: React.FC<TodoListProps> = ({ todoList, onDeleteTodo }) => (
  <Box sx={{ marginTop: 2, width: '100%' }}>
    {todoList.map((todo) => (
      <TodoItem todo={todo} onDeleteTodo={onDeleteTodo} />
    ))}
  </Box>
)

export default TodoList
