import { Box, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box as="footer" bg="brand.900" color="white" py={4} textAlign="center" mt="auto">
      <Text>© 2023 Fitness Tracker. All rights reserved.</Text>
    </Box>
  );
};

export default Footer;