const books = require('./db');
// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
const resolvers = {
  Query: {
    // How you get the books
    books: () => books,
    book: (root, args, context, info) => books.find(book => {
    
      console.log(args);
      
      return book.id === Number(args.id)
    
    }) 
  },
};

module.exports = resolvers;