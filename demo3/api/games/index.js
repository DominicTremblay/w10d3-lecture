const typeDefs = require('../../utils/loadSchema')('games/games.graphql');
const resolvers = require('./games.resolver');

module.exports = {
  typeDefs,
  resolvers,
};
