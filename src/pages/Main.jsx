import { Box, Text, Flex, Heading } from "@chakra-ui/react";
import { Mail, Facebook, Instagram } from "react-feather";
import Shapes from "./components/Shapes";
import Section from "./Section";

const Main = () => {
  const shadowsIntoLight = "Shadows Into Light";
  return (
    <>
      <Box bg="#fffcf8" zIndex="-1" position="absolute" h="100vh" w="100%">
        <Shapes />
      </Box>
      <Box
        bg="transparent"
        position="relative"
        h="100vh"
        className="mainWrapper"
      >
        <Flex zIndex="4" h="100%" justify="center" align="center">
          <Flex justify="center" h="40em" w="40em" p="56px">
            <Box textAlign="center">
              <Heading fontFamily={shadowsIntoLight} size="4xl">
                Gideon
              </Heading>
              <Heading mr="32px" fontFamily={shadowsIntoLight} size="4xl">
                Simbre
              </Heading>
              <Box p="24px" textAlign="center">
                <Text fontSize="md">
                  hello! i'm a passionate <strong>UI/UX designer</strong> <br />
                  and a <strong>full-stack web developer</strong>
                </Text>
                <Flex p="8px" justify="center" gap={8}>
                  <Mail cursor="pointer" color="#1A202C" size={18} />

                  <Facebook cursor="pointer" color="#1A202C" size={18} />
                  <Instagram cursor="pointer" color="#1A202C" size={18} />
                </Flex>
              </Box>
            </Box>
          </Flex>
        </Flex>
      </Box>
      <Section />
    </>
  );
};
export default Main;
