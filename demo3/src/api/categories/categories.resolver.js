module.exports = {
  Query: {
    categories: async (root, args, context, info) => {
      console.log('Categories Resolver');

      const query = {
        text: 'SELECT * FROM categories',
      };

      const result = await context.db.query(query);

      return result.rows;
    },
  },
};
