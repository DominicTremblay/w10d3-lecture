const typeDefs = require('../../utils/loadSchema')(
  'platforms/platforms.graphql'
);
const resolvers = require('./platforms.resolver.js');

module.exports = {
  typeDefs,
  resolvers,
};
