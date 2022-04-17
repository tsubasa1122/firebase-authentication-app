import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import "../lib/firebase";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
