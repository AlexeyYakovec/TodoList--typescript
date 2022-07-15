import React from 'react'
import { Box, Typography } from '@mui/material'

const Header = () => {
  return (
    <Box textAlign='left'>
      <Typography sx={{ fontSize: '36px' }} variant='h1' component='h1' gutterBottom>
        Todo List
      </Typography>
    </Box>
  )
}

export default Header
