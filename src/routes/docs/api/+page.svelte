<script>
    import "../../../global.css";
    import Menu from "./Menu.svelte";
    import User from "./components/User.svelte";
    import UserExample from "./components/UserExample.svelte";

    let showAside = false;
    let currentAside = "";

    function displayAside(event){
        console.log("show aside");
        showAside = !showAside;
        currentAside = event.detail.currentAside;
    }
</script>

<div id="container">
    <Menu></Menu>

    <main>
        <User on:displayAside={displayAside}></User>
    </main>

    {#if showAside} 
        <aside>
            {#if currentAside === "userExample"}
                <UserExample></UserExample>
            {/if}
        </aside>
    {/if}
</div>

<style>
    #container{
        display: flex;
        background: rgb(20, 20, 20);
        color: white;
    }

    main{
        width: 50vw;
    }
</style>
