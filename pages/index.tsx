import type { NextPage } from "next";
import { chakra, Container } from "@chakra-ui/react";
import SignInOrSignOutButton from "../components/SignInOrSignOutButton";

const Home: NextPage = () => {
  return (
    <Container maxW="md" padding={10} textAlign="center">
      <chakra.h1 textAlign="center" fontSize={24}>
        Homeページだよ
      </chakra.h1>
      <SignInOrSignOutButton />
    </Container>
  );
};

export default Home;
