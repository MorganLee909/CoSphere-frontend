export default [
    {
        name: "locationObject",
        title: "Location Object",
        data: {
            Properties: [
                {
                    name: "name",
                    type: "string",
                    description: "Location name"
                },
                {
                    name: "public",
                    type: "boolean",
                    description: "Determines whether location is open to public."
                },
                {
                    name: "tables",
                    type: "array of Table",
                    description: "Array of IDs to the tables contained at this location"
                }
            ]
        }
    },

    {
        name: "getLocation",
        title: "Get Location",
        method: "GET",
        url: "https://cosphere.work/api/location/<location_id>",
        auth: true,
        data: {
            Parameters: [
                {
                    name: "location_id",
                    type: "string",
                    description: "Unique id of the location to retrieve data for"
                }
            ],
            "Response Body": [
                {
                    name: "Location Object",
                    type: "Location",
                    description: "An object containing all of the data for the location"
                }
            ]
        }
    },

    {
        name: "getLocations",
        title: "Get Available Locations",
        method: "GET",
        url: "https://cosphere.work/api/location",
        auth: true,
        data: {
            "Response Body": [
                {
                    name: "Location Objects",
                    type: "array of Location",
                    description: "An array of locations that are available to the user, both public and private locations"
                }
            ]
        }
    }
];
