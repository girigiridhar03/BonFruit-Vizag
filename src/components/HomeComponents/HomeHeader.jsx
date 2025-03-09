import { Button } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const HomeHeader = () => {
  return (
    <div>
      <Link to={'/dashboard'}>
      <Button>Go To DashBoard</Button>
      </Link>
    </div>
  )
}

export default HomeHeader
