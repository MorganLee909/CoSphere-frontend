export default [
    {
        name: "locationObject",
        title: "Location Object",
        data: {
            Properties: [
                {
                    name: "_id",
                    type: "string",
                    description: "Unique identifier for the location"
                },
                {
                    name: "name",
                    type: "string",
                    description: "The name of the location"
                },
                {
                    name: "name",
                    type: "array of Table",
                    description: "An array containing all of the table IDs associated with this location"
                }
            ]
        }
    },

    {
        name: "getLocations",
        title: "Get Locations",
        auth: true,
        method: "GET",
        url: "https://cosphere.work/api/location",
        data: {
            "Response Body": [
                {
                    name: "_id",
                    type: "string",
                    description: "Unique ID of the location"
                },
                {
                    name: "name",
                    type: "string",
                    description: "Name of the location"
                }
            ]
        }
    }
];
