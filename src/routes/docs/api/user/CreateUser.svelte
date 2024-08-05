<script>
    import ObjectProperty from "../components/ObjectProperty.svelte";
    import ExampleButton from "../components/ExampleButton.svelte";
</script>

<div id="createUser" class="container">
    <h2>Create User</h2>
    <code class="route"><span class="method">POST</span>https://cosphere.work/api/user</code><br>

    <ExampleButton example="createUser" on:displayAside/>

    <h3>Body</h3>

    <ObjectProperty
        property="email"
        type="string"
        description="User email address (must be unique)"
    />

    <ObjectProperty
        property="password"
        type="string"
        description="User password. Must contain at least 10 characters"
    />

    <ObjectProperty
        property="confirm_passsword"
        type="string"
        description="Confirmation password that must match 'password'"
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
