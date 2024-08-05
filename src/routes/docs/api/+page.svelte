<script>
    import "../../../global.css";
    import Menu from "./components/Menu.svelte";
    import User from "./user/User.svelte";
    import UserExample from "./user/UserExample.svelte";
    import CreateUserExample from "./user/CreateUserExample.svelte";
    import GetUserExample from "./user/GetUserExample.svelte";
    import UpdateUserExample from "./user/UpdateUserExample.svelte";

    let showAside = false;
    let currentAside = "";
    let menuWidth = 250;

    function displayAside(event){
        if(!showAside){
            showAside = true;
            currentAside = event.detail.currentAside;
        }else{
            if(currentAside === event.detail.currentAside){
                showAside = false;
            }else{
                currentAside = event.detail.currentAside;
            }
        }
    }
</script>

<div id="container" style="--menuWidth: {menuWidth}px">
    <Menu width={menuWidth}></Menu>

    <main class:mainSplit={showAside}>
        <User on:displayAside={displayAside}/>
    </main>

    {#if showAside} 
        <div class="hiddenAside" class:asideSplit={showAside}></div>
        <aside>
            {#if currentAside === "userExample"}
                <UserExample/>
            {:else if currentAside === "createUser"}
                <CreateUserExample/>
            {:else if currentAside === "getUser"}
                <GetUserExample/>
            {:else if currentAside === "updateUser"}
                <UpdateUserExample/>
            {/if}
        </aside>
    {/if}
</div>

<style>
    #container{
        display: flex;
        background: rgb(20, 20, 20);
        color: white;
        position: relative;
    }

    main{
        padding: 0 15px;
        width: calc(100% - var(--menuWidth));
    }

    .mainSplit{
        width: calc(60% - (var(--menuWidth) / 2));
    }

    .asideSplit{
        width: calc(40% - (var(--menuWidth) / 2));
    }

    aside{
        display: flex;
        align-items: center;
        width: calc(40% - (var(--menuWidth) / 2));
        height: 100vh;
        position: fixed;
        top: 0;
        right: 0;
    }

    .hiddenAside{
        width: 0;
        height: 100vh;
    }
</style>
