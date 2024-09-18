import {
  Box,
  Flex,
  Grid,
  GridItem,
  Text,
  Image,
  Heading,
} from "@chakra-ui/react";
import { useInView } from "framer-motion";
import { useRef } from "react";
import PictureCard from "./components/PictureCard";

const Section = () => {
  const ref = useRef(null);
  const pictureRef = useRef(null);
  const isInView = useInView(ref);
  const pictureIsActive = useInView(pictureRef);

  return (
    <Box bg="#fffcf8" h="100vh">
      <Flex justify="center" h="650px">
        <Grid
          gap={2}
          h="500px"
          placeItems="center"
          templateColumns="repeat(5, 200px)"
          templateRows="repeat(5, auto)"
          textAlign="center"
        >
          <GridItem
            borderRadius="4px"
            boxShadow="0px 2px 3px #e1e1e1"
            h="100%"
            w="100%"
            bg="#f6eee3"
            gridArea="2 / 2 / 3 / 4"
            ref={ref}
            style={{
              transform: isInView ? "none" : "translateY(100px)",
              opacity: isInView ? 1 : 0,
              transition: "all 250ms cubic-bezier(0.17, 0.55, 0.55, 1)",
            }}
          >
            <Flex h="100%" justify="space-evenly" align="center">
              <Image
                h="60px"
                src="/public/react-icon-bg-remove.png"
                objectFit="cover"
              />
              <Image h="60px" src="/public/html.webp" objectFit="cover" />
              <Image h="60px" src="/public/css.png" objectFit="cover" />
              <Image
                h="60px"
                src="/public/JavaScript-logo.png"
                objectFit="cover"
              />
            </Flex>
          </GridItem>

          <GridItem
            // boxShadow="0px 2px 3px #e1e1e1"
            h="100%"
            w="100%"
            // bg="#e5cbba"
            gridArea="3/3/4/4"
            placeContent="center"
            textAlign="center"
          >
            <Text fontWeight="600" fontSize="lg">
              What I use
            </Text>
          </GridItem>
          <GridItem
            boxShadow="0px 2px 3px #e1e1e1"
            h="100%"
            w="100%"
            bg="#f6eee3"
            gridArea="2 / 4 / 4 / 5"
            ref={ref}
            style={{
              transform: isInView ? "none" : "translateX(-200px)",
              opacity: isInView ? 1 : 0,
              transition: "all 250ms cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
              transitionDelay: "200ms",
            }}
          >
            <Flex
              h="100%"
              flexDirection="column"
              justify="space-evenly"
              align="center"
            >
              <Image
                h="40px"
                src="/public/Firebase_Logo.svg.png"
                objectFit="cover"
              />
              <Image h="40px" src="/public/Git-Icon-.png" objectFit="cover" />
            </Flex>
          </GridItem>
          <GridItem
            boxShadow="0px 2px 3px #e1e1e1"
            h="100%"
            w="100%"
            bg="#f6eee3"
            gridArea="4 / 3 / 5 / 5"
            ref={ref}
            style={{
              transform: isInView ? "none" : "translateY(-100px)",
              opacity: isInView ? 1 : 0,
              transition: "all 250ms cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
              transitionDelay: "300ms",
            }}
          >
            <Flex h="100%" justify="space-evenly" align="center">
              <Image
                h="60px"
                src="/public/NET_Core_Logo.svg.png"
                objectFit="cover"
              />
              <Image h="70px" src="/public/sql server.png" objectFit="cover" />
              <Image h="40px" src="/public/sql.png" objectFit="cover" />
            </Flex>
          </GridItem>

          <GridItem
            boxShadow="0px 2px 3px #e1e1e1"
            h="100%"
            w="100%"
            bg="#f6eee3"
            gridArea="3 / 2 / 5 / 3"
            ref={ref}
            style={{
              transform: isInView ? "none" : "translateX(100px)",
              opacity: isInView ? 1 : 0,
              transition: "all 250ms cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
              transitionDelay: "400ms",
            }}
          >
            <Flex
              h="100%"
              flexDirection="column"
              justify="space-evenly"
              align="center"
            >
              <Image h="40px" src="/public/figma.webp" objectFit="cover" />
              <Image
                h="60px"
                src="/public/chakra_ui-removebg-preview.png"
                objectFit="cover"
              />
            </Flex>
          </GridItem>
        </Grid>
      </Flex>

      <Flex
        className="section-wrapper"
        justify="space-evenly"
        position="relative"
        p="72px 81px"
      >
        <Box>
          <Box>
            <Heading>Experiences</Heading>
          </Box>

          <Box p="24px 64px">
            <Box>
              <Heading size="md" color="#1A202C">
                QION-IT Philippines
              </Heading>
              <Box m="16px 0">
                <Text fontWeight="600" fontSize="md">
                  Internship (February 2024 - July 2024)
                </Text>
                <Text>
                  Full-Stack Developer, developed a Know Your Customer
                  application that also manages the users' subscriptions.
                  <br />
                  Due to the internal knowledge of the company I can't disclose
                  anymore than that.
                </Text>
              </Box>
            </Box>
          </Box>
          <Box>
            <Heading>Education</Heading>
          </Box>
          <Box p="24px 64px">
            <Box>
              <Heading size="md" color="#1A202C">
                Gordon College, Olongapo City
              </Heading>
              <Box m="16px 0">
                <Text fontWeight="600" fontSize="md">
                  Bachelor of Science in Computer Science (2018-2024)
                </Text>
                <Text>
                  Full-Stack Developer, developed a Know Your Customer
                  application that also manages the users' subscriptions.
                  <br />
                  Due to the internal knowledge of the company I can't disclose
                  anymore than that.
                </Text>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          ref={pictureRef}
          style={{
            transform: pictureIsActive
              ? "none"
              : "translateY(100px) translateX(-500px)",
            opacity: pictureIsActive ? 1 : 0,
            transition: "all 600ms cubic-bezier(0.17, 0.55, 0.55, 1)",
            transitionDelay: "350ms",
          }}
        >
          <PictureCard />
        </Box>
      </Flex>
    </Box>
  );
};
export default Section;
