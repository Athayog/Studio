import {
  ChatIcon,
  InfoIcon,
  PlusSquareIcon,
  QuestionIcon,
} from "@chakra-ui/icons";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import Logo from "public/logo.png";
import DarkMode from "./DarkMode";
function Navbar() {
  return (
    <Box height="3rem">
      {" "}
      <Box
        bg="gray.100"
        py="3"
        textColor="gray.800"
        position="fixed"
        width="100%"
        zIndex="20"
      >
        <Flex maxW="90vw" m="0 auto" justifyContent="space-between">
          <Box>
            <Link href="/" passHref>
              <Flex alignItems="center">
                <Button variant="unstyled">
                  <Image src={Logo} height={30} width={30} alt="logo" />
                </Button>
                <Text fontWeight="500">Store</Text>
              </Flex>
            </Link>
          </Box>
          <Flex gap={6} fontWeight="500">
            <Link href="/help" passHref>
              <Flex alignItems="center" gap={1}>
                <QuestionIcon />
                <Button fontWeight="500" variant="unstyled">
                  Help
                </Button>
              </Flex>
            </Link>

            <Link href="https://www.athayogliving.com" target="_blank" passHref>
              <Flex alignItems="center" gap={1}>
                <Button fontWeight="500" variant="unstyled">
                  Studio
                </Button>
              </Flex>
            </Link>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
}

export default Navbar;
