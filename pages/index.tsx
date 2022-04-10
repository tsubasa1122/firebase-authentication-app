import type { NextPage } from "next";
import NextLink from "next/link";
import { Box, chakra, Container, VStack } from "@chakra-ui/react";

const Home: NextPage = () => {
  return (
    <Container maxW="md" padding={10} textAlign="center">
      <chakra.h1 textAlign="center" fontSize={24}>
        Homeページだよ
      </chakra.h1>
      <VStack>
        <NextLink href={"/login"}>
          <Box
            as="span"
            textAlign="center"
            marginTop={4}
            cursor="pointer"
            backgroundColor="teal.500"
            color="white"
            fontSize={16}
            paddingX={6}
            paddingY={2}
            borderRadius={10}
          >
            ログイン
          </Box>
        </NextLink>
      </VStack>
    </Container>
  );
};

export default Home;
