import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
                _id
                username
            }
        }
    }
`;

export const ADD_USER = gql`
    mutation addUser($username: String!, $email: String!, $password: String!) {
        addUser(username: $username, email: $email, password: $password) {
            token
            user{
                _id
                username
                email
                bookCount
                savedBooks {
                    authors
                    bookId
                    image
                    link
                    title
                    description
                }
            }
        }
    }
`;

export const SAVE_BOOK = gql`
    mutation saveBook($book: SavedBookInput!) {
        saveBook(newBook: $newbook) {
            _id
            username
            email
            savedBooks {
                authors
                description
                bookId
                image
                link
                title
            }
        }
    }
`;

export const REMOVE_BOOK = gql`
    mutation removeBook($bookId: ID!) {
        removeBook(bookId: $bookId) {
            username
            email
            _id
            savedBooks {
                authors
                description
                bookId
                image
                link
                title
            }
        }
    }
`;