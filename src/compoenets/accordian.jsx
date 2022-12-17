import React, { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Heading,
} from "@chakra-ui/react";

const Accordian = () => {
  const [value, setValue] = useState("");
  return (
    <>
      <Box
        bg={"black"}
        display="flex"
        flexDir={"column"}
        alignItems="center"
        py={"10rem"}
      >
        <Heading textAlign={"center"} color="white">
          Frequently Asked Questions
        </Heading>

        <Accordion index={value} allowMultiple w={"70%"} my={10} color="white">
          <AccordionItem
            fontSize={"1.5rem"}
            border="none"
            bg={"grey"}
            py={5}
            borderRadius={"xl"}
            onClick={() => setValue(0)}
          >
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left" fontSize={"1.5rem"}>
                  What is NFlix?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              NFlix is a streaming service that offers a wide variety of
              award-winning TV shows, movies, anime, documentaries and more – on
              thousands of internet-connected devices. You can watch as much as
              you want, whenever you want, without a single ad – all for one low
              monthly price. There's always something new to discover, and new
              TV shows and movies are added every week!
            </AccordionPanel>
          </AccordionItem>
          <br />
          <AccordionItem
            fontSize={"1.5rem"}
            border="none"
            bg={"grey"}
            py={5}
            borderRadius={"xl"}
            onClick={() => setValue(1)}
          >
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left" fontSize={"1.5rem"}>
                  Where can I watch?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Watch anywhere, anytime. Sign in with your Netflix account to
              watch instantly on the web at netflix.com from your personal
              computer or on any internet-connected device that offers the
              Netflix app, including smart TVs, smartphones, tablets, streaming
              media players and game consoles. You can also download your
              favourite shows with the iOS, Android, or Windows 10 app. Use
              downloads to watch while you're on the go and without an internet
              connection. Take Netflix with you anywhere.
            </AccordionPanel>
          </AccordionItem>
          <br />

          <AccordionItem
            fontSize={"1.5rem"}
            border="none"
            bg={"grey"}
            py={5}
            borderRadius={"xl"}
            onClick={() => setValue(2)}
          >
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left" fontSize={"1.5rem"}>
                  Random
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Watch anywhere, anytime. Sign in with your Netflix account to
              watch instantly on the web at netflix.com from your personal
              computer or on any internet-connected device that offers the
              Netflix app, including smart TVs, smartphones, tablets, streaming
              media players and game consoles. You can also download your
              favourite shows with the iOS, Android, or Windows 10 app. Use
              downloads to watch while you're on the go and without an internet
              connection. Take Netflix with you anywhere.
            </AccordionPanel>
          </AccordionItem>
          <br />

          <AccordionItem
            fontSize={"1.5rem"}
            border="none"
            bg={"grey"}
            py={5}
            borderRadius={"xl"}
            onClick={() => setValue(3)}
          >
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left" fontSize={"1.5rem"}>
                  How to watch?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Watch anywhere, anytime. Sign in with your Netflix account to
              watch instantly on the web at netflix.com from your personal
              computer or on any internet-connected device that offers the
              Netflix app, in
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Box>
    </>
  );
};

export default Accordian;
