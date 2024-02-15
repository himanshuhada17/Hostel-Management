import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

export default function App({ Component, pageProps }: AppProps) {
  const client = new ApolloClient({
    uri: "http://localhost:4000/graphql",
    cache: new InMemoryCache(),
  });
  return (
    <ApolloProvider client={client}>
      <SessionProvider session={pageProps.session}>
        <Component {...pageProps} />
      </SessionProvider>
    </ApolloProvider>
  );
}
