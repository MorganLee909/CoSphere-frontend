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
    },

    {
        name: "createUser",
        title: "Create User",
        method: "POST",
        url: "https://cosphere.work/api/user",
        data: {
            "Request Body": [
                {
                    name: "email",
                    type: "string",
                    description: "User email address (must be unique)"
                },
                {
                    name: "password",
                    type: "string",
                    description: "User password. Must contain at least 10 characters"
                },
                {
                    name: "confirm_password",
                    type: "string",
                    description: "Confirmation password that must match 'password'"
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
                }
            ],
            "Response Body": [
                {
                    name: "User Object",
                    type: "User",
                    description: "An object containing all of the data for the user"
                }
            ]
        }
    },

    {
        name: "getToken",
        title: "Get Token (login)",
        method: "POST",
        url: "https://cosphere.work/api/user/token",
        data: {
            "Request Body": [
                {
                    name: "email",
                    type: "string",
                    description: "Email of user to get token for"
                },
                {
                    name: "password",
                    type: "string",
                    description: "Password for user to retrieve token for"
                }
            ],
            "Response Body": [
                {
                    name: "token",
                    type: "string",
                    description: "JWT for user authentication"
                }
            ]
        }
    },

    {
        name: "getUser",
        title: "Get User",
        auth: true,
        method: "GET",
        url: `https://cosphere.work/api/user/<user_id>`,
        data: {
            "Parameters": [
                {
                    name: "user_id",
                    type: "string",
                    description: "Unique ID of the user whose data is to be retrieved"
                }
            ],
            "Response Body": [
                {
                    name: "User Object",
                    type: "User",
                    description: "An object containing all of the data for the user"
                }
            ]
        }
    },

    {
        name: "updateUser",
        title: "Update User",
        auth: true,
        method: "PUT",
        url: `https://cosphere.work/api/user/<user_id>`,
        data: {
            "Parameters": [
                {
                    name: "user_id",
                    type: "string",
                    description: "Unique ID of the user whose data is to be updated"
                }
            ],
            "Request Body": [
                {
                    name: "first_name",
                    type: "string",
                    description: "Updated first name for the user"
                },
                {
                    name: "last_name",
                    type: "string",
                    description: "Updated last name for the user"
                },
                {
                    name: "default_location",
                    type: "string",
                    description: "ID of the location that will be set as the user's default location"
                }
            ],
            "Response Body": [
                {
                    name: "User Object",
                    type: "User",
                    description: "An object containing all of the data for the user"
                }
            ]
        }
    },

    {
        name: "updateAvatar",
        title: "Update Avatar",
        auth: true,
        method: "PUT",
        url: `https://cosphere.work/api/user/<user_id>/avatar`,
        data: {
            "Parameters": [
                {
                    name: "user_id",
                    type: "string",
                    description: "Unique ID of the user whose avatar is to be updated"
                }
            ],
            "Request Body": [
                {
                    name: "image",
                    type: "File",
                    description: "New image for the user's avatar image. Must be Multipart/Form (see example)"
                }
            ],
            "Response Body": [
                {
                    name: "url",
                    type: "string",
                    description: "URL of the newly uploaded user avatar image"
                }
            ]
        }
    },

    {
        name: "deleteUser",
        title: "Delete User",
        auth: true,
        method: "DELETE",
        url: "https://cosphere.work/api/user/<user_id>",
        data: {
            "Parameters": [
                {
                    name: "user_id",
                    type: "string",
                    description: "Unique ID of the user whose data is to be deleted"
                }
            ],
            "Response Body": [
                {
                    name: "success",
                    type: "boolean",
                    description: "Always true. Will return error if unsuccessful"
                }
            ],
        }
    }
]
