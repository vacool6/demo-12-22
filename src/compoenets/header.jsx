import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import { useRouter } from "next/router";
import logo from "../../public/logo.png";

const Header = () => {
  const router = useRouter();
  return (
    <>
      <Box position={"relative"}>
        <Flex
          justify={"space-between"}
          py={10}
          px={"5rem"}
          bg="gray"
          opacity={"0.8"}
        >
          <Image src={logo} width={140} height={100}></Image>
          <Button
            bg="red"
            color={"white"}
            _hover={{ bg: "red.600" }}
            onClick={() => router.push("/sign")}
          >
            Sign in
          </Button>
        </Flex>
        <Box
          bgImage={
            "url(https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iqqfxT2Wc.6U/v0/1200x-1.jpg)"
          }
          minH={"85vh"}
          backgroundRepeat="no-repeat"
          backgroundSize={"cover"}
          filter={"blur(10px)"}
        ></Box>
        <Box
          display={"flex"}
          flexDir="column"
          alignItems={"center"}
          position="absolute"
          w={"100%"}
          top={"25rem"}
          color="white"
        >
          <Heading fontSize={"3.5rem"}>
            Unlimited movies, TV shows and more. .
          </Heading>
          <Text fontSize={"2.5rem"} my={10}>
            Watch anywhere. Cancel anytime.
          </Text>
          <Text fontSize={"1.5rem"}>
            Ready to watch? Enter your email to create or restart your
            membership
          </Text>
        </Box>
      </Box>
    </>
  );
};

export default Header;
