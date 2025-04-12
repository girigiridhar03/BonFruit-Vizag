import { Box, HStack, VStack } from "@chakra-ui/react";
import Navbar from "../components/Navbar/Navbar";
import React from "react";
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import websiteColor from "../theme";
import { IoIosHome } from "react-icons/io";
import { FaAddressBook } from "react-icons/fa";
import { MdStickyNote2 } from "react-icons/md";
import { PiNotebookFill } from "react-icons/pi";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaWhatsappSquare } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { GiKnifeFork } from "react-icons/gi";
import { isMenuToggle } from "../Store/Client/clientReducer";

const MainLayout = () => {
  const { isMenu } = useSelector((state) => state.clientReducer);
  const dispatch = useDispatch();

  return (
    <Box w={"100%"} className="client-layout">
      <Navbar />

      {/* Overlay with transition */}
      <Box
        position={"fixed"}
        top={0}
        right={0}
        w={"100%"}
        h={"100vh"}
        bgColor={"rgba(0, 0, 0, 0.8)"}
        zIndex={100}
        display={"flex"}
        justifyContent={"flex-end"}
        opacity={isMenu ? 1 : 0}
        visibility={isMenu ? "visible" : "hidden"}
        transition={"opacity 0.3s ease-in-out, visibility 0.3s ease-in-out"}
      >
        {/* Close Icon */}
        <Box
          onClick={() => dispatch(isMenuToggle(false))}
          position={"absolute"}
          color={websiteColor.textLightColor}
          top={7}
          right={5}
          fontSize={"1rem"}
          h={"30px"}
          w={"30px"}
          border={`2px solid ${websiteColor.textLightColor}`}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          borderRadius={"50%"}
          cursor={"pointer"}
          zIndex={20}
        >
          <GiKnifeFork />
        </Box>

        {/* Slide-in Menu */}
        <Box
          transform={isMenu ? "translateX(0%)" : "translateX(100%)"}
          transition={"transform 0.4s ease-in-out"}
          w={"75%"}
          bgColor={websiteColor.softPink}
          h={"100%"}
          display={"flex"}
          flexDirection={"column"}
          pt={"10rem"}
          px={"1rem"}
          justifyContent={"space-between"}
        >
          <VStack w={"100%"} alignItems={"flex-start"} gap={"1.3rem"}>
            <HStack color={websiteColor.textLightColor}>
              <Box fontSize={"1.5rem"}>
                <IoIosHome />
              </Box>
              <Box fontSize={"1.3rem"} fontWeight={"semibold"}>
                Home
              </Box>
            </HStack>
            <HStack color={websiteColor.textLightColor}>
              <Box fontSize={"1.5rem"}>
                <MdStickyNote2 />
              </Box>
              <Box fontSize={"1.3rem"} fontWeight={"semibold"}>
                About us
              </Box>
            </HStack>
            <HStack color={websiteColor.textLightColor}>
              <Box fontSize={"1.5rem"}>
                <FaAddressBook />
              </Box>
              <Box fontSize={"1.3rem"} fontWeight={"semibold"}>
                Contact us
              </Box>
            </HStack>
            <HStack color={websiteColor.textLightColor}>
              <Box fontSize={"1.5rem"}>
                <PiNotebookFill />
              </Box>
              <Box fontSize={"1.3rem"} fontWeight={"semibold"}>
                Terms & Conditions
              </Box>
            </HStack>
          </VStack>

          <HStack
            w={"100%"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Box
              fontFamily={"Bebas Neue"}
              fontSize={"2.2rem"}
              color={websiteColor.textLightColor}
            >
              BONFRUIT
            </Box>
            <HStack>
              <Box color={"#1877F2"} fontSize={"1.2rem"}>
                <FaSquareFacebook />
              </Box>
              <Box color={"#25D366"} fontSize={"1.2rem"}>
                <FaWhatsappSquare />
              </Box>
              <Box color={"#E1306C"} fontSize={"1.2rem"}>
                <AiFillInstagram />
              </Box>
            </HStack>
          </HStack>
        </Box>
      </Box>

      <Outlet />
    </Box>
  );
};

export default MainLayout;
