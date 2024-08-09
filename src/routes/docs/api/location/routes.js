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
                    description: "Determines whether location is open to public. If not public, location will contain a list of users"
                },
                {
                    name: "members",
                    type: "array of User",
                    description: "If not public, list of Users allowed to access this location"
                },
                {
                    name: "tables",
                    type: "array of Table",
                    description: "Array of IDs to the tables contained at this location"
                }
            ]
        }
    }
];
