<script>
    import ObjectProperty from "../components/ObjectProperty.svelte";
    import ExampleButton from "../components/ExampleButton.svelte";
</script>

<div id="getUser" class="container">
    <h2>Get User</h2>
    <code class="route"><span class="method">GET</span>/api/user/<user_id></code><br>
    <a class="auth" href="/docs/auth">Auth Required</a><br>

    <ExampleButton example="getUser" on:displayAside/>

    <h3>Parameters</h3>

    <ObjectProperty
        property="user_id"
        type="string"
        description="Unique ID of the user whose data is to be retrieved"
    />

    <h3>Response</h3>

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
        font-size: 16px;
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
