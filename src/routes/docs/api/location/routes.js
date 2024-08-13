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
    },

    {
        name: "getLocation",
        title: "Get Location",
        auth: true,
        method: "GET",
        url: "https://cosphere.work/api/location/<location_id>",
        data: {
            "Parameters": [{
                name: "location_id",
                type: "string",
                description: "ID of the location whose data is to be retrieved"
            }],
            "Response Body": [{
                name: "Location Object",
                type: "Location",
                description: "An object containing all of the data for the user"
            }]
        }
    }
];
