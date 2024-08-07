<script>
    export let title, url, request, response, codeExample;
</script>

<div class="container">
    <h1>{title}</h1>

    {#if url}
        <div>
            <h3>Example URL</h3>
            <pre><code>{url}</code></pre>
        </div>
    {/if}

    {#if request}
        <div>
            <h3>Request body</h3>
            <pre><code>{request}</code></pre>
        </div>
    {/if}

    {#if response}
        <div>
            <h3>Response body</h3>
            <pre><code>{response}</code></pre>
        </div>
    {/if}

    {#if codeExample}
        <div>
            <h3>Code example</h3>
            <pre><code>{codeExample}</code></pre>
        </div>
    {/if}
</div>

<style>
    .container{
        display: flex;
        flex-direction: column; 
        justify-content: space-around;
        height: 100vh;
        width: 100%;
        overflow: auto;
        padding-top: 100px;
    }

    .container > *{
        margin: 15px 0;
    }

    h1{
        text-align: center;
    }

    h3{
        width: 98%;
        background: rgb(35, 35, 35);
        border-top-left-radius: 15px;
        border-top-right-radius: 15px;
        padding-left: 10px;
    }

    pre{
        background: rgb(24, 27, 56);
        border-bottom-left-radius: 15px;
        border-bottom-right-radius: 15px;
        padding: 5px 15px;
        font-size: 14px;
        line-height: 26px;
        width: 98%;
        white-space: pre-wrap;
    }
</style>
