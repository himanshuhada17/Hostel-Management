import express from "express";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";

async function init() {
  const app = express();
  const PORT = 4000;
  app.use(express.json());

  // create a  graphql server
  const gqlServer = new ApolloServer({
    typeDefs: `
    type Query {
        hello: String
    }
        `,
    resolvers: {
        Query : {
            hello: () => "Hello World"
        }
    },
  });

  // start the gql server
  await gqlServer.start();

  app.get("/", (req, res) => {
    res.json({ message: "server is up and running" });
  });

  app.use("/graphql", expressMiddleware(gqlServer));

  app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
  });
}
init();
