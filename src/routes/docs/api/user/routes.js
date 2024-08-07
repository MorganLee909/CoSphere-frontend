export default [
    {
        name: "userObject",
        title: "User Object",
        data: {
            Properties: [
                {
                    name: "_id",
                    type: "string",
                    description: "Unique identifier for the user"
                },
                {
                    name: "email",
                    type: "string",
                    description: "Email address of the user"
                },
                {
                    name: "first_name",
                    type: "string",
                    description: "First name of the user"
                },
                {
                    name: "last_name",
                    type: "string",
                    description: "Last name of the user"
                },
                {
                    name: "status",
                    type: "string",
                    description: "Current status of user account. One of: 'Active', 'Inactive', 'Unverified'"
                },
                {
                    name: "avatar",
                    type: "string",
                    description: "URL for retrieving the user avatar image"
                },
                {
                    name: "default_location",
                    type: "string",
                    description: "ID for the default location of the user"
                }
            ]
        }
    }
]
