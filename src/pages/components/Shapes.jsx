import { Box } from "@chakra-ui/react";
import { useState } from "react";
import { Circle, Crosshair, Plus, Square, Triangle } from "react-feather";

const Shapes = () => {
  const [initialPosition, setInitialPosition] = useState();

  return (
    <Box
      h="100%"
      w="100%"
      zIndex="1"
      position="relative"
      className="shapes-wrapper"
    >
      <Box filter="blur(1px)" position="absolute" top="100px" left="1530px">
        <Square size={16} />
      </Box>
      <Box
        transform="rotate(30deg)"
        filter="blur(1px)"
        color="#d5c3ab"
        position="absolute"
        top="330px"
        left="250px"
      >
        <Triangle size={18} />
      </Box>
      <Box
        transform="rotate(80deg)"
        filter="blur(2px)"
        position="absolute"
        top="740px"
        left="390px"
      >
        <Square size={32} />
      </Box>
      <Box filter="blur(1px)" position="absolute" top="500px" left="390px">
        <Circle size={18} />
      </Box>
      <Box
        filter="blur(2px)"
        transform="rotate(80deg)"
        position="absolute"
        top="320px"
        left="1650px"
      >
        <Triangle size={32} />
      </Box>
      <Box filter="blur(1px)" position="absolute" top="620px" left="1150px">
        <Circle size={18} />
      </Box>
      <Box
        filter="blur(1px)"
        color="#d5c3ab"
        position="absolute"
        top="790px"
        left="1550px"
      >
        <Square size={16} />
      </Box>
      <Box
        filter="blur(1px)"
        transform="rotate(180deg)"
        position="absolute"
        top="890px"
        left="950px"
      >
        <Triangle size={18} />
      </Box>
      <Box filter="blur(2px)" position="absolute" top="90px" left="350px">
        <Circle size={32} />
      </Box>
      <Box filter="blur(1px)" position="absolute" top="690px" left="750px">
        <Plus size={18} />
      </Box>
      <Box
        color="#d5c3ab"
        transform="rotate(160deg)"
        position="absolute"
        top="790px"
        left="150px"
      >
        <Plus size={18} />
      </Box>
      <Box
        filter="blur(1px)"
        transform="rotate(50deg)"
        position="absolute"
        top="30px"
        left="1120px"
      >
        <Plus size={18} />
      </Box>
    </Box>
  );
};
export default Shapes;
