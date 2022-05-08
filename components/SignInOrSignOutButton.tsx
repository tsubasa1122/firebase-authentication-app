import NextLink from "next/link";
import { Box, Spinner, VStack } from "@chakra-ui/react";
import { getAuth, signOut } from "firebase/auth";

type Props = {
  isSignedIn: boolean;
  isLoading: boolean;
};

const SignInOrSignOutButton: React.FC<Props> = ({ isSignedIn, isLoading }) => {
  if (isLoading) return <Spinner />;

  return (
    <VStack>
      {isSignedIn ? (
        <button onClick={() => signOut(getAuth())}>ログアウト</button>
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
