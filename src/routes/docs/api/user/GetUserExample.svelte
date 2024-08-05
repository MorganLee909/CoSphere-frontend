<div class="container">
    <h1>Get User</h1>

    <div>
        <h3>Example URL</h3>
        <pre><code>https://cosphere.work/api/user/507f191e810c19729de860ea</code></pre>
    </div>

    <div>
        <h3>Response body</h3>
        <pre><code>{'{'}
  "_id": "507f191e810c19729de860ea",
  "email": "john.smith@mail.com",
  "first_name": "John",
  "last_name": "Smith",
  "status": "Unverified",
  "avatar": "/api/avatar/default.webp",
  "default_location": "6592008029c8c3e4dc76256c"
{'}'}</code></pre>
    </div>
</div>

<style>
    .container{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        height: 100%;
        width: 100%;
        position: relative;
    }

    h1{
        position: absolute;
        top: 35px;
        left: 0;
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
        word-wrap: keep-all;
    }
</style>
