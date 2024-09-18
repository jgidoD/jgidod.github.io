import { Box, Image, Text } from "@chakra-ui/react";
import "./PictureCard.css";
const PictureCard = () => {
  return (
    <>
      <Box className="flip-card" tabIndex="0">
        <Box className="flip-card-inner">
          <Box className="flip-card-front">
            <Image src="/public/grad pic nobg barong.png" h="300px"/>
            <Box></Box>
          </Box>
          <Box className="flip-card-back">
            <Image src="/public/grad_pic__toga-removebg.png" h="300px" />
          </Box>
        </Box>
      </Box>
    </>
  );
};
export default PictureCard;
