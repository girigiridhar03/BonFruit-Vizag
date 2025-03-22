import React from "react";
import { MenuTopBarNav } from "../AdminUtils/NavDetails";
import AdminTopBarTwo from "../AdminUtils/AdminTopBarTwo";
import { Box } from "@chakra-ui/react";

const AdminViewMenu = () => {
  return (
    <Box w={'100%'}>
      <AdminTopBarTwo navs={MenuTopBarNav} />
    </Box>
  );
};

export default AdminViewMenu;
