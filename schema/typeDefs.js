const { gql } = require("apollo-server-express");

module.exports = gql`
    scalar DateTime
    type Query {
        getUser(id: ID!): User
        getAllUsers: [User!]!
        getMenuItems(businessId: ID!): [MenuItem]
        getBusinessInfo(businessId: ID!): Business
    }
    type Mutation {
        updateUser(
            id: ID!
            firstName: String
            lastName: String
            email: String
        ): User
        # createWorkHistory()
        # updateWorkHistory
        # createEducationHistory
        # updateEducationHistory
        # figure out mutations on skills
    }

    type User {
        userId: ID!
        firstName: String
        lastName: String
        cellPhone: String
        email: String
        passwordHash: String
        role: Int
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
`;
