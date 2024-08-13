<script>
    import "../../../global.css";
    import Menu from "./components/Menu.svelte";
    import User from "./user/User.svelte";
    import Location from "./location/Location.svelte";
    import Table from "./table/Table.svelte";
    import Websocket from "./websocket/Websocket.svelte";
    import RouteExample from "./components/RouteExample.svelte";
    import userExamples from "./user/examples.js";
    import locationExamples from "./location/examples.js";
    import tableExamples from "./table/examples.js";

    const examples = {
        ...userExamples,
        ...locationExamples,
        ...tableExamples
    };

    let showAside = false;
    let menuWidth = 250;
    let currentExample = {};

    function displayAside(event){
        if(!showAside){
            showAside = true;
            currentExample = examples[event.detail.currentAside];
        }else{
            if(currentExample === examples[event.detail.currentAside]){
                showAside = false;
            }else{
                currentExample = examples[event.detail.currentAside];
            }
        }
    }
</script>

<div id="container" style="--menuWidth: {menuWidth}px">
    <Menu width={menuWidth}></Menu>

    <main class:mainSplit={showAside}>
        <User on:displayAside={displayAside}/>
        <Location on:displayAside={displayAside}/>
        <Table on:displayAside={displayAside}/>
        <Websocket on:displayAside={displayAside}/>
    </main>

    {#if showAside} 
        <div class="hiddenAside" class:asideSplit={showAside}></div>
        <aside>
            <RouteExample
                title={currentExample.title}
                object={currentExample.object}
                url={currentExample.url}
                request={currentExample.request}
                response={currentExample.response}
                codeExample={currentExample.codeExample}
            /> 
        </aside>
    {/if}
</div>

<style>
    #container{
        display: flex;
        background: rgb(20, 20, 20);
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
