import { Box, Text, VStack } from "@chakra-ui/react";

const Home = () => {
  return (
    <Box p={4}>
      <VStack spacing={4}>
        <Text fontSize="2xl">Welcome to Fitness Tracker</Text>
        <Text>Track your fitness journey and achieve your goals with our app.</Text>
      </VStack>
    </Box>
  );
};

export default Home;