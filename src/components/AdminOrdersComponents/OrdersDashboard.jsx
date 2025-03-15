import websiteColor from "../../theme";
import { Box, Button, HStack, Text, VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import { BsCardList } from "react-icons/bs";
import { TbCircleDashed } from "react-icons/tb";
import { FaRegCircleCheck } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";
import AdminTopBarTwo from "../AdminUtils/AdminTopBarTwo";
import { topBarNavs } from "../AdminUtils/NavDetails";
import { Link } from "react-router-dom";
const OrdersDashboard = () => {
  const orderData = [
    {
      order_id: "ORD123456",
      date_time: "2025-03-12T10:30:00Z",
      customer_name: "Rahul Sharma",
      address: "123 MG Road, Mumbai, India",
      qty: 3,
      amount: 750,
      status: "Delivered",
    },
    {
      order_id: "ORD123457",
      date_time: "2025-03-12T12:45:00Z",
      customer_name: "Ananya Reddy",
      address: "45 Banjara Hills, Hyderabad, India",
      qty: 2,
      amount: 500,
      status: "On Process",
    },
    {
      order_id: "ORD123458",
      date_time: "2025-03-12T14:15:00Z",
      customer_name: "Vikram Patel",
      address: "78 Nehru Street, Ahmedabad, India",
      qty: 5,
      amount: 1250,
      status: "Delivered",
    },
    {
      order_id: "ORD123459",
      date_time: "2025-03-12T16:00:00Z",
      customer_name: "Priya Verma",
      address: "55 Park Avenue, New Delhi, India",
      qty: 1,
      amount: 250,
      status: "On Process",
    },
    {
      order_id: "ORD123460",
      date_time: "2025-03-12T18:30:00Z",
      customer_name: "Arjun Mehta",
      address: "22 Brigade Road, Bangalore, India",
      qty: 4,
      amount: 1000,
      status: "Delivered",
    },
  ];

  const [od, setOrderData] = useState(orderData);
  const [selectedButton, setSelectedButton] = useState("All");

  const handleButton = (val) => {
    setSelectedButton(val);

    if (val === "All") {
      setOrderData(orderData);
      return;
    }

    const filteredData = orderData.filter(
      (order) => order.status.trim() === val.trim()
    );

    setOrderData(filteredData);
  };

  return (
    <Box w={"100%"}>
      <AdminTopBarTwo navs={topBarNavs} />

      <HStack w={"100%"} gap={"1rem"} mt={"2rem"}>
        <VStack
          bgColor={websiteColor.white}
          borderRadius={"20px"}
          w={"170px"}
          p={"1rem"}
          alignItems={"flex-start"}
          gap={"20px"}
        >
          <Box fontSize={"1.7rem"} color={websiteColor.mutedRose}>
            <BsCardList />
          </Box>
          <VStack alignItems={"flex-start"} gap={"2px"}>
            <Box fontSize={"1.7rem"}>200</Box>
            <Text color={websiteColor.textLightColor}>Total Order</Text>
          </VStack>
        </VStack>
        <VStack
          bgColor={websiteColor.white}
          borderRadius={"20px"}
          w={"170px"}
          p={"1rem"}
          alignItems={"flex-start"}
          gap={"20px"}
        >
          <Box fontSize={"1.7rem"} color={websiteColor.mutedRose}>
            <TbCircleDashed />
          </Box>
          <VStack alignItems={"flex-start"} gap={"2px"}>
            <Box fontSize={"1.7rem"}>45</Box>
            <Text color={websiteColor.textLightColor}>On Process</Text>
          </VStack>
        </VStack>
        <VStack
          bgColor={websiteColor.white}
          borderRadius={"20px"}
          w={"170px"}
          p={"1rem"}
          alignItems={"flex-start"}
          gap={"20px"}
        >
          <Box fontSize={"1.7rem"} color={websiteColor.mutedRose}>
            <FaRegCircleCheck />
          </Box>
          <VStack alignItems={"flex-start"} gap={"2px"}>
            <Box fontSize={"1.7rem"}>145</Box>
            <Text color={websiteColor.textLightColor}>Completed</Text>
          </VStack>
        </VStack>
      </HStack>

      <Box
        w={"100%"}
        mt={"2rem"}
        maxH={"790px"}
        bgColor={websiteColor.white}
        borderRadius={"20px"}
        p={"2rem"}
      >
        <HStack
          bgColor={"#efefef"}
          borderRadius={"15px"}
          mb={"1rem"}
          w={"25%"}
          justifyContent={"space-between"}
        >
          <Button
            onClick={() => handleButton("All")}
            py={"1.5rem"}
            px={"2rem"}
            borderRadius={"12px"}
            color={
              selectedButton === "All"
                ? websiteColor.white
                : websiteColor.textLightColor
            }
            fontWeight={"500"}
            fontSize={"1rem"}
            bgColor={
              selectedButton === "All" ? websiteColor.mutedRose : "transparent"
            }
          >
            All
          </Button>
          <Button
            onClick={() => handleButton("On Process")}
            py={"1.5rem"}
            borderRadius={"12px"}
            color={
              selectedButton === "On Process"
                ? websiteColor.white
                : websiteColor.textLightColor
            }
            fontWeight={"500"}
            fontSize={"1rem"}
            bgColor={
              selectedButton === "On Process"
                ? websiteColor.mutedRose
                : "transparent"
            }
          >
            On Process
          </Button>
          <Button
            onClick={() => handleButton("Delivered")}
            py={"1.5rem"}
            borderRadius={"12px"}
            color={
              selectedButton === "Delivered"
                ? websiteColor.white
                : websiteColor.textLightColor
            }
            fontWeight={"500"}
            fontSize={"1rem"}
            bgColor={
              selectedButton === "Delivered"
                ? websiteColor.mutedRose
                : "transparent"
            }
          >
            Delivered
          </Button>
        </HStack>
        <table
          width="100%"
          style={{
            overflow: "hidden",
            borderRadius: "8px",
            marginBottom: "1rem",
          }}
        >
          <thead className="tableStyles">
            <tr>
              <th
                style={{
                  padding: "13px",
                  color: websiteColor.textLightColor,
                  fontWeight: "500",
                  fontSize: "1.1rem",
                }}
              >
                Order Id
              </th>
              <th
                style={{
                  padding: "13px",
                  color: websiteColor.textLightColor,
                  fontWeight: "500",
                  fontSize: "1.1rem",
                }}
              >
                Date
              </th>
              <th
                style={{
                  padding: "13px",
                  color: websiteColor.textLightColor,
                  fontWeight: "500",
                  fontSize: "1.1rem",
                }}
              >
                Customer
              </th>
              <th
                style={{
                  padding: "13px",
                  color: websiteColor.textLightColor,
                  fontWeight: "500",
                  fontSize: "1.1rem",
                }}
              >
                Address
              </th>
              <th
                style={{
                  padding: "13px",
                  color: websiteColor.textLightColor,
                  fontWeight: "500",
                  fontSize: "1.1rem",
                }}
              >
                Qty
              </th>
              <th
                style={{
                  padding: "13px",
                  color: websiteColor.textLightColor,
                  fontWeight: "500",
                  fontSize: "1.1rem",
                }}
              >
                Amount
              </th>
              <th
                style={{
                  padding: "13px",
                  color: websiteColor.textLightColor,
                  fontWeight: "500",
                  fontSize: "1.1rem",
                }}
              >
                Status
              </th>
              <th
                style={{
                  padding: "13px",
                  color: websiteColor.textLightColor,
                  fontWeight: "500",
                  fontSize: "1.1rem",
                }}
              >
                View
              </th>
            </tr>
          </thead>
          <tbody style={{ width: "100%" }}>
            {od.map((item) => (
              <tr key={item.order_id} style={{ width: "100%" }}>
                <td className="tableColumnStyles">{item.order_id}</td>
                <td className="tableColumnStyles">{item.date_time}</td>
                <td className="tableColumnStyles">{item.customer_name}</td>
                <td className="tableColumnStyles">{item.address}</td>
                <td className="tableColumnStyles">{item.qty}</td>
                <td
                  className="tableColumnStyles"
                  style={{ color: websiteColor.mutedRose }}
                >
                  ₹{item.amount}
                </td>
                <td className="tableColumnStyles">
                  <Button
                    style={{
                      backgroundColor:
                        item.status === "On Process"
                          ? websiteColor.blushPink
                          : websiteColor.mutedRose,
                      display: "block",
                      margin: "auto",
                      color:
                        item.status === "On Process"
                          ? websiteColor.textLightColor
                          : websiteColor.white,
                      fontSize: "1rem",
                      fontWeight: "550",
                    }}
                  >
                    {item.status}
                  </Button>
                </td>
                <td className="tableColumnStyles">
                  <Link to={`/orderDetails/${item.order_id}`}>
                    <Box
                      fontSize={"1.5rem"}
                      color={websiteColor.mutedRose}
                      cursor={"pointer"}
                      w={"100%"}
                      display={"flex"}
                      justifyContent={"center"}
                    >
                      <FaEye />
                    </Box>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Box>
    </Box>
  );
};

export default OrdersDashboard;
