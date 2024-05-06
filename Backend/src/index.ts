import express from "express";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { db_connection } from "./database";
import { buildSchema } from "type-graphql";
import { UserResolver } from "./resolver/UserResolver";

import "reflect-metadata";
import cors from 'cors'
import { PersonResolver } from "./resolver/PersonResolver";
import { RoomResolver } from "./resolver/RoomResolver";
import { BedResolver } from "./resolver/BedResolver";
import { RentResolver } from "./resolver/RentResolver";

async function server_setup() {
  const app = express();
  app.use(cors())
  const PORT = 4000;
  app.use(express.json());

  // create a  graphql server
  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [UserResolver,PersonResolver,RoomResolver,BedResolver,RentResolver],
    }),
  });

  // start the apollo server
  await apolloServer.start();

  // app.get("/", (req, res) => {
  //   res.json({ message: "server is up and running" });
  // });

  app.use("/graphql", expressMiddleware(apolloServer));

  app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
  });
}
server_setup();
db_connection();
