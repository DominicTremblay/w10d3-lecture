module.exports = {
  Query: {
    games: async (root, args, context, info) => {
      console.log('Games Resolver');

      // create an SQL Query
      const query = {
        text: `SELECT * FROM games`,
      };

      // Run the query => Async
      const result = await context.db.query(query);

      // return the result
      return result.rows;
    },
    game: async (root, args, context) => {
      const { id } = args;

      console.log('Specific Game Resolver');

      const query = {
        text: `SELECT * FROM games WHERE id = $1`,
        values: [id],
      };

      const result = await context.db.query(query);

      return result.rows[0];
    },
  },
  Mutation: {
    addNewGame: async (root, args, context) => {
      console.log('addNewGame Resolver');

      const {
        input: { title, rating, genre },
      } = args;

      // const title = args.input.title;
      // const rating =args.input.rating;
      // const genre = args.input.rating;

      const query = {
        text: `INSERT INTO games (title, rating, genre) VALUES ($1, $2, $3) RETURNING *`,
        values: [title, rating, genre],
      };

      const result = await context.db.query(query);

      return result.rows[0];
    },
    deleteGame: async (root, args, context) => {
      // extract the id from args
      const { id } = args;

      // Write delete query
      const query = {
        text: `DELETE FROM games WHERE id = $1`,
        values: [id],
      };

      // run the query
      try {
        const result = await context.db.query(query);
        return {
          msg: `Game with id:${id} deleted`,
        };
      } catch(err) {
        return {
          msg: `Error: ${err.message}`
        }
      }

    },
  },
};
