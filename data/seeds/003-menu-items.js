exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex("menuItem")
        .del()
        .then(function () {
            // Inserts seed entries
            return knex("menuItem").insert([
                {
                    businessId: 1,
                    category: "apps",
                    itemName: "KFC",
                    description: "KFC description",
                    price: 1.99,
                    imageURL:
                        "https://res-5.cloudinary.com/upserve/image/upload/c_thumb,g_center,w_150,h_140/v1587414094/rmdhofy8pr1mpvxm4qw1.jpg",
                },
                {
                    businessId: 1,
                    category: "apps",
                    itemName: "Pork Belly Bao",
                    description: "Pork Belly Bao description",
                    price: 2.99,
                    imageURL:
                        "https://res-4.cloudinary.com/upserve/image/upload/c_thumb,g_center,w_150,h_140/v1587414138/gcxd7x0qmyxaytrj3yxy.jpg",
                },
                {
                    businessId: 1,
                    category: "apps",
                    itemName: "Shiitake Bao",
                    description: "Shiitake Bao description",
                    price: 3.99,
                    imageURL:
                        "https://res-4.cloudinary.com/upserve/image/upload/c_thumb,g_center,w_150,h_140/v1588344906/exkzmrouz4y3jtx41jxo.jpg",
                },
                {
                    businessId: 1,
                    category: "noodles",
                    itemName: "Pha Ga",
                    description: "description Pha Ga",
                    price: 4.99,
                    imageURL:
                        "https://res-2.cloudinary.com/upserve/image/upload/c_thumb,g_center,w_150,h_140/v1587414368/y76v85myb0mhivmmxajw.png",
                },
                {
                    businessId: 1,
                    category: "noodles",
                    itemName: "Tonkutsu 2.0",
                    description: "description Tonkutsu 2.0",
                    price: 5.99,
                    imageURL:
                        "https://res-3.cloudinary.com/upserve/image/upload/c_thumb,g_center,w_150,h_140/v1587414425/qwt3sdempavbfwzsfuf6.png",
                },
                {
                    businessId: 1,
                    category: "noodles",
                    itemName: "Spicey Miso",
                    description: "description Spicey Miso",
                    price: 6.99,
                    imageURL:
                        "https://res-4.cloudinary.com/upserve/image/upload/c_thumb,g_center,w_150,h_140/v1587414552/gpl3q7sajnopvcfcoq9z.jpg",
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
