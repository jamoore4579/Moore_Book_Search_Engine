const { gql } = require('apollo-server-express');

// list of typeDefs
const typeDefs = gql`
    type Book {
        bookId: ID!
        authors: [String]
        decription: String
        image: String
        link: String
        title: String
    }
    type User {
        _id: ID
        username: String
        email: String
        bookCount: Int
        savedBooks: [Book]
    }
    type Query {
        me: User
    }
    type Auth {
        token: ID!
        user: User
    }
    input InputBook {
        authors: [String]
        description: String
        bookId: String
        image: String
        link: String
        title: String
    }
    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        saveBook(newBook: InputBook!): User
        removeBook(bookId: ID!): User
    }
`;

// export the typeDefs
module.exports = typeDefs;