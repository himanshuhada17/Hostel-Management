"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const server_1 = require("@apollo/server");
const express4_1 = require("@apollo/server/express4");
const database_1 = require("./database");
const type_graphql_1 = require("type-graphql");
const UserResolver_1 = require("./resolver/UserResolver");
const RentResolver_1 = require("./resolver/RentResolver");
const PersonResolver_1 = require("./resolver/PersonResolver");
require("reflect-metadata");
const cors_1 = __importDefault(require("cors"));
function server_setup() {
    return __awaiter(this, void 0, void 0, function* () {
        const app = (0, express_1.default)();
        app.use((0, cors_1.default)());
        const PORT = 4000;
        app.use(express_1.default.json());
        // create a  graphql server
        const apolloServer = new server_1.ApolloServer({
            schema: yield (0, type_graphql_1.buildSchema)({
                resolvers: [UserResolver_1.UserResolver, RentResolver_1.RentResolver, PersonResolver_1.PersonResolver],
            }),
        });
        // start the apollo server
        yield apolloServer.start();
        // app.get("/", (req, res) => {
        //   res.json({ message: "server is up and running" });
        // });
        app.use("/graphql", (0, express4_1.expressMiddleware)(apolloServer));
        app.listen(PORT, () => {
            console.log(`Server is running at http://localhost:${PORT}`);
        });
    });
}
server_setup();
(0, database_1.db_connection)();
