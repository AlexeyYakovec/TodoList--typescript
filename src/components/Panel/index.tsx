import React, { useState } from 'react'
import { TextField, Paper, Button } from '@mui/material'
import AddModeratorIcon from '@mui/icons-material/AddModerator'
import type { Todo } from '../../App'

const DEFAULT_TODO = { name: '', descritpion: '' }

interface PanelProps {
  onAddTodo: ({ name, descritpion }: Omit<Todo, 'id' | 'checked'>) => void
}

const Panel: React.FC<PanelProps> = ({ onAddTodo }) => {
  const [todo, setTodo] = useState(DEFAULT_TODO)

  const onClick = () => {
    onAddTodo(todo)
    setTodo(DEFAULT_TODO)
  }

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target
    setTodo({ ...todo, [name]: value })
  }

  return (
    <Paper
      elevation={3}
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '18px 36px',
        borderRadius: 2,
        gap: 6,
        width: '100%',
      }}>
      <TextField
        value={todo.name}
        name='name'
        id='standard-basic'
        label='Todo name'
        variant='standard'
        onChange={onChange}
      />
      <TextField
        value={todo.descritpion}
        name='descritpion'
        id='standard-basic'
        label='Todo descritpion'
        variant='standard'
        onChange={onChange}
      />

      <Button variant='outlined' endIcon={<AddModeratorIcon />} onClick={onClick}>
        add
      </Button>
    </Paper>
  )
}

export default Panel
