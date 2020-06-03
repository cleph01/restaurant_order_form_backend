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
        getBusinessInfo: async (parent, { businessId }, context) => {
            return db("business").where({ businessId }).first();
        },
    },
    Business: {
        menuItems(business, args, cxt) {
            return db("menuItem").where({ businessId: business.businessId });
        },
        orders(business, args, cxt) {
            return db("order")
                .where({ businessId: business.businessId })
                .andWhere("status", "<", 3);
        },
    },
    Mutation: {
        addBusiness: async (parent, args, context) => {
            const passwordHash = bcrypt.hashSync(args.password, 9);

            const newUserData = {
                firstName: args.firstName,
                cellPhone: args.cellPhone,
                passwordHash: passwordHash,
            };

            const token = generateToken({
                firstName: args.firstName,
                cellPhone: args.cellPhone,
            });

            try {
                const newUserId = await db("user").insert(newUserData, ["id"]);

                return {
                    message: `UserId: ${newUserId}`,
                    token: token,
                };
            } catch (error) {
                return {
                    message: `Error: ${error}`,
                    token: "",
                };
            }
        },
    },
};
