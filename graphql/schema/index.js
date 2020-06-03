const { mergeTypes } = require("merge-graphql-schemas");

const business = require("./business");
const menu = require("./menu");
const user = require("./user");
const order = require("./order");

const schemaArray = [business, menu, user, order];

module.exports = mergeTypes(schemaArray);
