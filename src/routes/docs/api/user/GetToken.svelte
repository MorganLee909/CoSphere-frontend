<script>
    import ObjectProperty from "../components/ObjectProperty.svelte";
    import ExampleButton from "../components/ExampleButton.svelte";
</script>

<div id="getToken" class="container">
    <h2>Get Token (login)</h2>
    <code class="route"><span class="method">POST</span>https://cosphere.work/api/user/token</code><br>

    <ExampleButton example="getToken" on:displayAside/>

    <h3>Request body</h3>
    <ObjectProperty
        property="email"
        type="string"
        description="Email of user to get token for"
    />

    <ObjectProperty
        property="password"
        type="string"
        description="Password for user to retrieve token for"
    />

    <h3>Response body</h3>
    <ObjectProperty
        proptery="token"
        type="string"
        description="JWT for user authentication"
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
</style>
