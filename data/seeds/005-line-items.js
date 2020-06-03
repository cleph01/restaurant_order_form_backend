exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex("lineItem")
        .del()
        .then(function () {
            // Inserts seed entries
            return knex("lineItem").insert([
                {
                    lineItemId: 1,
                    orderId: 1,
                    productId: 1,
                    addOns: "Add On 1, Add on 2",
                    specialInstructions: "Special Instrux",
                    subTotal: 66.89,
                },
                {
                    lineItemId: 2,
                    orderId: 1,
                    productId: 2,
                    addOns: "Add On 1, Add on 2",
                    specialInstructions: "Special Instrux",
                    subTotal: 66.89,
                },
                {
                    lineItemId: 3,
                    orderId: 1,
                    productId: 3,
                    addOns: "Add On 1, Add on 2",
                    specialInstructions: "Special Instrux",
                    subTotal: 66.89,
                },
                {
                    lineItemId: 4,
                    orderId: 2,
                    productId: 4,
                    addOns: "Add On 1, Add on 2",
                    specialInstructions: "Special Instrux",
                    subTotal: 66.89,
                },
                {
                    lineItemId: 5,
                    orderId: 2,
                    productId: 5,
                    addOns: "Add On 1, Add on 2",
                    specialInstructions: "Special Instrux",
                    subTotal: 66.89,
                },
                {
                    lineItemId: 6,
                    orderId: 2,
                    productId: 6,
                    addOns: "Add On 1, Add on 2",
                    specialInstructions: "Special Instrux",
                    subTotal: 66.89,
                },
                {
                    lineItemId: 7,
                    orderId: 3,
                    productId: 7,
                    addOns: "Add On 1, Add on 2",
                    specialInstructions: "Special Instrux",
                    subTotal: 66.89,
                },
                {
                    lineItemId: 8,
                    orderId: 3,
                    productId: 8,
                    addOns: "Add On 1, Add on 2",
                    specialInstructions: "Special Instrux",
                    subTotal: 66.89,
                },
                {
                    lineItemId: 9,
                    orderId: 3,
                    productId: 9,
                    addOns: "Add On 1, Add on 2",
                    specialInstructions: "Special Instrux",
                    subTotal: 66.89,
                },
            ]);
        });
};
