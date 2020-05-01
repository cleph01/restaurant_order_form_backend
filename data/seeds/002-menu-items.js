exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex("menuItem")
        .truncate()
        .then(function () {
            // Inserts seed entries
            return knex("menuItem").insert([
                {
                    businessId: 1,
                    category: "apps",
                    itemName: "KFC",
                    description: "KFC description",
                    price: 1.99,
                },
                {
                    businessId: 1,
                    category: "apps",
                    itemName: "Pork Belly Bao",
                    description: "Pork Belly Bao description",
                    price: 2.99,
                },
                {
                    businessId: 1,
                    category: "apps",
                    itemName: "Shiitake Bao",
                    description: "Shiitake Bao description",
                    price: 3.99,
                },
                {
                    businessId: 1,
                    category: "noodles",
                    itemName: "Pha Ga",
                    description: "description Pha Ga",
                    price: 4.99,
                },
                {
                    businessId: 1,
                    category: "noodles",
                    itemName: "Tonkutsu 2.0",
                    description: "description Tonkutsu 2.0",
                    price: 5.99,
                },
                {
                    businessId: 1,
                    category: "noodles",
                    itemName: "Spicey Miso",
                    description: "description Spicey Miso",
                    price: 6.99,
                },
                {
                    businessId: 1,
                    category: "non-alcoholic beverages",
                    itemName: "Spicey Miso",
                    description: "description Spicey Miso",
                    price: 0.95,
                },
                {
                    businessId: 1,
                    category: "non-alcoholic beverages",
                    itemName: "Coke",
                    description: null,
                    price: 0.96,
                },
                {
                    businessId: 1,
                    category: "non-alcoholic beverages",
                    itemName: "Mexican Sprite",
                    description: null,
                    price: 0.97,
                },
            ]);
        });
};
