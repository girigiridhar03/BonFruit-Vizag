import { Box } from '@chakra-ui/react'
import AdminNavbar from '../components/AdminNav/AdminNavbar'
import React from 'react'
import { Outlet } from 'react-router-dom'

const AdminLayout = () => {
  return (
    <>
    <AdminNavbar />
    <Box w={{md:"80%"}} marginLeft={{md:"20%"}} h={'100vh'} py={'1rem'} px={'2rem'}>
     <Outlet />
    </Box>
    </>
  )
}

export default AdminLayout
