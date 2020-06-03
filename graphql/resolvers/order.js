const bcrypt = require("bcryptjs");

const secrets = require("../../config/secrets.js");

const jwt = require("jsonwebtoken");

const db = require("../../data/knexConfig");

const format = require("date-format");

function generateToken(user) {
    const payload = {
        firstName: user.firstName,
        cellPhone: user.cellPhone,
        // ...otherData
    };

    const options = {
        expiresIn: "1d", // show other available options in the library's documentation
    };

    // extract the secret away so it can be required and used where needed
    return jwt.sign(payload, secrets.jwtSecret, options); // this method is synchronous
}

module.exports = {
    Query: {
        getOrderByBusinessId: (parent, { businessId }, context) => {
            return db("order").where({ businessId: businessId });
        },
    },
    Order: {
        user(order, args, cxt) {
            return db("user").where({ userId: order.userId });
        },
    },
    Mutation: {
        addOrder: async (parent, args, context) => {
            const [newOrderId] = await db("order").insert(newOrderData, [
                "orderId",
            ]);

            return newOrderId;
        },
        updateOrderStatus: async (parent, args, context) => {
            const now = format("yyyy-MM-dd hh:mm:ss", new Date());

            const newStatus = await db("order")
                .where({ orderId: args.orderId })
                .update({ status: args.status, updated_at: now }, [
                    "orderId",
                    "status",
                ]);

            return newStatus;
        },
    },
};
