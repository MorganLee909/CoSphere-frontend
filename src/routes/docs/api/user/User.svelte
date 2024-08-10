<script>
    import {createEventDispatcher} from "svelte";
    const dispatch = createEventDispatcher();

    import Route from "../components/Route.svelte";
    import routes from "./routes.js";
</script>

<div id="user">
    <h1>User</h1>
    <p>The user is the data for individuals who have signed up for CoSphere, whether verified/paid/etc. or not. Users may be standard users or office users.</p>

    <p>Since user data is shared across all locations, user data is saved on the server at 'https://cosphere.work' and all user data will be requested from there.</p>

    {#each routes as route}
        <div class="divider"></div>
        <Route
            name={route.name}
            title={route.title}
            auth={route.auth}
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

    p{
        margin: 15px 0;
    }
</style>
