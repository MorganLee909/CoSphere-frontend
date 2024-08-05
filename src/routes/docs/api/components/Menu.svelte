<script>
    export let width;
</script>

<div id="menu" style="width:{width}px">
    <h1>CoSphere</h1>
    <a class="main" href="#user">User</a>
    <a class="sub" href="#userObject">User Object</a>
    <a class="sub" href="#createUser">Create User</a>
    <a class="sub" href="#getUser">Get User</a>
    <a class="sub" href="#updateUser">Update User</a>
</div>

<style>
    *{margin:0;padding:0;box-sizing:border-box;}

    h1{
        text-align: center;
    }

    #menu{
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        border-right: 3px solid rgba(255, 255, 255, 0.35);
    }

    .main{
        font-size: 22px;
        font-weight: bold;
        text-decoration: none;
        color: rgb(200, 200, 200);
        margin-left: 5px;
        margin: 25px 0 0 5px;
    }

    .sub{
        font-size: 18px;
        text-decoration: none;
        color: rgb(200, 200, 200);
        margin-left: 25px;
    }
</style>
