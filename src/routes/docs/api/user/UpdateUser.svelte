<script>
    import ObjectProperty from "../components/ObjectProperty.svelte";
    import ExampleButton from "../components/ExampleButton.svelte";
</script>

<div id="updateUser" class="container">
    <h2>Update User</h2>
    <code class="route"><span class="method">PUT</span>https://cosphere.work/api/user/&lt;user_id&gt;</code><br>
    <a class="auth" href="/docs/auth">Auth Required</a><br>

    <ExampleButton example="updateUser" on:displayAside/>

    <h3>Parameters</h3>
    <ObjectProperty
        property="user_id"
        type="string"
        description="Unique ID of the user whose data is to be retrieved"
    />

    <h3>Request body</h3>
    <ObjectProperty
        property="default_location"
        type="string (optional)"
        description="ID of the location that will be set as the user's default location"
    />

    <ObjectProperty
        property="first_name"
        type="string (optional)"
        description="Updated first name for the user"
    />

    <ObjectProperty
        property="last_name"
        type="string (optional)"
        description="Updated last name for the user"
    />

    <h3>Response body</h3>
    <ObjectProperty
        property="User Object"
        type="User"
        description="An object containing all of the data for the user"
    />
</div>

<style>
    .container{
        padding: 0 35px;
    }

    h2{
        margin: 15px 0 0 15px;
    }

    h3{
        margin: 35px 0 0 15px;
        font-size: 18px;
    }

    .route{
        margin-left: 15px;
        font-size: 16px;
    }

    .method{
        margin-right: 25px;
    }

    .auth{
        margin-left: 15px;
        font-size: 14px;
    }
</style>
