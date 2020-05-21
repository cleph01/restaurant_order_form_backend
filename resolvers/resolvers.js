const bcrypt = require("bcryptjs");

const secrets = require("../config/secrets.js");

const jwt = require("jsonwebtoken");

const db = require("../data/knexConfig");

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
        getUser: async (parent, { id }, context) => {
            return db("user").where({ id }).first();
        },
        getAllUsers: async (parent, _, context) => {
            return db("user");
        },
        getMenuItems: async (parent, _, context) => {
            return db("menuItem").where({ businessId: parent.businessId });
        },
        getBusinessInfo: async (parent, { businessId }, context) => {
            return db("business").where({ businessId }).first();
        },
        token: (parent, args, context) => {
            return context.token;
        },
    },
    Business: {
        menuItems(business, args, cxt) {
            const raw_response = db("menuItem").where({
                businessId: business.businessId,
            });

            //Holds list of categories
            // let category_array = [];

            // for (i = 0; i < raw_response.length; i++) {
            //     // if (!category_array.includes(raw_response[i].category)) {
            //     //     category_array.push(raw_response[i].category);
            //     // }
            //     category_array.push(raw_response[i].category);
            // }

            return db("menuItem").where({ businessId: business.businessId });
        },
    },
    Mutation: {
        createUser: async (parent, args, context) => {
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
        loginUser: async (parent, args, context) => {
            try {
                const user = await db("user")
                    .where({
                        cellPhone: args.cellPhone,
                    })
                    .first();

                // const validpass = await bcrypt.compareSync(
                //     args.password,
                //     user.password
                // );
                const validpass = true;

                if (validpass) {
                    const token = generateToken({
                        firstName: user.firstName,
                        cellPhone: user.cellPhone,
                    });

                    console.log(token, "\n El Token");

                    console.log(user, "\n El User");

                    return {
                        firstName: user.firstName,
                        token: token,
                    };
                }
                return {
                    message: "Invalid Credentials",
                    token: "nada",
                };
            } catch (e) {
                console.log(e);
            }
        },
        createMenuItem: async (parent, args, context) => {
            try {
                const newItem = {
                    businessId: args.businessId,
                    itemName: args.itemName,
                    category: args.category,
                    description: args.description,
                    price: args.price,
                    imageURL: args.imageURL,
                };
                const [newItemId] = await db("menuitem").insert(newItem, [
                    "id",
                ]);

                console.log(newItemId, "\n New Item Id");

                return { itemId: newItemId, message: "Item Added" };
            } catch (error) {
                console.log(error);
            }
        },
    },
    // updateUser: async (_, args, context) => {
    //     // console.log(args, "getUpdatedUser Body");

    //     const updatedUser = await updateUser(context.token, args);

    //     // console.log(updatedUser, "Updated User Holy Grail =====");

    //     return { userInfo: JSON.stringify(updatedUser) };
    // },
};
