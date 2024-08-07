<script>
    import ObjectProperty from "../components/ObjectProperty.svelte";
    import ExampleButton from "../components/ExampleButton.svelte";
</script>

<div id="updateAvatar" class="container">
    <h2>Update Avatar</h2>
    <code class="route"><span class="method">PUT</span>https://cosphere.work/api/user/&lt;user_id&gt;/avatar</code><br>
    <a class="auth" href="/docs/auth">Auth Required</a><br>

    <ExampleButton example="updateAvatar" on:displayAside/>

    <h3>Parameters</h3>
    <ObjectProperty
        property="user_id"
        type="string"
        description="Unique ID of the user whose avatar is to be updated"
    />

    <h3>Request Data</h3>
    <p>Request type must be "Multipart/form-data"</p>
    <ObjectProperty
        property="image"
        type="File"
        description="New image for the user's avatar image"
    />

    <h3>Response Data</h3>
    <ObjectProperty
        property="url"
        type="string"
        description="URL of the newly uploaded user avatar image"
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
