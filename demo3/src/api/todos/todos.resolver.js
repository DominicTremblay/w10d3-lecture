module.exports = {
  Query: {
    todos: async (root, args, context, info) => {
      const query = {
        text: 'SELECT * from todos',
      };

      console.log('todos Resolver');

      const result = await context.db.query(query);

      return result.rows;
    },
  },
  Mutation: {
    addTodo: async (root, args, context, info) => {

      const {input: {task, completed, category_id}} = args;

      console.log("ARGS:", args);
      

      console.log('adddTodo Resolver');
      

      const query = {
        text: 'INSERT INTO todos (task, completed, category_id) VALUES ($1, $2, $3) RETURNING *',
        values: [task, completed, category_id] 
      }

      const result = await context.db.query(query)

      return result.rows[0];

    }
  }
};
