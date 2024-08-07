export default {
    userExample: {
        title: "User Object",
        object: `{
  "_id": "507f191e810c19729de860ea",
  "email": "john.smith@mail.com",
  "first_name": "John",
  "last_name": "Smith",
  "status": "Active",
  "avatar": "/api/avatar/507f1f77bcf86cd799439011.webp",
  "default_location": "6592008029c8c3e4dc76256c"
}`
    },

    createUser: {
        title: "Create User",
        request: `{
  "email": "John.Smith@mail.com",
  "password": "password123",
  "confirm_password": "password123",
  "first_name": "John",
  "last_name": "Smith"
}`,
        response: `{
  "_id": "507f191e810c19729de860ea",
  "email": "john.smith@mail.com",
  "first_name": "John",
  "last_name": "Smith",
  "status": "Unverified",
  "avatar": "/api/avatar/default.webp",
  "default_location": "6592008029c8c3e4dc76256c"
}`
    },

    getToken: {
        title: "Get Token (login)",
        request: `{
  "email": "john.smith@mail.com",
  "password": "password123"
}`,
        response: `{
  "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjY2YWJkZmU1N2ZhMmFiNGE2NmM5NmNhZSIsImVtYWlsIjoiYUBsZWVtb3JnYW4uZGV2Iiwic2Vzc2lvbiI6IjEyMzQ1IiwiZXhwIjoxNzU0MDc2NTM2fQ.VCZ_nwYixgHbBWjeat7Aanxd2pUXSnJdUHxzjc-LzmY"
}`
    },

    getUser: {
        title: "Get User",
        url: "GET https://cosphere.work/api/user/507f191e810c19729de860ea",
        response: `{
  "_id": "507f191e810c19729de860ea",
  "email": "john.smith@mail.com",
  "first_name": "John",
  "last_name": "Smith",
  "status": "Active",
  "avatar": "/api/avatar/default.webp",
  "default_location": "6592008029c8c3e4dc76256c"
}`
    },

    updateUser: {
        title: "Update User",
        url: "PUT https://cosphere.work/api/user/507f191e810c19729de860ea",
        request: `{
  "location": "66b0f751da51b9fa3616a2db",
  "first_name": "Johnathan"
}`,
        response: `{
  "_id": "507f191e810c19729de860ea",
  "email": "john.smith@mail.com",
  "first_name": "Johnathan",
  "last_name": "Smith",
  "status": "Active",
  "avatar": "/api/avatar/default.webp",
  "default_location": "66b0f751da51b9fa3616a2db"
}`
    },

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
