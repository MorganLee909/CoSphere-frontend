<script>
    import {createEventDispatcher} from "svelte";
    const dispatch = createEventDispatcher();

    import Route from "../components/Route.svelte";
    import routes from "./routes.js";
</script>

<div id="location">
    <h2>Location</h2>
    <p>A CoSphere location containing tables for users to join. Public locations can be accessed by all users and generally named for cities. Private locations are created and named by those that own them.</p>

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
</style>
