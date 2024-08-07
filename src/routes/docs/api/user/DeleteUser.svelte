<script>
    import ObjectProperty from "../components/ObjectProperty.svelte";
    import Examplebutton from "../components/ExampleButton.svelte";
</script>

<div id="deleteUser" class="container">
    <h2>Delete User</h2>
    <code class="route"><span class="method">DELETE</span>https://cosphere.work/api/user/&lt;user_id&gt;</code>
    <br>
    <a class="auth" href="/docs/auth">Auth Required</a><br>

    <Examplebutton example="deleteUser" on:displayAside/>

    <h3>Parameters</h3>
    <ObjectProperty
        property="user_id"
        type="string"
        description="Unique ID of the user whose data is to be deleted"
    />

    <h3>Request body</h3>
    <ObjectProperty
        property="success"
        type="boolean"
        description="Always true. Will return error if unsuccessful"
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
