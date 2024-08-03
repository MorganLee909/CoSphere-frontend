<script>
    import {createEventDispatcher} from "svelte";
    const dispatch = createEventDispatcher();

    const showExample = ()=>{
        console.log("show example");
        dispatch("displayAside", {
            currentAside: "userExample"
        });
    }
</script>

<h1>User</h1>
<p>The user is the data for individuals who have signed up for CoSphere, whether verified/paid/etc. or not. Users may be standard users or office users.</p>
<button on:click={showExample}>Show example</button>

<style>
    button{
        color: white;
        background: blue;
        border: none;
        cursor: pointer;
    }
</style>
