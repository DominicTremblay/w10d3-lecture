
// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
const resolvers = {
  Query: {
    books: () => books,
    book: (root, args, context, info) => {
      console.log("book Resolver");
      console.log('args:', args);
      
      const result = books.find(book => book.id === Number(args.id))
      console.log("result:", result);
      return result;
    }
  },
};