import { Heading, Flex, Box, Text, Input, Button } from "@chakra-ui/react";
import React from "react";
import Panel from "./panel";
import Accordian from "./accordian";

const Body = () => {
  return (
    <>
      <Box bg="black">
        <hr />
        <Panel
          title={"Enjoy on your TV."}
          description={
            "Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more."
          }
          src={"./example.mp4"}
          direction={"row"}
        />
        <hr />
        <Panel
          title={"Download your shows to watch offline."}
          description={
            "Save your favourites easily and always have something to watch."
          }
          src={"./things.gif"}
          direction={"row-reverse"}
          hasImg={true}
        />
        <hr />
        <Panel
          title={"Watch everywhere."}
          description={
            "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV."
          }
          src={"./vid.mp4"}
          direction={"row"}
        />
        <hr />
        <Panel
          title={"Create profiles for children."}
          description={
            "Send children on adventures with their favourite characters in a space made just for them—free with your membership."
          }
          src={"./kids.jpg"}
          direction={"row-reverse"}
          hasImg={true}
        />
        <hr />
      </Box>

      <Accordian />

      <Text
        bg="black"
        textAlign={"center"}
        pb={4}
        color="white"
        fontSize={"lg"}
      >
        Ready to watch? Enter your email to create or restart your membership.
      </Text>
      <Box display={"flex"} bg="black" justifyContent={"center"} pb={"10rem"}>
        <Flex align={"center"}>
          <Input
            w={"35rem"}
            bg="white"
            mx={4}
            placeholder="Email address"
            h={"4rem"}
            pl={10}
          ></Input>
          <Button
            color={"white"}
            bg="red"
            _hover={{ bg: "red.600" }}
            h={"4rem"}
            width={"10rem"}
          >
            Get Started
          </Button>
        </Flex>
      </Box>
      <hr />
    </>
  );
};

export default Body;
