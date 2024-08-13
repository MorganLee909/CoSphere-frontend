export default {
    getTables: {
        title: "Get Tables",
        request: `{
  authorization: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjY2YWJkZmU1N2ZhMmFiNGE2NmM5NmNhZSIsImVtYWlsIjoiYUBsZWVtb3JnYW4uZGV2Iiwic2Vzc2lvbiI6IjEyMzQ1IiwiZXhwIjoxNzU0MDc2NTM2fQ.VCZ_nwYixgHbBWjeat7Aanxd2pUXSnJdUHxzjc-LzmY",
  tables: [
    "66bbc6b1fbb07354a683872b",
    "66bbc6b2fbb07354a683872c"
  ]
}`,
        response: `[
  {
    "_id": "66bbc6b1fbb07354a683872b",
    "category": "general",
    "seats": [
        {
          "_id": "66b68d4c20a99e144983872e",
          "user_id": Null,
          "user_name": Null,
          "avatar": Null
        },
        {
          "_id": "66b68d4c20a99e144983872e",
          "user_id": "66b68db320a99e144983872f",
          "user_name": "Bob",
          "avatar": "/api/avatar/66b68e1d20a99e1449838732.webp"
        },
        {
          "_id": "66b68d4c20a99e144983872e",
          "user_id": "66b68db420a99e1449838730",
          "user_name": "Katya",
          "avatar": "/api/avatar/66b68e1e20a99e1449838733.webp"
        },
        {
          "_id": "66b68d4c20a99e144983872e",
          "user_id": Null,
          "user_name": Null,
          "avatar": Null
        },
        {
          "_id": "66b68d4c20a99e144983872e",
          "user_id": Null,
          "user_name": Null,
          "avatar": Null
        },
        {
          "_id": "66b68d4c20a99e144983872e",
          "user_id": "66b68db520a99e1449838731",
          "user_name": "Frank",
          "avatar": "/api/avatar/66b68e1f20a99e1449838734.webp"
        },
    ]
  },
  {
    "_id": "66bbc6b2fbb07354a683872c",
    "category": "general",
    "seats": [
        {
          "_id": "66b68d4c20a99e1449838711",
          "user_id": "66bbc6b2fbb07354a68387aa",
          "user_name": "Joseph",
          "avatar": "/api/avatar/66b68e1d20a99e1449838732.webp"
        },
        {
          "_id": "66b68d4c20a99e144983872e",
          "user_id": Null,
          "user_name": Null,
          "avatar": Null,
        },
        {
          "_id": "66b68d4c20a99e144983872e",
          "user_id": "66b68db420a99e1449838730",
          "user_name": "Katya",
          "avatar": "/api/avatar/66b68e1e20a99e1449838733.webp"
        },
        {
          "_id": "66b68d4c20a99e144983872e",
          "user_id": Null,
          "user_name": Null,
          "avatar": Null
        },
        {
          "_id": "66b68d4c20a99e144983872e",
          "user_id": Null,
          "user_name": Null,
          "avatar": Null
        },
        {
          "_id": "66b68d4c20a99e144983872e",
          "user_id": Null,
          "user_name": Null,
          "avatar": Null
        }
    ]
  }
]`
    }
}
