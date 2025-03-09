import { Box, Flex, HStack, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { BsCardList } from "react-icons/bs";
import websiteColor from "../../theme";
import { MdOutlineArrowOutward } from "react-icons/md";
import React from "react";
import {
  Area,
  AreaChart,
  BarChart,
  Bar,
  CartesianGrid,
  Cell,
  ResponsiveContainer,
  Tooltip as RechartsTooltip,
  XAxis,
  YAxis,
} from "recharts";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip as ChartTooltip,
  Legend as ChartLegend,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, ChartTooltip, ChartLegend);

const dashBoardData = {
  dashboard: {
    totalOrders: 120,
    totalCustomers: 85,
    totalRevenue: 12500,
    orderOverview: [
      { month: "January", orders: 30 },
      { month: "February", orders: 25 },
      { month: "March", orders: 40 },
      { month: "April", orders: 25 },
    ],
    categoriesSold: [
      { category: "Fruit Bowl - Small", sold: 10 },
      { category: "Fruit Bowl - Medium", sold: 15 },
      { category: "Fruit Bowl - Large", sold: 20 },
      { category: "Fruit Bowl - Premium", sold: 5 },
      { category: "Juice - Watermelon", sold: 10 },
      { category: "Juice - Grapes", sold: 10 },
      { category: "Juice - Banana", sold: 5 },
      { category: "Juice - Muskmelon", sold: 5 },
      { category: "Juice - Pineapple", sold: 10 },
      { category: "Juice - Orange", sold: 10 },
      { category: "Juice - ABC (Apple, Beetroot, Carrot)", sold: 10 },
      { category: "Juice - Beetroot", sold: 5 },
      { category: "Juice - Carrot", sold: 5 },
    ],
    revenueWave: [
      { day: "Mon", revenue: 500 },
      { day: "Tue", revenue: 700 },
      { day: "Wed", revenue: 600 },
      { day: "Thu", revenue: 900 },
      { day: "Fri", revenue: 1000 },
    ],
  },
};

