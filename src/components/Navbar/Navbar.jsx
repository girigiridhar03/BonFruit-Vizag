import { Box, Button, HStack, Image, VStack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import websiteColor from "../../theme";
import websiteLogo from "/bonfruit-icon.png";
import { RiLoginCircleFill } from "react-icons/ri";
import { GiForkKnifeSpoon } from "react-icons/gi";
import { GiKnifeFork } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";
import { FaBagShopping } from "react-icons/fa6";
import { FaUserLarge } from "react-icons/fa6";
import { FaUserEdit } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { isMenuToggle } from "../../Store/Client/clientReducer";
import { TbTruckDelivery } from "react-icons/tb";
import { Avatar } from "../ui/avatar";
const Navbar = () => {
  const [isProfile, setIsProfile] = useState(false);
  const dispatch = useDispatch();

  const handleMenu = () => {
    dispatch(isMenuToggle(true));
  };

  useEffect(() => {
    const handleClickOutside = () => {
      setIsProfile(false);
    };

    if (isProfile) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isProfile]);

  return (
    <Box
      bgColor={websiteColor.mutedRose}
      w={"100%"}
      position={"fixed"}
      top={0}
      left={0}
      right={0}
      zIndex={99}
    >
      <Box
        w={"95%"}
        maxW={"1550px"}
        mx={"auto"}
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Box
          w={{ base: "100px", md: "110px" }}
          h={{ base: "100px", md: "110px" }}
        >
          <Image
            w={"100%"}
            h={"100%"}
            src={websiteLogo}
            objectFit={"contain"}
            alt="website logo"
            cursor={"pointer"}
          />
        </Box>
        <HStack
          gap={"5rem"}
          fontSize={"1rem"}
          color={websiteColor.textLightColor}
          fontWeight={"semibold"}
          flex={"1"}
          justifyContent={"center"}
          display={{ base: "none", xl: "flex" }}
        >
          <Box cursor={"pointer"} _hover={{ color: websiteColor.white }}>
            Home
          </Box>
          <Box cursor={"pointer"} _hover={{ color: websiteColor.white }}>
            About us
          </Box>
          <Box cursor={"pointer"} _hover={{ color: websiteColor.white }}>
            Contact us
          </Box>
          <Box cursor={"pointer"} _hover={{ color: websiteColor.white }}>
            Terms & Conditions
          </Box>
        </HStack>

        <Box
          display={"flex"}
          gap={{ base: "0.5rem", lg: "0.8rem" }}
          alignItems={"center"}
        >
          <Button
            onClick={() => setIsProfile(!isProfile)}
            height={{ base: "40px", md: "50px" }}
            w={{ base: "40px", md: "50px" }}
            borderRadius={"50%"}
            bgColor={websiteColor.secondaryButton}
            _hover={{ color: websiteColor.mutedRose }}
            color={websiteColor.textLightColor}
            fontWeight={"semibold"}
            display={"flex"}
            alignItems={"center"}
            title="Profile"
          >
            <Box>
              <CgProfile />
            </Box>
          </Button>
          <Button
            height={{ base: "40px", md: "50px" }}
            w={{ base: "40px", md: "50px" }}
            borderRadius={"50%"}
            bgColor={websiteColor.secondaryButton}
            color={websiteColor.textLightColor}
            _hover={{ color: websiteColor.mutedRose }}
            fontWeight={"semibold"}
            display={"flex"}
            alignItems={"center"}
            title="Cart"
          >
            <Box>
              <FaBagShopping />
            </Box>
          </Button>
          <Box display={{ base: "block", xl: "none" }}>
            <Button
              height={{ base: "40px", md: "50px" }}
              w={{ base: "40px", md: "50px" }}
              borderRadius={"50%"}
              bgColor={websiteColor.secondaryButton}
              color={websiteColor.textLightColor}
              _hover={{ color: websiteColor.mutedRose }}
              fontWeight={"semibold"}
              display={"flex"}
              alignItems={"center"}
              onClick={handleMenu}
            >
              <Box className="icon">
                <GiForkKnifeSpoon />
              </Box>
            </Button>
          </Box>
        </Box>
      </Box>

      {/* Profile Menu */}
      {isProfile && (
        <Box
          w={"250px"}
          position={"fixed"}
          bgColor={websiteColor.softPink}
          right={{ base: "2.3%", md: "2%", lg: "1.5%" }}
          top={"6rem"}
          boxShadow={"0px 4px 10px rgba(242, 135, 155, 0.4)"}
          borderRadius={"10px"}
          p={"1rem"}
          display={"flex"}
          flexDirection={"column"}
          gap={"0.7rem"}
          zIndex={9999}
        >
          <Box borderBottom={`1px solid rgb(0,0,0,0.1)`} paddingBottom={"1rem"}>
            <HStack w={"100%"}>
              <Avatar
                name="Ryan Florence"
                src={undefined}
                icon={<FaUserLarge />}
                size={"md"}
                bgColor={websiteColor.mutedRose}
              />
              <VStack
                alignItems={"flex-start"}
                w={"100%"}
                gap={0}
                color={websiteColor.textLightColor}
              >
                <Box fontSize={".9rem"} fontWeight={"semibold"}>
                  Welcome Back!
                </Box>
                <Box fontSize={".8rem"}>Please Login.</Box>
              </VStack>
            </HStack>
          </Box>
          <VStack w={"100%"} alignItems={"flex-start"} px={".2rem"}>
            <HStack
              w={"100%"}
              justifyContent={"start"}
              color={websiteColor.textLightColor}
              fontWeight={"semibold"}
              _hover={{ color: websiteColor.mutedRose }}
              cursor={"pointer"}
            >
              <Box fontSize={"1.2rem"}>
                <FaUserEdit />
              </Box>
              <Box fontSize={".9rem"}>Edit Profile</Box>
            </HStack>
            <HStack
              w={"100%"}
              justifyContent={"start"}
              color={websiteColor.textLightColor}
              fontWeight={"semibold"}
              _hover={{ color: websiteColor.mutedRose }}
              cursor={"pointer"}
            >
              <Box fontSize={"1.2rem"}>
                <TbTruckDelivery />
              </Box>
              <Box fontSize={".9rem"}>Order's</Box>
            </HStack>
            <HStack
              w={"100%"}
              justifyContent={"start"}
              color={websiteColor.textLightColor}
              fontWeight={"semibold"}
              _hover={{ color: websiteColor.mutedRose }}
              cursor={"pointer"}
            >
              <Box fontSize={"1.2rem"}>
                <RiLoginCircleFill />
              </Box>
              <Box fontSize={".9rem"}>Login</Box>
            </HStack>
          </VStack>
        </Box>
      )}
    </Box>
  );
};
50;
export default Navbar;
