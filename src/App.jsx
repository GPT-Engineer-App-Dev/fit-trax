import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Box, Flex } from "@chakra-ui/react";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Progress from "./pages/Progress";
import Settings from "./pages/Settings";

function App() {
  return (
    <Router>
      <Flex direction="column" minHeight="100vh">
        <Header />
        <NavBar />
        <Box as="main" flex="1">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/progress" element={<Progress />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </Box>
        <Footer />
      </Flex>
    </Router>
  );
}

export default App;