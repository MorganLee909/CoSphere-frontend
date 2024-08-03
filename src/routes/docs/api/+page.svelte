<script>
    import "../../../global.css";
    import Menu from "./Menu.svelte";
    import User from "./components/User.svelte";
    import UserExample from "./components/UserExample.svelte";
    import UserObject from "./components/UserObject.svelte";

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
        <User>
            <div class="divider"></div>
            <UserObject on:displayAside={displayAside}></UserObject>
        </User>
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

    .divider{
        border-top: 1px solid rgba(255, 255, 255, 0.35);
    }
</style>
