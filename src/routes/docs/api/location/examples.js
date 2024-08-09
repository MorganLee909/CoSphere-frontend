export default {
    locationObject: {
        title: "Location Object",
        object: `{
  "_id": "66b67a5b20a99e1449838729",
  "name": "Myrtle Beach",
  "public": true,
  "tables": [
    "66b6743c20a99e1449838726",
    "66b6745320a99e1449838727",
    "66b6745320a99e1449838728"
  ]
}`
    },

    getLocation: {
        title: "Get Location",
        url: "https://cosphere.work/api/location/66b67a5b20a99e1449838729",
        response: `{
  "name": "Myrtle Beach",
  "public" true,
  "tables": [
    "66b6743c20a99e1449838726",
    "66b6745320a99e1449838727",
    "66b6745320a99e1449838728"
  ]
}`
    },

    getLocations: {
        title: "Get Available Locations",
        response: `[
  {
     "_id": "66b67d2320a99e144983872b",
     "name": "Myrtle Beach",
     "public": true,
     "tables": [
       "66b6743c20a99e1449838726",
       "66b6745320a99e1449838727",
       "66b6745320a99e1449838728"
     ]
  },
  {
    "_id": "66b67d2220a99e144983872a",
    "name": "Tulsa",
    "public": false,
    "tables": [
      "66b67d2320a99e144983872b"
      "66b67d2320a99e144983872b"
    ]
  }
]`
    }
}
