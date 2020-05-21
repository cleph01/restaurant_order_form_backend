require("dotenv").config();

const { ApolloServer } = require("apollo-server");

// GraphQL Schema
const typeDefs = require("./schema/typeDefs");
const resolvers = require("./resolvers/resolvers");

const PORT = process.env.PORT || 8000;
const HOST = process.env.BASE_URL || "localhost";
const baseURL = `http://${HOST}:${PORT}`;

const apollo = new ApolloServer({
    typeDefs,
    resolvers,
    playground: true,
    context: ({ req }) => {
        // Get the user token from the headers.
        const token = req.headers.authorization || "";

        console.log(token);
        return { token };
    },
});

apollo.listen({ port: PORT }).then(({ url }) => {
    console.log(`\n 🚀 Server listening on ${url} 🚀 \n`);
});
