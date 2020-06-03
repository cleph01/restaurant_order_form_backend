const { gql } = require("apollo-server");

module.exports = gql`
    type Query {
        getUser(id: ID!): User
        getAllUsers: [User!]!
    }
    type Mutation {
        loginUser(cellPhone: String!, password: String!): UserLoginPayload
        addUser(
            firstName: String!
            cellPhone: String!
            password: String!
        ): UserLoginPayload
        updateUser(firstName: String, cellPhone: String, password: String): User
    }
    type User {
        firstName: String
        cellPhone: String
        password: String
    }
    type UserLoginPayload {
        firstName: String
        token: String
    }
    input UserInput {
        firstName: String
        cellPhone: String
        password: String
    }
`;
