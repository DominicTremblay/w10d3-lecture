module.exports = {
  Query: {
    categories: async (root, args, context, info) => {
      console.log('categories Resolver');

      const query = {
        text: 'SELECT * FROM categories',
      };

      const result = await context.db.query(query);

      console.log('Result:', result.rows);

      return result.rows;
    },
  },
}
