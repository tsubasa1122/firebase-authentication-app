import type { NextPage } from "next";
import { chakra, Container } from "@chakra-ui/react";
import SignInOrSignOutButton from "../components/SignInOrSignOutButton";
import { useEffect, useState } from "react";
import { useAuthState } from "../hooks/useAuthState";
import axios from "axios";

const Home: NextPage = () => {
  const { isSignedIn, isLoading, idToken } = useAuthState();
  // 雑にバックエンドから受け取った値を表示する
  const [backendMessage, setBackendMessage] = useState<string>("");

  useEffect(() => {
    if (idToken) {
      const authorizationRequest = async () => {
        // URLを変数化したいが一旦ベタがきする
        const res = await axios.get("http://localhost:8000/api/hc", {
          headers: {
            Authorization: idToken,
          },
        });

        setBackendMessage(res.data.name);
      };

      authorizationRequest();
    }
  }, [idToken]);

  return (
    <Container maxW="md" padding={10} textAlign="center">
      <chakra.h1 textAlign="center" fontSize={24}>
        Homeページだよ
      </chakra.h1>
      <SignInOrSignOutButton isSignedIn={isSignedIn} isLoading={isLoading} />
      <chakra.h2>{backendMessage}</chakra.h2>
    </Container>
  );
};

export default Home;
