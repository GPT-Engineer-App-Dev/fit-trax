import { Box, Flex, Link } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <Box as="nav" bg="brand.800" color="white" py={2}>
      <Flex justify="center" gap={4}>
        <Link as={NavLink} to="/" _hover={{ textDecoration: "none", color: "brand.300" }}>Home</Link>
        <Link as={NavLink} to="/progress" _hover={{ textDecoration: "none", color: "brand.300" }}>Progress</Link>
        <Link as={NavLink} to="/settings" _hover={{ textDecoration: "none", color: "brand.300" }}>Settings</Link>
      </Flex>
    </Box>
  );
};

export default NavBar;