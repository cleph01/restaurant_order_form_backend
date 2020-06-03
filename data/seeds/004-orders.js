exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex("order")
        .del()
        .then(function () {
            // Inserts seed entries
            return knex("order").insert([
                {
                    orderId: 1,
                    businessId: 1,
                    userId: 1,
                    total: 36.93,
                },
                {
                    orderId: 2,
                    businessId: 1,
                    userId: 1,
                    total: 66.93,
                },
                {
                    orderId: 3,
                    businessId: 1,
                    userId: 1,
                    total: 33.93,
                },
            ]);
        });
};
