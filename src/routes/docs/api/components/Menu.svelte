<script>
    export let width;
</script>

<div class="menu" style="width:{width}px">
    <h1>CoSphere</h1>
    <a class="main" href="#user">User</a>
    <a class="sub" href="#userObject">User Object</a>
    <a class="sub" href="#createUser">Create User</a>
    <a class="sub" href="#getToken">Get Token (login)</a>
    <a class="sub" href="#getUser">Get User</a>
    <a class="sub" href="#updateUser">Update User</a>
    <a class="sub" href="#updateAvatar">Update Avatar</a>
    <a class="sub" href="#deleteUser">Delete User</a>
    <a class="sub" href="#emailVerification">Send Verification Email</a>
    <a class="sub" href="#verifyEmail">Verify User Email</a>
    <a class="sub" href="#passwordEmail">Reset Password Email</a>
    <a class="sub" href="#resetPassword">Reset Password</a>
    <a class="main" href="#location">Location</a>
    <a class="sub" href="#locationObject">Location Object</a>
    <a class="sub" href="#getLocation">Get Location</a>
    <a class="sub" href="#getLocations">Get Available Locations</a>
</div>

<div class="widthHolder" style="width:{width}px"></div>

<style>
    *{margin:0;padding:0;box-sizing:border-box;}

    h1{
        text-align: center;
    }

    .menu{
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        border-right: 3px solid rgba(255, 255, 255, 0.35);
        position: fixed;
        top: 0;
        left: 0;
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

    .widthHolder{
        height: 100%;
    }
</style>
