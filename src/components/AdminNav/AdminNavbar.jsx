import React, { useState } from "react";
import websiteColor from "../../theme";
import { Box, HStack, Image } from "@chakra-ui/react";
import websiteLogo from "/bonfruit-icon.png";
import { RxDashboard } from "react-icons/rx";
import { BsCardList } from "react-icons/bs";
import { CiStar } from "react-icons/ci";
import { useLocation } from "react-router-dom";

const AdminNavbar = () => {
  const location = useLocation();
  const [activeItem, setActiveItem] = useState(location.pathname);

  const handleClick = (item) => {
    setActiveItem(item);
  };


  return (
    <Box
      bgColor={websiteColor.white}
      width={{md:"20% "}}
      height={"100vh"}
      overflow={"hidden"}
      position={"fixed"}
      left={0}
      top={0}
      py={"1rem"}
      px={"1.5rem"}
      display={"flex"}
      flexDirection={"column"}
      gap={"1.5rem"}
    >
      <Box w={"90%"} h={"160px"}>
        <Image w={"100%"} h={"100%"} src={websiteLogo} objectFit={'contain'} alt="website logo" />
      </Box>
      <Box
        display={"flex"}
        flexDirection={"column"}
        gap={"1.9rem"}
        h={"100%"}
      >
        <HStack
          className={`admin ${activeItem === "/dashboard" ? "active" : ""}`}
          onClick={() => handleClick("/dashboard")}
        >
          <Box>
            <RxDashboard />
          </Box>
          <Box>Dashboard</Box>
        </HStack>
        <HStack
          className={`admin ${activeItem === "Orders" ? "active" : ""}`}
          onClick={() => handleClick("Orders")}
        >
          <Box>
            <BsCardList />
          </Box>
          <Box>Orders</Box>
        </HStack>
        <HStack
          className={`admin ${activeItem === "Menu" ? "active" : ""}`}
          onClick={() => handleClick("Menu")}
        >
          <Box>
            <RxDashboard />
          </Box>
          <Box>Menu</Box>
        </HStack>
        <HStack
          className={`admin ${activeItem === "Review" ? "active" : ""}`}
          onClick={() => handleClick("Review")}
        >
          <Box>
            <CiStar />
          </Box>
          <Box>Review</Box>
        </HStack>
      </Box>
    </Box>
  );
};

export default AdminNavbar;
