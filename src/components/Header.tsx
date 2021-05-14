import { Box, ChakraProvider, Flex, Heading, theme } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { ColorModeSwitcher } from "../ColorModeSwitcher";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <>
      <Flex justifyContent="space-between">
        <Box
          m="20px"
          color="orange"
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          width="10%"
        >
          <Link to="/">Home</Link>
          <Link to="/fetch">Fetch</Link>
          <Link to="/info">Info</Link>
        </Box>
        <Box m="20px">
          <Box>
            <ColorModeSwitcher justifySelf="flex-end" />
          </Box>
        </Box>
      </Flex>
    </>
  );
};
export default Header;
