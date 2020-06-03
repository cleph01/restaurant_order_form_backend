const { gql } = require("apollo-server");

module.exports = gql`
    type Query {
        getMenuItemsByBusinessId(businessId: ID!): [MenuItem!]!
    }
    type Mutation {
        addMenuItem(input: MenuItemInput!): String!
    }

    type MenuItem {
        productId: ID!
        businessId: ID!
        category: String!
        itemName: String!
        description: String
        price: Float!
        soldOut: String!
        imageURL: String
        imagename: String
        created_at: String!
        updated_at: String!
    }

    input MenuItemInput {
        businessId: ID!
        category: String!
        itemName: String!
        description: String
        price: Float!
        imageURL: String!
        imagename: String!
    }
`;
