exports.up = function (knex) {
    return knex.schema.createTable("lineItem", (table) => {
        table.increments("lineItemId").notNullable();
        table.integer("orderId").notNullable();
        table.foreign("orderId").references("orderId").inTable("order");
        table.integer("productId");
        table.foreign("productId").references("productId").inTable("menuItem");
        table.text("addOns");
        table.text("specialInstructions");
        table.float("subTotal").notNullable();
        table.timestamps(false, true);
    });
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists("order");
};
