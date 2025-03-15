import { Avatar, Box, HStack, Image, VStack } from "@chakra-ui/react";
import React from "react";
import { topBarNavs } from "../AdminUtils/NavDetails";
import AdminTopBarTwo from "../AdminUtils/AdminTopBarTwo";
import { useParams } from "react-router-dom";
import websiteColor from "../../theme";
import { TbCircleDashed } from "react-icons/tb";
import { IoLocationOutline } from "react-icons/io5";
import { HiOutlineMailOpen } from "react-icons/hi";
import { BsTelephone } from "react-icons/bs";
const AdminOrderDetails = () => {
  const { id } = useParams();

  const orderDetails = [
    {
      itemImage: "/assets/image1.jpg",
      qty: 1,
      price: 100,
      total: 100,
      menuname: "Orange",
      category: "Juice",
    },
    {
      itemImage: "/assets/image2.jpg",
      qty: 2,
      price: 200,
      total: 200,
      menuname: "Watermelon",
      category: "Juice",
    },
    {
      itemImage: "/assets/image3.jpg",
      qty: 3,
      price: 300,
      total: 300,
      menuname: "Banana",
      category: "Juice",
    },
  ];

  return (
    <Box>
      <AdminTopBarTwo navs={topBarNavs} id={id} />

      <HStack w={"100%"} mt={"2rem"} align="stretch" gap={"1rem"}>
        {/* Order Details */}
        <Box
          w={"60%"}
          borderRadius={"20px"}
          bgColor={websiteColor.white}
          p={"2rem"}
        >
          <HStack w={"100%"} justifyContent={"space-between"}>
            <Box fontSize={"2rem"} fontWeight={"600"}>
              Order ID{" "}
              <span style={{ color: websiteColor.mutedRose }}>#{id}</span>
            </Box>
            <HStack
              bgColor={websiteColor.blushPink}
              p={"0.8rem"}
              fontSize={"1rem"}
              borderRadius={"20px"}
              fontWeight={"500"}
              cursor={"pointer"}
            >
              <Box fontSize={"1.1rem"}>
                {" "}
                <TbCircleDashed />
              </Box>
              <Box> On Process</Box>
            </HStack>
          </HStack>

          <Box
            className="custom-scrollbar"
            w={"100%"}
            py={"1rem"}
            px={"1.5rem"}
            borderRadius={"10px"}
            mt={"1.2rem"}
            maxH={"610px"}
            overflow={"auto"}
          >
            <Box
              fontSize={"1.3rem"}
              color={websiteColor.textLightColor}
              fontWeight={"500"}
            >
              Order List
            </Box>

            <table style={{ width: "100%", marginTop: "2rem" }}>
              <thead>
                <tr>
                  <th
                    className="orderTableHeading"
                    style={{ textAlign: "left" }}
                  >
                    item
                  </th>

                  <th className="orderTableHeading">Qty</th>

                  <th className="orderTableHeading">Price</th>
                  <th className="orderTableHeading">Total</th>
                </tr>
              </thead>
              <tbody style={{ textAlign: "center" }}>
                {orderDetails.map((item, index) => (
                  <tr key={index} style={{ borderBottom: `1px solid #dddddd` }}>
                    <td
                      style={{
                        paddingBlock: "1rem",
                      }}
                    >
                      <HStack gap={"1rem"} alignItems={"flex-start"}>
                        <Image
                          src={item.itemImage}
                          w={"70px"}
                          borderRadius={"15px"}
                          h={"auto"}
                          objectFit={"contain"}
                          alt={`image ${index + 1}`}
                        />
                        <VStack alignItems={"flex-start"}>
                          <Box fontSize={"1.1rem"}>{item.menuname}</Box>
                          <Box
                            color={websiteColor.textLightColor}
                            fontSize={"0.9rem"}
                          >
                            {item.category}
                          </Box>
                        </VStack>
                      </HStack>
                    </td>
                    <td className="orderTableBody">{item.qty}</td>
                    <td className="orderTableBody">₹{item.price}</td>
                    <td className="orderTableBody">₹{item.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <HStack
              w={"100%"}
              justifyContent={"flex-end"}
              gap={"3rem"}
              py={"2rem"}
            >
              <Box color={websiteColor.textLightColor} fontWeight={"500"}>
                Total Amount
              </Box>
              <Box fontSize={"1.2rem"} fontWeight={"600"}>
                ₹600
              </Box>
            </HStack>
          </Box>
        </Box>

        {/* Customer Profile */}
        <Box
          w={"40%"}
          borderRadius={"20px"}
          bgColor={websiteColor.white}
          p={"2rem"}
        >
          <Box fontSize={"2rem"} fontWeight={"600"}>
            Customer
          </Box>
          <Box w={"100%"} my={"2rem"}>
            <Box w={"250px"} height={"250px"} mx={"auto"}>
              <Avatar.Root w={"auto"} h={"auto"}>
                <Avatar.Fallback name="Segun Adebayo" />
                <Avatar.Image src="https://bit.ly/sage-adebayo" />
              </Avatar.Root>
              <Box
                textAlign={"center"}
                mt={"1rem"}
                fontSize={"1.1rem"}
                fontWeight={"bold"}
                color={websiteColor.textLightColor}
              >
                Segun Adebayo
              </Box>
            </Box>
          </Box>

          <hr style={{ marginTop: "6rem", borderColor: "#dddddd" }} />

         <VStack alignItems={'flex-start'} gap={'1.9rem'} mt={'2rem'}>
         <HStack gap={'1rem'}>
             <Box fontSize={'1.5rem'}><IoLocationOutline /></Box>
             <Box>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio, deserunt.</Box>
          </HStack>
          <HStack gap={'1rem'}>
             <Box fontSize={'1.5rem'}><HiOutlineMailOpen /></Box>
             <Box>segunadebyao@gmail.com</Box>
          </HStack>
          <HStack gap={'1rem'}>
             <Box fontSize={'1.5rem'}><BsTelephone /></Box>
             <Box>+91 9876543210</Box>
          </HStack>
         </VStack>
        </Box>
      </HStack>
    </Box>
  );
};

export default AdminOrderDetails;
