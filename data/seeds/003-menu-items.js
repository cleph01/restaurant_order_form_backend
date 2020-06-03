exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex("menuItem")
        .del()
        .then(function () {
            // Inserts seed entries
            return knex("menuItem").insert([
                {
                    productId: 1,
                    businessId: 1,
                    category: "apps",
                    itemName: "KFC",
                    description: "KFC description",
                    price: 1.99,
                    imageURL:
                        "https://res-5.cloudinary.com/upserve/image/upload/c_thumb,g_center,w_150,h_140/v1587414094/rmdhofy8pr1mpvxm4qw1.jpg",
                    imageName: "test-name-1.jpg",
                },
                {
                    productId: 2,
                    businessId: 1,
                    category: "apps",
                    itemName: "Pork Belly Bao",
                    description: "Pork Belly Bao description",
                    price: 2.99,
                    imageURL:
                        "https://res-4.cloudinary.com/upserve/image/upload/c_thumb,g_center,w_150,h_140/v1587414138/gcxd7x0qmyxaytrj3yxy.jpg",
                    imageName: "test-name-2.jpg",
                },
                {
                    productId: 3,
                    businessId: 1,
                    category: "apps",
                    itemName: "Shiitake Bao",
                    description: "Shiitake Bao description",
                    price: 3.99,
                    imageURL:
                        "https://res-4.cloudinary.com/upserve/image/upload/c_thumb,g_center,w_150,h_140/v1588344906/exkzmrouz4y3jtx41jxo.jpg",
                    imageName: "test-name-3.jpg",
                },
                {
                    productId: 4,
                    businessId: 1,
                    category: "noodles",
                    itemName: "Pha Ga",
                    description: "description Pha Ga",
                    price: 4.99,
                    imageURL:
                        "https://res-2.cloudinary.com/upserve/image/upload/c_thumb,g_center,w_150,h_140/v1587414368/y76v85myb0mhivmmxajw.png",
                    imageName: "test-name-4.jpg",
                },
                {
                    productId: 5,
                    businessId: 1,
                    category: "noodles",
                    itemName: "Tonkutsu 2.0",
                    description: "description Tonkutsu 2.0",
                    price: 5.99,
                    imageURL:
                        "https://res-3.cloudinary.com/upserve/image/upload/c_thumb,g_center,w_150,h_140/v1587414425/qwt3sdempavbfwzsfuf6.png",
                    imageName: "test-name-5.jpg",
                },
                {
                    productId: 6,
                    businessId: 1,
                    category: "noodles",
                    itemName: "Spicey Miso",
                    description: "description Spicey Miso",
                    price: 6.99,
                    imageURL:
                        "https://res-4.cloudinary.com/upserve/image/upload/c_thumb,g_center,w_150,h_140/v1587414552/gpl3q7sajnopvcfcoq9z.jpg",
                    imageName: "test-name-6.jpg",
                },
                {
                    productId: 7,
                    businessId: 1,
                    category: "non-alcoholic beverages",
                    itemName: "Gingerale",
                    description: null,
                    price: 0.95,
                },
                {
                    productId: 8,
                    businessId: 1,
                    category: "non-alcoholic beverages",
                    itemName: "Coke",
                    description: null,
                    price: 0.96,
                },
                {
                    productId: 9,
                    businessId: 1,
                    category: "non-alcoholic beverages",
                    itemName: "Mexican Sprite",
                    description: null,
                    price: 0.97,
                },
            ]);
        });
};
