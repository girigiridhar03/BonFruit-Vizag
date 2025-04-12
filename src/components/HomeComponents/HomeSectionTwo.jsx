import websiteColor from "../../theme";
import { Box, Image, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import React from "react";

// Image and details
const imageDetails = [
  {
    img: "/assets/fruit-bowl.png",
    title: "Fresh Fruit Bowls",
    desc: "Handpicked seasonal fruits delivered to your doorstep.",
  },
  {
    img: "/assets/juice-glass.png",
    title: "100% Natural Juices",
    desc: "No added sugar, no preservatives – just pure goodness.",
  },
  {
    img: "/assets/delivery-agent.png",
    title: "Fast Delivery",
    desc: "Order online and get it delivered in under 30 minutes.",
  },
];

const HomeSectionTwo = () => {
  return (
    <Box className="containerStyles">
      <Box
        fontSize={websiteColor.headingFontSizes}
        fontFamily={websiteColor.headingFontFamily}
        color={websiteColor.textLightColor}
      >
        What We Offer
      </Box>

      <SimpleGrid columns={{base:"1",md:"3"}} gap={{base:"1rem",md:"0.7rem",lg:"1rem"}} mt={"1rem"}>
        {imageDetails.map((item) => (
          <Box
            key={item.img}
            bgColor={"white"}
            p={"2rem"}
            borderRadius={"10px"}
          >
            <VStack w={"100%"} gap={{base:"1rem",md:"0.5rem",lg:"0.9rem"}}>
              <Box w={{base:"220px",md:"190px",lg:"220px"}} h={{base:"220px",md:"190px",lg:"220px"}}>
                <Image
                  w={"100%"}
                  h={"100%"}
                  objectFit={"cover"}
                  src={item.img}
                  alt={item.title}
                  loading="lazy"
                />
              </Box>
              <Text
                fontWeight={"bold"}
                color={websiteColor.textLightColor}
                fontSize={websiteColor.subHeadingFontSizes}
              >
                {item.title}
              </Text>
              <Text fontSize={{base:"0.9rem",md:"0.8rem",lg:"0.9rem"}} fontWeight={"semibold"}>
                {item.desc}
              </Text>
            </VStack>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default HomeSectionTwo;