const AdminGraphs = () => {
  const COLORS = [
    websiteColor.mutedRose, // Primary (Muted Rose)
    websiteColor.blushPink, // Blush Pink
    websiteColor.textLightColor, // Light black (as defined in textLightColor)
    websiteColor.lightPeach, // Light Peach
    websiteColor.secondaryButton, // Secondary button color as an extra option
  ];

  // Transform categoriesSold data for Doughnut Chart
  const categoriesData = dashBoardData.dashboard.categoriesSold.map((item) => ({
    name: item.category,
    value: item.sold,
  }));

  // Prepare data for the Doughnut Chart using Chart.js
  const categoryLabels = categoriesData.map((item) => item.name);
  const categoryValues = categoriesData.map((item) => item.value);

  const doughnutData = {
    labels: categoryLabels,
    datasets: [
      {
        label: "Categories Sold",
        data: categoryValues,
        backgroundColor: categoriesData.map(
          (_, index) => COLORS[index % COLORS.length]
        ),
        borderColor: categoriesData.map(
          (_, index) => COLORS[index % COLORS.length]
        ),
        borderWidth: 1,
      },
    ],
  };

  const doughnutOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom",
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            const label = context.label || "";
            const value = context.parsed || 0;
            return `${label}: ${value}`;
          },
        },
      },
    },
  };

  // Determine the maximum orders value for Order Overview Bar Chart
  const maxOrders = Math.max(
    ...dashBoardData.dashboard.orderOverview.map((item) => item.orders)
  );
  const RoundedBar = (props) => {
    const { x, y, width, height, fill } = props;
    return (
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        rx={20}
        ry={20}
        fill={fill}
      />
    );
  };
  return (
    <Box mt={"1.5rem"}>
      <SimpleGrid
        columns={3}
        gap={"15px"}
        w={{md:"100%"}}
        mb={"2rem"}
      >
        {/* Total Orders */}
        <HStack
          bgColor={websiteColor.white}
          w={"100%"}
          py={"1.5rem"}
          px={"1rem"}
          borderRadius={"20px"}
          gap={"20px"}
        >
          <Box
            w={"20%"}
            fontSize={"2.5rem"}
            bgColor={websiteColor.mutedRose}
            h={"70px"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            borderRadius={"15px"}
            color={websiteColor.white}
          >
            <BsCardList />
          </Box>
          <VStack alignItems={"flex-start"} gap={"2px"} w={"80%"}>
            <Box color={websiteColor.textLightColor} fontSize={"1.2rem"}>
              Total Order
            </Box>
            <HStack w={"100%"} justifyContent={"space-between"}>
              <Box fontSize={"1.6rem"} fontWeight={"semibold"}>
                {dashBoardData.dashboard.totalOrders}
              </Box>
              <HStack alignItems={"center"} gap={"3px"}>
                <Box
                  bgColor={websiteColor.blushPink}
                  color={websiteColor.primaryText}
                  borderRadius={"50%"}
                  p={".2rem"}
                >
                  <MdOutlineArrowOutward />
                </Box>
                <Box color={websiteColor.textLightColor}>1.59%</Box>
              </HStack>
            </HStack>
          </VStack>
        </HStack>

        {/* Total Customers */}
        <HStack
          bgColor={websiteColor.white}
          w={"100%"}
          py={"1.5rem"}
          px={"1rem"}
          borderRadius={"20px"}
          gap={"20px"}
        >
          <Box
            w={"20%"}
            fontSize={"2.5rem"}
            bgColor={websiteColor.mutedRose}
            h={"70px"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            borderRadius={"15px"}
            color={websiteColor.white}
          >
            <BsCardList />
          </Box>
          <VStack alignItems={"flex-start"} gap={"2px"} w={"80%"}>
            <Box color={websiteColor.textLightColor} fontSize={"1.2rem"}>
              Total Customers
            </Box>
            <HStack w={"100%"} justifyContent={"space-between"}>
              <Box fontSize={"1.6rem"} fontWeight={"semibold"}>
                {dashBoardData.dashboard.totalCustomers}
              </Box>
              <HStack alignItems={"center"} gap={"3px"}>
                <Box
                  bgColor={websiteColor.blushPink}
                  color={websiteColor.primaryText}
                  borderRadius={"50%"}
                  p={".2rem"}
                >
                  <MdOutlineArrowOutward />
                </Box>
                <Box color={websiteColor.textLightColor}>1.59%</Box>
              </HStack>
            </HStack>
          </VStack>
        </HStack>

        {/* Total Revenue */}
        <HStack
          bgColor={websiteColor.white}
          w={"100%"}
          py={"1.5rem"}
          px={"1rem"}
          borderRadius={"20px"}
          gap={"20px"}
        >
          <Box
            w={"20%"}
            fontSize={"2.5rem"}
            bgColor={websiteColor.mutedRose}
            h={"70px"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            borderRadius={"15px"}
            color={websiteColor.white}
          >
            <BsCardList />
          </Box>
          <VStack alignItems={"flex-start"} gap={"2px"} w={"80%"}>
            <Box color={websiteColor.textLightColor} fontSize={"1.2rem"}>
              Total Revenue
            </Box>
            <HStack w={"100%"} justifyContent={"space-between"}>
              <Box fontSize={"1.6rem"} fontWeight={"semibold"}>
                {dashBoardData.dashboard.totalRevenue.toLocaleString()}
              </Box>
              <HStack alignItems={"center"} gap={"3px"}>
                <Box
                  bgColor={websiteColor.blushPink}
                  color={websiteColor.primaryText}
                  borderRadius={"50%"}
                  p={".2rem"}
                >
                  <MdOutlineArrowOutward />
                </Box>
                <Box color={websiteColor.textLightColor}>1.59%</Box>
              </HStack>
            </HStack>
          </VStack>
        </HStack>

        {/* Revenue Wave Chart */}
        <Box
          gridColumn={"span 2"}
          bgColor={websiteColor.white}
          p={"2rem"}
          borderRadius={"20px"}
        >
          <HStack mb={"2rem"}>
            <VStack alignItems={"flex-start"} gap={"1px"}>
              <Box color={websiteColor.textLightColor} fontSize={"1.2rem"}>
                Total Revenue
              </Box>
              <Box fontSize={"1.6rem"} fontWeight={"semibold"}>
                {dashBoardData.dashboard.totalRevenue.toLocaleString()}
              </Box>
            </VStack>
          </HStack>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={dashBoardData.dashboard.revenueWave}>
              <CartesianGrid
                strokeDasharray="3 3"
                stroke={websiteColor.softPink}
              />
              <XAxis dataKey="day" stroke={websiteColor.textLightColor} />
              <YAxis stroke={websiteColor.textLightColor} />
              <RechartsTooltip />
              <Area
                type="monotone"
                dataKey="revenue"
                stroke={websiteColor.mutedRose}
                fill={websiteColor.blushPink}
              />
            </AreaChart>
          </ResponsiveContainer>
        </Box>
        {/* Doughnut Chart (Top Categories) */}
        <Box
          bg={websiteColor.white}
          borderRadius="20px"
          p="1rem"
          color={websiteColor.secondaryText}
        >
          {/* Header */}
          <Flex justify="space-between" align="center" mb="1rem">
            <Text fontSize="lg" fontWeight="bold">
              Top Categories
            </Text>
          </Flex>
          {/* Donut Chart using Chart.js */}
          <Box height="350px">
            <Doughnut data={doughnutData} options={doughnutOptions} />
          </Box>
        </Box>
        {/* Order Overview Bar Chart */}
        <Box
          gridColumn={"span 3"}
          bgColor={websiteColor.white}
          p={"2rem"}
          borderRadius={"20px"}
        >
          <Text fontSize="lg" fontWeight="bold" mb="1rem">
            Order Overview
          </Text>
          <ResponsiveContainer width="100%" height={500}>
            <BarChart data={dashBoardData.dashboard.orderOverview}>
              <XAxis dataKey="month" stroke={websiteColor.textLightColor} />
              <YAxis stroke={websiteColor.textLightColor} />
              <RechartsTooltip />
              <Bar dataKey="orders" shape={RoundedBar}>
                {dashBoardData.dashboard.orderOverview.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={
                      entry.orders === maxOrders
                        ? websiteColor.mutedRose
                        : websiteColor.blushPink
                    }
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default AdminGraphs;
