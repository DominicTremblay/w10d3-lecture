const fs = require('fs');
const path = require('path');

const { ApolloServer, gql } = require('apollo-server');

const books = require('./db/books');
const resolvers = require('./resolvers');


const filePath = path.join(__dirname, 'typedefs.graphql')

const typeDefs = fs.readFileSync(filePath, 'utf8');


// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});