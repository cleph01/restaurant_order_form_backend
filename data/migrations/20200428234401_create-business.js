exports.up = function (knex) {
    return knex.schema.createTable("business", (table) => {
        table.increments("businessId").notNullable();
        table.integer("ownerId").notNullable();
        table.foreign("ownerId").references("userId").inTable("user");
        table.text("businessName").notNullable();
        table.text("website");
        table.text("email");
        table.text("phoneNumber");
        table.text("address").notNullable();
        table.text("city").notNullable();
        table.text("state").notNullable();
        table.text("zipCode").notNullable();
        table.text("latitude").notNullable();
        table.text("longitude").notNullable();
        table.timestamps(false, true);
    });
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists("business");
};
