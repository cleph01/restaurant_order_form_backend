exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex("user")
        .del()
        .then(function () {
            // Inserts seed entries
            return knex("user").insert([
                {
                    firstName: "Charlie",
                    cellPhone: "9143125729",
                    passwordHash: "test",
                    email: "charlie@test.com",
                },
                {
                    firstName: "Jason",
                    cellPhone: "5515560079",
                    passwordHash: "test",
                    email: "charlie@test.com",
                },
                {
                    firstName: "Test-User",
                    cellPhone: "5555555555",
                    passwordHash: "test",
                    email: "user@test.com",
                },
            ]);
        });
};
