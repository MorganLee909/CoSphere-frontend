export default [
    {
        name: "tableObject",
        title: "Table Object",
        data: {
            Properties: [
                {
                    name: "_id",
                    type: "string",
                    description: "Unique identifier for the table"
                },
                {
                    name: "category",
                    type: "string",
                    description: "Which type of table it is. For example, a general table or a table for specific type of work, etc. Available categories: 'general'"
                },
                {
                    name: "seats",
                    type: "array of objects",
                    description: "Places for users to choose to join a table at. Seats are defined in advance and none will be added or removed after the table is created"
                },
                {
                    name: "seats._id",
                    type: "string",
                    description: "Unique identifier for the specific seat"
                },
                {
                    name: "seats.user_id",
                    type: "string (optional)",
                    description: "ID of the user currently in this seat. Null if no user in seat"
                },
                {
                    name: "seats.user_name",
                    type: "string (optional)",
                    description: "First name of the user currently in this seat. Null if no user in seat"
                },
                {
                    name: "seats.avatar",
                    type: "string (optional)",
                    description: "Avatar of the user currently in this seat. Null if no user in seat"
                }
            ]
        }
    }
];
