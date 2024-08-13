export default [
    {
        name: "getTables",
        title: "Get Tables",
        url: "ws://cosphere.work/tables",
        auth: true,
        data: {
            "Request Body": [
                {
                    name: "authorization",
                    type: "string",
                    description: "User authorization token"
                },
                {
                    name: "tables",
                    type: "array of strings",
                    description: "An array of strings containing the table IDs of the tables whose data is requested"
                }
            ],
            "Response Body": [
                {
                    name: "N/A (array)",
                    type: "array of Table",
                    description: "An array of objects containing full table data for each table requested"
                }
            ]
        }
    }
];
