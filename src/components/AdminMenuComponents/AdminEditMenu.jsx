import { Box } from '@chakra-ui/react'
import React from 'react'
import AdminTopBarTwo from '../AdminUtils/AdminTopBarTwo'
import { MenuTopBarNav } from '../AdminUtils/NavDetails'

const AdminEditMenu = () => {
  return (
    <Box w={'100%'}>
        <AdminTopBarTwo navs={MenuTopBarNav} />
    </Box>
  )
}

export default AdminEditMenu
