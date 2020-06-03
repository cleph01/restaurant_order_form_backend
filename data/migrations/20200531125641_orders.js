exports.up = function (knex) {
    return knex.schema.createTable("order", (table) => {
        table.increments("orderId").notNullable();
        table.integer("businessId").notNullable();
        table
            .foreign("businessId")
            .references("businessId")
            .inTable("business");
        table.text("userId").notNullable();
        table.foreign("userId").references("userId").inTable("user");
        table.float("total").notNullable();
        table.integer("status").defaultTo(0);
        table.timestamps(false, true);
    });
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists("order");
};
