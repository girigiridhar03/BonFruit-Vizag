import { Box, Button, HStack, Image, IconButton } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import { MenuTopBarNav } from "../AdminUtils/NavDetails";
import AdminTopBarTwo from "../AdminUtils/AdminTopBarTwo";
import websiteColor from "../../theme";
import { GiFruitBowl } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { GiManualJuicer } from "react-icons/gi";
const AdminAddMenu = () => {
  const [images, setImages] = useState([]);
  const fileInputRef = useRef(null);
  const [menu, setMenu] = useState("Fruit Bowl");
  const conditionCategory = menu === "Fruit Bowl" ? "Small Bowl" : "Watermelon";
  const conditionWeight = menu === "Fruit Bowl" ? "250g" : "300ml";

  const [formData, setFormData] = useState({
    title: "",
    menu,
    description: "",
    category: conditionCategory,
    price: "",
    weight: conditionWeight,
    coupons: "",
    ingredients: "",
    files: [],
  });

  useEffect(() => {
    setFormData((prev) => {
      return {
        ...prev,
        menu,
        category: conditionCategory,
        weight: conditionWeight,
      };
    });
  }, [menu, conditionCategory, conditionWeight]);

  const fruitMenu = {
    "Fruit Bowl": [
      {
        menuItem: "Small Bowl",
        weight: "250g",
      },
      {
        menuItem: "Medium Bowl",
        weight: "360g",
      },
      {
        menuItem: "Large Bowl",
        weight: "500g",
      },
      {
        menuItem: "Premium Bowl",
        weight: "300g",
      },
    ],
    Juices: [
      {
        menuItem: "Watemelon",
        weight: "300ml",
      },
      {
        menuItem: "Grapes",
        weight: "300ml",
      },
      {
        menuItem: "Banana ",
        weight: "300ml",
      },
      {
        menuItem: "Muskmelon",
        weight: "300ml",
      },
      {
        menuItem: "Carrot",
        weight: "300ml",
      },
      {
        menuItem: "Pineapple",
        weight: "300ml",
      },
      {
        menuItem: "Orange",
        weight: "300ml",
      },
      {
        menuItem: "ABC (Apple,Beetroot,Carrot)",
        weight: "300ml",
      },
      {
        menuItem: "Beetroot",
        weight: "300ml",
      },
    ],
  };
  console.log(menu);
  const handleOnChange = (e) => {
    const { name, value } = e.target;

    if (name === "category") {
      const selectedBowl = fruitMenu[menu].find(
        (item) => item.menuItem === value
      );
      setFormData((prev) => ({
        ...prev,
        [name]: value,
        weight: selectedBowl ? selectedBowl.weight : "",
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleFileChange = (e) => {
    const { files } = e.target;
    if (!files) return;

    const allowedTypes = ["image/png", "image/jpeg", "image/jpg"];
    const imageFiles = Array.from(files).filter((file) =>
      allowedTypes.includes(file.type)
    );

    if (imageFiles.length !== files.length) {
      console.log("Only PNG, JPG, and JPEG files are allowed.");
    }

    const newImageUrls = imageFiles.map((file) => URL.createObjectURL(file));

    setFormData((prev) => ({
      ...prev,
      files: [...prev.files, ...imageFiles],
    }));
    setImages((prevImages) => [...prevImages, ...newImageUrls]);
  };

  const rebuildFileList = (fileArray) => {
    const dataTransfer = new DataTransfer();
    fileArray.forEach((file) => dataTransfer.items.add(file));
    return dataTransfer.files;
  };

  const handleRemoveImage = (index) => {
    const updatedImages = images.filter((_, i) => i !== index);
    const updatedFiles = formData.files.filter((_, i) => i !== index);

    setImages(updatedImages);
    setFormData((prev) => ({ ...prev, files: updatedFiles }));

    if (fileInputRef.current) {
      fileInputRef.current.files = rebuildFileList(updatedFiles);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const filesArray = Array.from(fileInputRef.current.files);

    const submissionData = {
      ...formData,
      files: filesArray,
    };

    console.log("Form Data Submitted:", submissionData);

    setFormData({
      title: "",
      menu,
      description: "",
      category: conditionCategory,
      price: "",
      weight: conditionWeight,
      coupons: "",
      ingredients: "",
      files: [],
    });

    setImages([]);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <Box w={"100%"}>
      <AdminTopBarTwo navs={MenuTopBarNav} />

      {/* Add Form */}

      <Box
        bgColor={websiteColor.white}
        w={"100%"}
        py={"1.5rem"}
        px={"1.5rem"}
        mt={"1rem"}
        borderRadius={"15px"}
      >
        <HStack w={"100%"} justifyContent={"space-between"} mb={"1rem"}>
          <Box
            fontSize={"1.5rem"}
            color={websiteColor.mutedRose}
            fontWeight={"semibold"}
          >
            <HStack alignItems={"flex-start"}>
              <Box>
                {menu === "Fruit Bowl" ? "Add Fruit Bowl" : "Add Fruit Juice"}
              </Box>
              <Box color={websiteColor.mutedRose} fontSize={"2rem"}>
                {menu === "Fruit Bowl" ? <GiFruitBowl /> : <GiManualJuicer />}
              </Box>
            </HStack>
          </Box>
          <Box>
            <Box className="custom-select-container">
              <select
                className="custom-select"
                onChange={(e) => setMenu(e.target.value)}
              >
                <option value="Fruit Bowl">Fruit Bowl</option>
                <option value="Juices">Juices</option>
              </select>
            </Box>
          </Box>
        </HStack>
        <form onSubmit={handleSubmit}>
          <HStack mt={"1.5rem"} gap={"1rem"}>
            <Box
              display={"flex"}
              flexDirection={"column"}
              w={"100%"}
              gap={"0.5rem"}
            >
              <label htmlFor="" className="custom-label">
                Menu Title
              </label>
              <input
                type="text"
                className="custom-input"
                placeholder="Enter Title"
                name="title"
                value={formData.title}
                onChange={handleOnChange}
              />
            </Box>
            <Box
              display={"flex"}
              flexDirection={"column"}
              w={"100%"}
              gap={"0.5rem"}
            >
              <label htmlFor="" className="custom-label">
                Menu Description
              </label>
              <input
                type="text"
                className="custom-input"
                placeholder="Enter Description"
                name="description"
                value={formData.description}
                onChange={handleOnChange}
              />
            </Box>
          </HStack>

          <HStack mt={"1.5rem"} gap={"1rem"}>
            <Box
              display={"flex"}
              flexDirection={"column"}
              w={"100%"}
              gap={"0.5rem"}
            >
              <label htmlFor="" className="custom-label">
                Menu Category
              </label>
              <select
                className="custom-input"
                name="category"
                value={formData.category}
                onChange={handleOnChange}
              >
                {fruitMenu[menu].map((item, index) => (
                  <React.Fragment key={index}>
                    <option value={item.menuItem}>{item.menuItem}</option>
                  </React.Fragment>
                ))}
              </select>
            </Box>
            <Box
              display={"flex"}
              flexDirection={"column"}
              w={"100%"}
              gap={"0.5rem"}
            >
              <label htmlFor="" className="custom-label">
                Menu Price
              </label>
              <input
                type="text"
                className="custom-input"
                placeholder="Enter Price"
                name="price"
                value={formData.price}
                onChange={handleOnChange}
              />
            </Box>
          </HStack>
          <HStack mt={"1.5rem"} gap={"1rem"}>
            <Box
              display={"flex"}
              flexDirection={"column"}
              w={"100%"}
              gap={"0.5rem"}
            >
              <label htmlFor="" className="custom-label">
                Menu Weight
              </label>
              <input
                type="text"
                className="custom-input"
                placeholder="Enter Weight"
                name="weight"
                disabled={true}
                value={formData.weight}
              />
            </Box>
            <Box
              display={"flex"}
              flexDirection={"column"}
              w={"100%"}
              gap={"0.5rem"}
            >
              <label htmlFor="" className="custom-label">
                Menu Coupon
              </label>
              <input
                type="text"
                className="custom-input"
                placeholder="Enter Coupon"
                name="coupons"
                value={formData.coupons}
                onChange={handleOnChange}
              />
            </Box>
          </HStack>
          <Box
            display={"flex"}
            flexDirection={"column"}
            w={"100%"}
            gap={"0.5rem"}
            mt={"1.5rem"}
          >
            <label htmlFor="" className="custom-label">
              Menu Ingredients
            </label>
            <textarea
              type="text"
              className="custom-input"
              placeholder="Enter Ingredients"
              name="ingredients"
              value={formData.ingredients}
              onChange={handleOnChange}
            />
          </Box>
          <Box
            display={"flex"}
            flexDirection={"column"}
            w={"100%"}
            gap={"0.5rem"}
            mt={"1.5rem"}
          >
            <label htmlFor="" className="custom-label">
              Menu Images
            </label>
            <input
              type="file"
              ref={fileInputRef}
              className="file-input"
              multiple
              accept=".png, .jpg, .jpeg"
              onChange={handleFileChange}
            />
          </Box>

          <HStack mt={"1rem"} gap={"1rem"} wrap="wrap">
            {images.map((img, index) => (
              <Box
                key={index}
                position="relative"
                borderRadius="10px"
                overflow="hidden"
                boxSize="70px"
              >
                <Image
                  src={img}
                  alt={`preview-${index}`}
                  boxSize="100%"
                  objectFit="cover"
                />
                <Button
                  position={"absolute"}
                  inset={0}
                  w={"100%"}
                  h={"100%"}
                  p={0}
                  fontSize={"0.rem"}
                  bgColor={"blackAlpha.100"}
                  color={"black"}
                  zIndex={10}
                  onClick={() => handleRemoveImage(index)}
                >
                  <IoClose />
                </Button>
              </Box>
            ))}
          </HStack>

          <Button
            type="submit"
            mt={"2rem"}
            bgColor={websiteColor.mutedRose}
            px={"3rem"}
            fontSize={"1.1rem"}
            color={"white"}
            display={"block"}
            ml={"auto"}
          >
            Add
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default AdminAddMenu;
