<script>
    import {createEventDispatcher} from "svelte";
    const dispatch = createEventDispatcher();

    import UserObject from "./UserObject.svelte";
    import CreateUser from "./CreateUser.svelte";
    import GetUser from "./GetUser.svelte";
    import UpdateUser from "./UpdateUser.svelte";
    import GetToken from "./GetToken.svelte";
    import UpdateAvatar from "./UpdateAvatar.svelte";
    import DeleteUser from "./DeleteUser.svelte";

    import Route from "../components/Route.svelte";
    import routes from "./routes.js";
</script>

<div id="user">
    <h1>User</h1>
    <p>The user is the data for individuals who have signed up for CoSphere, whether verified/paid/etc. or not. Users may be standard users or office users.</p>

    {#each routes as route}
        <div class="divider"></div>
        <Route
            name={route.name}
            title={route.title}
            method={route.method}
            url={route.url}
            data={route.data}
            on:displayAside
        />
    {/each}
</div>

<style>
    h1{
        margin-top: 35px;
    }

    .divider{
        border-top: 2px solid rgba(255, 255, 255, 0.35);
        margin: 10px 0;
    }
</style>
