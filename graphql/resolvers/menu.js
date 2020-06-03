const bcrypt = require("bcryptjs");

const secrets = require("../../config/secrets.js");

const jwt = require("jsonwebtoken");

const db = require("../../data/knexConfig");

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
        getMenuItemsByBusinessId: async (parent, args, context) => {
            return db("menuItem").where({ businessId: args.businessId });
        },
    },
    Mutation: {
        addMenuItem: async (parent, { input }, context) => {
            try {
                // const newItem = {
                //     businessId: args.businessId,
                //     itemName: args.itemName,
                //     category: args.category,
                //     description: args.description,
                //     price: args.price,
                //     imageURL: args.imageURL,
                // };
                const [newItemId] = await db("menuitem").insert(input, ["id"]);

                console.log(newItemId, "\n New Item Id");

                return newItemId;
            } catch (error) {
                console.log(error);
            }
        },
    },
};
