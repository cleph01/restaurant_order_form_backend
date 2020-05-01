exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex("user")
        .truncate()
        .then(function () {
            // Inserts seed entries
            return knex("user").insert([
                {
                    firstName: "Charlie",
                    cellPhone: "9143125729",
                    passwordHash: "test",
                    email: "charlie@test.com",
                    role: 0,
                },
                {
                    firstName: "Jason",
                    cellPhone: "5515560079",
                    passwordHash: "test",
                    email: "charlie@test.com",
                    role: 0,
                },
                {
                    firstName: "Test-User",
                    cellPhone: "5555555555",
                    passwordHash: "test",
                    email: "user@test.com",
                    role: 1,
                },
            ]);
        });
};
