import React from 'react'
import { Paper, Box, Typography, IconButton } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import type { Todo } from '../../../App'

interface TodoItemProps {
  todo: Todo
  onDeleteTodo: (id: Todo['id']) => void
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onDeleteTodo }) => (
  <Paper
    elevation={3}
    sx={{
      display: 'flex',
      justifyContent: 'space-between',
      alignContent: 'center',
      padding: '12px 24px',
      borderRadius: 2,
      width: '90%',
      marginTop: '12px',
    }}>
    <Box textAlign='left'>
      <Typography
        sx={{ cursor: 'pointer', textDecorationLine: todo.checked ? 'line-through' : 'none' }}
        variant='h5'
        component='h5'
        gutterBottom>
        {todo.name}
      </Typography>
      <Typography variant='subtitle1' component='div' gutterBottom>
        {todo.descritpion}
      </Typography>
    </Box>

    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <IconButton onClick={() => onDeleteTodo(todo.id)} color='error' aria-label='delete'>
        <DeleteIcon />
      </IconButton>
    </Box>
  </Paper>
)

export default TodoItem
