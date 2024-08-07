<script>
    const code = `let input = document.getElementById("imageInput");
let userId = "507f191e810c19729de860ea";
let data = new FormData();
data.append("image", input.files[0]);

fetch(\`https://cosphere.work/api/user/\${userId}/avatar\`, {
    method: "put",
    headers: {
        Authorization: "User Token"
    },
    body: data
})
    .then(r=>r.json())
    .then((response)=> {
        //Handle response
    )}
    .catch((err)=>{
        //Handle Error
    });`;
</script>

<div class="container">
    <h1>Update Avatar</h1>

    <div>
        <h3>Example URL</h3>
        <pre><code>PUT https://cosphere.work/api/user/507f191e810c19729de860ea/avatar</code></pre>
    </div>

    <div>
        <h3>Request body</h3>
        <pre><code>{'{'}
  "image": Image File
{'}'}</code></pre>
    </div>

    <div>
        <h3>Response body</h3>
        <pre><code>{'{'}
  "url": "https://cosphere.work/api/avatar/66abdfe57fa2ab4a66c96cae.webp"
{'}'}</code></pre>
    </div>

    <div>
        <h3>Fetch example</h3>
        <pre><code>{@html code}</code></pre>
    </div>
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
        height: 100px;
        width: 100%;
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
