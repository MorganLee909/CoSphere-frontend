<script>
    import {createEventDispatcher} from "svelte";
    const dispatch = createEventDispatcher();

    import Route from "../components/Route.svelte";
    import routes from "./routes.js";
</script>

<div id="table">
    <h1>Table</h1>
    <p>Tables contain users that have joined, or are in the process of joining a Jitsi meeting. A location will contain multiple tables that users may join.</p>

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
        margin: 15px; 
    }
</style>
