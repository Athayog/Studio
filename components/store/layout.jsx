import Footer from "./Footer";
import Navbar from "./Navbar";
import { Box } from "@chakra-ui/react";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <Box minH="100vh" py={10} maxW="90vw" m="0 auto">
        {children}
      </Box>
      <Footer />
    </>
  );
}
