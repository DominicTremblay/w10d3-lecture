const { db } = require('./db/connect');
const merge = require('lodash/merge');
const games = require('./api/games');
const platforms = require('./api/platforms');

const graphqlConfig = {
  typeDefs: [games.typeDefs, platforms.typeDefs].join(' '),
  resolvers: merge({}, platforms.resolvers, games.resolvers),
  context: {
    db,
  },
};

module.exports = graphqlConfig;
