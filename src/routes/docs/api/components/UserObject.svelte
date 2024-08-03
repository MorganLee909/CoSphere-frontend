<script>
    import ObjectProperty from "./ObjectProperty.svelte";
</script>

<h2>User Object</h2>

<h3>Properties</h3>

<ObjectProperty
    property="_id"
    type="string"
    description="Unique identifier for the user"
/>

<ObjectProperty
    proptery="email"
    type="string"
    description="email address of the user"
/>

<ObjectProperty
    property="first_name"
    type="string"
    description="First name of the user"
/>

<ObjectProperty
    property="last_name"
    type="string"
    description="Last name of the user"
/>

<ObjectProperty
    property="status"
    type="string"
    description="Current status of user account. One of: 'Active', 'Inactive', 'Unverified'"
/>

<ObjectProperty
    property="avatar"
    type="string"
    description="URL for retrieving the user avatar image"
/>

<ObjectProperty
    property="default_location"
    type="string"
    description="ID for the default location of the user"
/>
