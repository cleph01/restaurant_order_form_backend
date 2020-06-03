const { gql } = require("apollo-server");

module.exports = gql`
    type Query {
        getBusinessInfo(businessId: ID!): Business
    }
    type Mutation {
        addBusiness(input: BusinessInput!): Business
    }

    type Business {
        businessID: ID!
        ownerUserID: User
        businessName: String
        website: String!
        email: String!
        phoneNumber: String!
        address: String
        city: String
        state: String
        zipCode: String
        latitude: String
        longitude: String
        menuItems: [MenuItem]
        orders: [Order]
    }

    input BusinessInput {
        ownerUserID: ID!
        businessName: String!
        website: String!
        email: String!
        phoneNumber: String!
        address: String!
        city: String!
        state: String!
        zipCode: String!
        latitude: String!
        longitude: String!
    }
`;
