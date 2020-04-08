const books = require('./db/books');

const resolvers = {
  Query: {
    books: () => books,
    book: (root, args, context, info) => {
      console.log(args);

      const result = books.find(book => book.id === Number(args.id));
      console.log("result", result)
      return result;
    }
  },
};

module.exports = resolvers;