import React from "react";
import { Heading, Flex, Box, Text, Image } from "@chakra-ui/react";

const Panel = (props) => {
  const { title, description, src, direction, hasImg } = props;
  return (
    <Flex
      justify={"space-around"}
      py={"10rem"}
      align="center"
      flexDir={{ base: "column", lg: direction }}
    >
      <Box color={"white"} w={"40%"}>
        <Heading fontSize={"3.5rem"}>{title}</Heading>
        <br />
        <Text fontSize={"1.5rem"}>{description}</Text>
      </Box>
      {hasImg ? (
        <Box border={"2px solid white"} borderRadius={"lg"} position="relative">
          <Box p={2}>
            <Image src={src} w={"15rem"} h={"25rem"}></Image>
          </Box>
          <Box
            w={10}
            h={10}
            bg="white"
            position={"absolute"}
            left={"7rem"}
            bottom={"1rem"}
            borderRadius="50%"
          ></Box>
          <Box
            w={"6rem"}
            h={5}
            bg="black"
            position={"absolute"}
            left={"5.3rem"}
            top={"1rem"}
            borderRadius="15px"
          ></Box>
        </Box>
      ) : (
        <Box width={"40%"} border={"2px solid white"} borderRadius={"lg"}>
          <Box p={4}>
            <video src={src} loop autoPlay muted></video>
          </Box>
        </Box>
      )}
    </Flex>
  );
};

export default Panel;
