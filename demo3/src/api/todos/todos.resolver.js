module.exports = {
  Query: {
    todos: async (root, args, context, info) => {
      console.log('Todos Resolver');

      const query = {
        text: 'SELECT * FROM todos',
      };

      const result = await context.db.query(query);

      console.log(result.rows);

      return result.rows;
    },
  },
  Mutation: {
    addTodo: async (root, args, context, info) => {
      console.log('addTodo Resolver');

      const {
        input: { task, completed, category_id },
      } = args;

      const query = {
        text:
          'INSERT INTO todos (task, completed, category_id) VALUES ($1, $2, $3) RETURNING *',
        values: [task, completed, category_id],
      };

      const result = await context.db.query(query);

      console.log(result.rows[0]);

      return result.rows[0];
    },
    deleteTodo: async (root, args, context, info) => {
      console.log('deleteTodo Resolver');
      const { id } = args;
      console.log({ id });

      const query = {
        text: 'DELETE FROM todos WHERE id = $1',
        values: [id],
      };

      try {
        const result = await context.db.query(query);
        return { msg: `Todo with id ${id} deleted` };
      } catch (err) {
        console.log('Error deleting todo');
      }
    },

    updateTodo: async (root, args, context, info) => {
      console.log('Update Todo Resolver');

      const queryArgs = Object.keys(args.input)
        .map((arg, index) => {
          if (arg !== 'id') {
            return `${arg} = $${index + 1}`;
          }
        })
        .filter((arg) => arg !== undefined);

      console.log(queryArgs);
      console.log(Object.values(args.input));
      

      const query = {
        text: `UPDATE todos SET ${queryArgs} WHERE id=$1 RETURNING *`,
        values: Object.values(args.input)
      }

      

      try {
        const result = await context.db.query(query);
        
        return result.rows[0];
      } catch(err) {
        console.log('Error updating todo', err);
      }

    },
  },
};
