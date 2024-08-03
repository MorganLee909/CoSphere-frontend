<script>
    import {createEventDispatcher} from "svelte";
    const dispatch = createEventDispatcher();

    export let example;

    const displayExample = ()=>{
        dispatch("displayAside", {currentAside: example});
    }
</script>

<button
    on:click={displayExample}
>Example</button>

<style>
    button{
        background: none;
        border: none;
        border-bottom: 1px solid rgb(200, 200, 200);
        color: rgb(200, 200, 200);
        cursor: pointer;
        margin-left: 15px;
    }
</style>
