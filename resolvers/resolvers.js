// const db = require("../database/config/dbConfig");
const db = require("../data/knexConfig");

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
    // Mutation: {
    //     createUser: (parent, { data }) => {
    //         return db("users").insert({ data });
    //     },
    //     getUpdatedUser: async (_, args, context) => {
    //         // console.log(args, "getUpdatedUser Body");

    //         const updatedUser = await updateUser(context.token, args);

    //         // console.log(updatedUser, "Updated User Holy Grail =====");

    //         return { userInfo: JSON.stringify(updatedUser) };
    //     },
    // },
};
