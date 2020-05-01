exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex("business")
        .truncate()
        .then(function () {
            // Inserts seed entries
            return knex("business").insert([
                {
                    ownerId: 1,
                    businessName: "Mecha Noodle Bar",
                    website: "https://mechanoodle.com",
                    email: "test@test.com",
                    phoneNumber: "5555555555",
                    address: "116 Washington Street",
                    city: "Norwalk",
                    state: "CT",
                    zipCode: "06854",
                    latitude: "41.0149398",
                    longitude: "-73.6653936",
                },
            ]);
        });
};
