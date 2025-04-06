import { Box } from '@chakra-ui/react'
import React from 'react'
import AdminTopBarTwo from '../AdminUtils/AdminTopBarTwo'
import { MenuTopBarNav } from '../AdminUtils/NavDetails'

const AdminAllMenu = () => {

    // const menuArray = [
    //     {
    //         orderID:"#ORD123",
    //         menutitle:"Lorem ipsum dolor sit.",
    //         menudes:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt, quibusdam.",
    //         ingredients:["apple","banana","grapes"],
    //         weight:"500gm",
    //         menu:"Large bowl",
    //         price:"150rs",
            
    //     }
    // ]


  return (
    <Box w={'100%'}>
        <AdminTopBarTwo navs={MenuTopBarNav} />
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt, quibusdam.
    </Box>
  )
}

export default AdminAllMenu
