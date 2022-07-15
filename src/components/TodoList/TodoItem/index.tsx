import React from 'react'
import { Paper, Box, Typography, IconButton } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'

type Todo = {
  id: number
  name: string
  description: string
  checked: boolean
}

interface TodoItemProps {
  todo: Todo
}

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => (
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
      <Typography variant='h5' component='h5' gutterBottom>
        {todo.name}
      </Typography>
      <Typography variant='subtitle1' component='div' gutterBottom>
        {todo.description}
      </Typography>
    </Box>

    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <IconButton color='info' aria-label='delete'>
        <DeleteIcon />
      </IconButton>
    </Box>
  </Paper>
)

export default TodoItem
