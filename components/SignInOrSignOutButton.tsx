import NextLink from "next/link";
import { Box, Spinner, VStack } from "@chakra-ui/react";
import { useAuthState } from "../hooks/useAuthState";
import { getAuth, signOut } from "firebase/auth";

const SignInOrSignOutButton: React.FC = () => {
  const { isSignedIn, isLoading } = useAuthState();

  if (isLoading) return <Spinner />;

  return (
    <VStack>
      {isSignedIn ? (
        <button onClick={() => signOut(getAuth())}>
          ログアウト(※ ログインはないよ)
        </button>
      ) : (
        <NextLink href={"/signup"}>
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
            サインイン
          </Box>
        </NextLink>
      )}
    </VStack>
  );
};

export default SignInOrSignOutButton;
