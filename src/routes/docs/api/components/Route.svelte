<script>
    import ObjectProperty from "./ObjectProperty.svelte";
    import ExampleButton from "./ExampleButton.svelte";

    export let name, title, method, description, url, data;
    export let auth = false;
    let dataTypes = Object.keys(data);
</script>

<div id={name} class="container">
    <h2>{title}</h2>

    {#if url}
        <code class="route"><span class="method">{method}</span>{url}</code><br>
    {/if}

    {#if description}
        <p class="description">{description}</p>
    {/if}

    {#if auth}
        <a class="auth" href="/docs/auth">Auth Required</a><br>
    {/if}

    <ExampleButton example={name} on:displayAside/>

    {#each dataTypes as dataType}
        <h3>{dataType}</h3>
        {#each data[dataType] as item}
            <ObjectProperty
                property={item.name}
                type={item.type}
                description={item.description}
            />
        {/each}
    {/each}
</div>

<style>
    .container{
        padding: 0 35px;
    }

    h2{
        margin: 15px 0 0 15px;
    }

    h3{
        margin: 35px 0 0 15px;
        font-size: 18px;
    }

    .route{
        margin-left: 15px;
        font-size: 16px;
    }

    .method{
        margin-right: 25px;
    }

    .auth{
        margin-left: 15px;
        font-size: 14px;
    }

    .description{
        margin: 15px 0 15px 15px;
    }
</style>
