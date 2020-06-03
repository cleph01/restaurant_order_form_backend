const { gql } = require("apollo-server");

module.exports = gql`
    type Query {
        getOrderByBusinessId(businessId: ID!): [Order]
    }
    type Mutation {
        addOrder(input: OrderInput!): String!
        updateOrderStatus(orderId: ID!, status: Int!): String!
    }

    type Order {
        orderId: ID!
        businessId: ID!
        userId: ID!
        total: Float!
        status: Int!
        created_at: String
        updated_at: String
        user: [User!]!
    }

    input OrderInput {
        businessId: ID!
        category: String!
        itemName: String!
        description: String
        price: Float!
        imageURL: String!
        imagename: String!
    }
`;
