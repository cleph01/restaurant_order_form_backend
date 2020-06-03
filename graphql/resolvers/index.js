const mergeResolvers = require("graphql-merge-resolvers");

const user = require("./user");
const business = require("./business");
const menu = require("./menu");
const order = require("./order");

const mainResolver = [user, business, menu, order];

module.exports = mergeResolvers.merge(mainResolver);
