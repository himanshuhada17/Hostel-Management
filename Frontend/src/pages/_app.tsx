import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import Layout from "@/components/Layout";

export default function App({ Component, pageProps }: AppProps) {
  const client = new ApolloClient({
    uri: "http://localhost:4000/graphql",
    cache: new InMemoryCache(),
  });

  return (
    <>
      {/* <Layout> */}
        <ApolloProvider client={client}>
          <Component {...pageProps} />
        </ApolloProvider>
      {/* </Layout> */}
    </>
  );
}
