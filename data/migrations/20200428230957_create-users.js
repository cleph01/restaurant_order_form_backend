exports.up = function (knex) {
    return knex.schema.createTable("user", (table) => {
        table.increments("userId").notNullable();
        table.text("firstName").notNullable();
        table.text("cellPhone").notNullable().unique();
        table.text("passwordHash").notNullable();
        table.text("email");
        table.integer("role").notNullable();
    });
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists("user");
};
