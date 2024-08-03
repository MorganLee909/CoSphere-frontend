<script>
    import "../../../global.css";
    import Menu from "./Menu.svelte";
    import User from "./components/User.svelte";
    import UserExample from "./components/UserExample.svelte";

    let showAside = false;
    let currentAside = "";

    function displayAside(event){
        showAside = !showAside;
        currentAside = event.detail.currentAside;
    }
</script>

<div id="container">
    <Menu></Menu>

    <main>
        <User on:displayAside={displayAside}/>
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
        padding: 0 15px;
    }

    aside{
        display: flex;
        align-items: center;
        max-width: 50%;
    }
</style>
