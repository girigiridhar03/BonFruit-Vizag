import React from "react";
import websiteColor from "../../theme";
import {
  Box,
  Button,
  CloseButton,
  Dialog,
  HStack,
  Portal,
  Text,
} from "@chakra-ui/react";

const RecentOrdersTable = ({ data }) => {


  return (
    <Box w="100%" position={'relative'}>
      <HStack w="100%" justifyContent="space-between" mb="1rem">
        <Text fontSize="lg" fontWeight="bold" mb="1rem">
          Recent Orders
        </Text>
        <Button
          variant="outline"
          borderColor={websiteColor.textLightColor}
          _hover={{
            bgColor: websiteColor.mutedRose,
            color: websiteColor.white,
            border: "none",
          }}
          borderRadius="10px"
          color={websiteColor.textLightColor}
        >
          See All Orders
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
              Photo
            </th>
            <th
              style={{
                padding: "13px",
                color: websiteColor.textLightColor,
                fontWeight: "500",
                fontSize: "1.1rem",
              }}
            >
              Menu
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
              Customer Name
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
          </tr>
        </thead>
        <tbody style={{ width: "100%" }}>
          {data.map((item) => (
            <tr key={item.orderId} style={{ width: "100%" }}>
              <td className="tableColumnStyles">{item.orderId}</td>
              <td className="tableColumnStyles">{item.photo}</td>
              <td className="tableColumnStyles">{item.menu}</td>
              <td className="tableColumnStyles">{item.qty}</td>
              <td
                className="tableColumnStyles"
                style={{ color: websiteColor.mutedRose }}
              >
                ₹{item.amount}
              </td>
              <td className="tableColumnStyles">{item.customername}</td>
              <td className="tableColumnStyles">
                <Button
                  style={{
                    backgroundColor:
                      item.orderStatus === "On Process"
                        ? websiteColor.blushPink
                        : websiteColor.mutedRose,
                    display: "block",
                    margin: "auto",
                    color:
                      item.orderStatus === "On Process"
                        ? websiteColor.textLightColor
                        : websiteColor.white,
                    fontSize: "1rem",
                    fontWeight: "550",
                  }}
                >
                  {item.orderStatus}
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Box>
  );
};

export default RecentOrdersTable;
