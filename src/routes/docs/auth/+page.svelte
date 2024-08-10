<script>
    let exampleOne = `fetch("https://cosphere.work/api/user/token", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    email: "john.smith@mail.com",
    password: "password123"
  })
    .then(r=>r.json())
    .then((response)=>{
      localStorage.setItem("userToken", response.token);
      //Handle any other necessary logic.
    })
    .catch((err)=>{
      //Handle errors
    });
})`;

    let exampleTwo = `fetch("https://cosphere.work/api/user/66b777a1b5c1f25b1b838726", {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    Authorization: \`Bearer \${localStorage.getItem("userToken")}\`
  },
    .then(r=>r.json())
    .then((user)=>{
      //Run your code to handle user data
    })
    .catch((err)=>{
      //Handle errors
    });
})`;
</script>

<div class="container">
    <h1>CoSphere Authentication</h1>

    <p>Authentication in CoSphere in simple and based on bearer tokens. To log in a user, the front-end should make a request to the <a href="/docs/api#getToken">Get Token</a> route. This route will return a JSON web token, basically a long string of seamingly random text. This is the token that will be used to verify the user to the back-end for each request that requires it. Save this token to the device, for example, to Local Storage in the browser.</p>

    <p>When making a request to a route that requires authorization, you will add an 'Authorization' header to the request that will start with the word "Bearer", a space, and then the token. This will give the server the authentication required by the server to properly process the request.</p>

    <p>Below is a step-by-step breakdown of the process along with examples:</p>

    <ol>
        <li>Provide a login page for the user. This page should use the <a href="/docs/api#getToken">Get Token</a> route to make a request to the server for the JSON web token once the user submits their information.</li>
        <li>Assuming the correct information has been entered, the server will respond with the token. Save the token to Local Storage, or some other persistant storage on the device.</li>
        <li>When making a request to a route that requires authentication (the documentation for the route will be marked with a link 'Auth required'), you will need to provide the auth token in a header. If the documentation does not say that auth is required, then you do not need to send the token.</li>
        <li>Create a string that looks like this: 'Bearer &lt;userToken&gt;'. It should start with 'Bearer', a space, then the token.</li>
        <li>This bearer token contains information on the user so it is the only data about the user required. If the token is correct, then the user will be authenticated and the route will return the expected data. If incorrect, an error will be returned.</li>
    </ol>

    <h2>Examples</h2>
    <h3>Request user token:</h3>
    <pre><code>{@html exampleOne}</code></pre>

    <h3>Make a request (get user) that requires authentication:</h3>
    <pre><code>{@html exampleTwo}</code></pre>

</div>

<style>
    *{margin:0;padding:0;box-sizing:border-box;}

    :global(body){
        background: rgb(20, 20, 20);
        color: rgb(200, 200, 200);
    }

    .container{
        max-width: 1250px;
        margin: 35px auto;
    }

    p{
        font-size: 18px;
        line-height: 30px;
        margin: 15px 0;
    }

    ol{
        font-size: 18px;
        line-height: 30px;
        margin-left: 35px;
        border-top: 1px solid rgb(200, 200, 200);
        border-bottom: 1px solid rgb(200, 200, 200);
        padding: 25px ;
    }

    li{
        margin: 15px 0;
    }

    a{
        color: white;
    }

    h2{
        margin-top: 35px;
    }

    h3{
        background: rgb(35, 35, 35);
        border-top-left-radius: 15px;
        border-top-right-radius: 15px;
        padding-left: 10px;
        margin-top: 25px;
    }

    pre{
        background: rgb(24, 27, 56);
        border-bottom-left-radius: 15px;
        border-bottom-right-radius: 15px;
        padding: 5px 15px;
        font-size: 14px;
        line-height: 26px;
        white-space: pre-wrap;
    }
</style>
