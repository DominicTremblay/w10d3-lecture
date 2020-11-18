const {GraphQLServer} = require('graphql-yoga');
const graphqlConfig = require('./config');

const server = new GraphQLServer(graphqlConfig);

server.start(()=> console.log(`Server is running on port 4000`));