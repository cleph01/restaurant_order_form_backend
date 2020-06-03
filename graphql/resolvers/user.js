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
        getUser: async (parent, { id }, context) => {
            return db("user").where({ id }).first();
        },
        getAllUsers: async (parent, _, context) => {
            return db("user");
        },
    },
    Mutation: {
        addUser: async (parent, args, context) => {
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
        
    },
    
};
