<script>
    import {createEventDispatcher} from "svelte";
    const dispatch = createEventDispatcher();

    import Route from "../components/Route.svelte";
    import routes from "./routes.js";
</script>

<div id="websocket">
    <h1>Websockets</h1>
    <p>Websockets are primarily used to get/send data about tables.</p>

    <p><span class="socketType">(in)</span> is used to mark incoming websocket data, that is, data that is being sent from the server. <span class="socketType">(out)</span> is used to mark outgoing websocket data, data that comes from the client.</p>

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

    .socketType{
        font-size: 14px;
        font-style: italic;
    }
</style>
