import { Box, Button, HStack, Image, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import React from "react";
import websiteColor from "../../theme";
import { LiaStarSolid } from "react-icons/lia";

const products = [
  {
    id: 1,
    name: "Fresh Orange Juice",
    image: "/assets/image1.jpg",
    description:
      "Pure sunshine in a glass! Our orange juice is made from freshly squeezed oranges, packed with Vitamin C and no added sugar.",
    benefits: [
      "Boosts immunity",
      "Great source of Vitamin C",
      "Refreshing and hydrating",
    ],
    price: 149,
    category: "Juice",
    rating: 4.8,
  },
  {
    id: 2,
    name: "Chilled Watermelon Juice",
    image: "/assets/image2.jpg",
    description:
      "Beat the heat with our chilled watermelon juice – naturally sweet, super hydrating, and perfect for summer.",
    benefits: ["High water content", "Keeps you cool", "Naturally detoxifying"],
    price: 129,
    category: "Juice",
    rating: 4.7,
  },
  {
    id: 3,
    name: "Banana Fruit Bowl",
    image: "/assets/image3.jpg",
    description:
      "Energize your day with our wholesome banana bowl – rich in potassium and topped with healthy goodness.",
    benefits: [
      "Great for energy and digestion",
      "Rich in fiber and potassium",
      "Perfect as a breakfast or post-workout meal",
    ],
    price: 179,
    category: "Fruit Bowl",
    rating: 4.9,
  },
  {
    id: 4,
    name: "Banana Fruit Bowl",
    image: "/assets/image3.jpg",
    description:
      "Energize your day with our wholesome banana bowl – rich in potassium and topped with healthy goodness.",
    benefits: [
      "Perfect as a breakfast or post-workout meal",
    ],
    price: 179,
    category: "Fruit Bowl",
    rating: 4.9,
  },
];


const HomeSectionThree = () => {
  return (
    <Box className="containerStyles">
      <VStack>
        <Box
          fontSize={websiteColor.headingFontSizes}
          fontFamily={websiteColor.headingFontFamily}
          color={websiteColor.textLightColor}
        >
          Our Most Popular Items
        </Box>
        <Text
          fontSize={{base:"0.9rem",md:"1rem"}}
          fontWeight={"semibold"}
        >
          Explore our bestsellers and treat yourself to the freshest, fruit bowls
          and juices.
        </Text>
      </VStack>

      <SimpleGrid columns={{base:1,md:2,xl:3}} gap={{base:"1rem",md:"0.7rem",lg:"1rem"}} my={"2rem"}>
        {products.map((product) => (
          <Box
            key={product.id}
            bgColor={"white"}
            p={"0.9rem"}
            borderRadius={"10px"}
            height={'100%'}
            w={{base:"95%",md:"100%"}}
            mx={'auto'}
          >
            <VStack w={"100%"} h={'100%'} alignItems={"flex-start"} gap={'0.8rem'}>
              <Box
                w={"100%"}
                h={{base:"350px"}}
                borderRadius={"10px"}
                overflow={"hidden"}
              >
                <Image
                  w={"100%"}
                  h={"100%"}
                  objectFit="cover"
                  objectPosition={"center"}
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                />
              </Box>
              <HStack w={"100%"} justifyContent={"space-between"}>
                <Box
                  title={product.name}
                  fontSize={websiteColor.subHeadingFontSizes}
                  fontWeight={"semibold"}
                  color={websiteColor.textLightColor}
                >
                  {product.name.length > 25
                    ? `${product.name.slice(0, 25)}...`
                    : product.name}
                </Box>
                <HStack fontSize={"0.9rem"} gap={"1"}>
                  <Box color={"#ff6200"}>
                    <LiaStarSolid />
                  </Box>
                  <Box fontSize={"0.8rem"} fontWeight={"bold"}>
                    {product.rating}
                  </Box>
                </HStack>
              </HStack>
              <Text fontSize={'1.5rem'} fontWeight={'semibold'}>
              ₹{product.price}/-
              </Text>
              <Text
                textAlign={"left"}
                fontSize={"0.85rem"}
                color={websiteColor.secondaryText}
                fontWeight={'500'}
              >
                {product.description}
              </Text>

              <VStack alignItems={'flex-start'}>
                {product.benefits.map((item, index) => (
                  <Box key={index+1} fontSize={'0.68rem'} bgColor={websiteColor.softPink} color={'rbg(0,0,0,0.8)'} fontWeight={'semibold'} p={'0.5rem'} borderRadius={'10px'}>{item}</Box>
                ))}
              </VStack>

              <Box w={'100%'} textAlign={'right'} display={'inline-block'} mt={'auto'}>
                 <Button bgColor={websiteColor.mutedRose} color={'white'}>
                     Add to cart
                 </Button>
              </Box>
            </VStack>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default HomeSectionThree;
