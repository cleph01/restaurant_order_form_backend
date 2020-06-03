const { gql } = require("apollo-server");

module.exports = gql`
    scalar DateTime
    type Query {
        getUser(id: ID!): User
        getAllUsers: [User!]!
        getMenuItems(businessId: ID!): [MenuItem]
        getBusinessInfo(businessId: ID!): Business
        token: String
    }
    type Mutation {
        loginUser(cellPhone: String!, password: String!): UserLoginPayload
        createUser(
            firstName: String!
            cellPhone: String!
            password: String!
        ): UserLoginPayload
        createMenuItem(
            businessId: ID!
            itemName: String!
            category: String!
            description: String!
            price: Float!
            imageURL: String!
        ): NewMenuItem!
        updateUser(firstName: String, cellPhone: String, password: String): User
    }
    type User {
        firstName: String
        cellPhone: String
        password: String
    }
    type Business {
        businessId: ID!
        owner: User
        businessName: String
        website: String
        email: String
        phoneNumber: String
        address: String
        city: String
        state: String
        zipCode: String
        latitude: String
        longitude: String
        menuItems: [MenuItem]
    }
    type MenuItem {
        menuId: ID!
        business: Business
        category: String
        itemName: String
        description: String
        price: Float
        soldOut: String
    }
    type UserLoginPayload {
        firstName: String
        token: String
    }
    type NewMenuItem {
        itemId: ID!
        message: String!
    }
`;
