export default {
    updateAvatar: {
        title: "Update Avatar",
        url: `PUT https://cosphere.work/api/user/507f191e810c19729de860ea/avatar`,
        request: `{
  "image": Image File
}`,
        response: `{
  "url": "https://cosphere.work/api/avatar/66abdfe57fa2ab4a66c96cae.webp"
}`,
        codeExample: `let input = document.getElementById("imageInput");
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
    });`
    }
};
