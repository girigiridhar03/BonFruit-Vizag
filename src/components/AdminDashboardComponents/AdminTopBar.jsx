import websiteColor from '../../theme';
import { Avatar, Box, HStack, VStack } from '@chakra-ui/react'
import React from 'react'
import { IoSettingsOutline } from "react-icons/io5";

const AdminTopBar = () => {
  return (
     <HStack w={'100%'} justifyContent={'space-between'}>
         <VStack alignItems={'flex-start'} gap={'1px'}>
            <Box fontSize={'2rem'} fontWeight={'semibold'}>Dashboard</Box>
            <Box color={websiteColor.textLightColor}>Hello Teja Rockzz, welcome back!</Box>
         </VStack>

         <HStack w={{md:"20%"}} gap={'15px'} justifyContent={'flex-end'}>
            <Box w={'40px'} h={'40px'} bgColor={websiteColor.white} display={'flex'} alignItems={'center'} justifyContent={'center'} fontSize={'1.3rem'} overflow={'hidden'} cursor={'pointer'} borderRadius={'10px'} boxShadow={'1px 0px 1px rgb(0,0,0,0.7)'}><IoSettingsOutline /></Box>
            <VStack alignItems={'flex-start'} gap={'1px'}>
                <Box fontSize={'0.9rem'} fontWeight={'semibold'}>Teja Rockzz</Box>
                <Box fontSize={'0.8rem'} color={websiteColor.textLightColor}>Admin</Box>
            </VStack>
            <Avatar.Root colorPalette={websiteColor.mutedRose}>
        <Avatar.Fallback />
        <Avatar.Image src="https://bit.ly/broken-link" />
      </Avatar.Root>
         </HStack>
     </HStack>
  )
}

export default AdminTopBar
