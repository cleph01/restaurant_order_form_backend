exports.up = function (knex) {
    return knex.schema.createTable("menuItem", (table) => {
        table.increments("productId").notNullable();
        table.integer("businessId").notNullable();
        table
            .foreign("businessId")
            .references("businessId")
            .inTable("business");
        table.text("category").notNullable();
        table.text("itemName").notNullable();
        table.text("description");
        table.decimal("price").notNullable();
        table.text("soldOut").defaultTo("n");
        table.text("imageURL");
    });
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists("menuItem");
};
