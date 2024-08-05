<script>
    import {createEventDispatcher} from "svelte";
    const dispatch = createEventDispatcher();

    import UserObject from "./UserObject.svelte";
    import CreateUser from "./CreateUser.svelte";
    import GetUser from "./GetUser.svelte";
</script>

<div id="user">
    <h1>User</h1>
    <p>The user is the data for individuals who have signed up for CoSphere, whether verified/paid/etc. or not. Users may be standard users or office users.</p>

    <div class="divider"></div>

    <UserObject on:displayAside/>

    <div class="divider"></div>

    <CreateUser on:displayAside/>

    <div class="divider"></div>

    <GetUser on:displayAside/>
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
