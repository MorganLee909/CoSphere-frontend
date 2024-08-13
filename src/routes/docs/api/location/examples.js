export default {
    locationObject: {
        title: "Location object",
        object: `{
  "_id": "66ba3c9ce89e242637838726",
  "name": "Myrtle Beach",
  "tables": [
    "66ba3cebe89e242637838727",
    "66ba3cebe89e242637838728",
    "66ba3cece89e242637838729"
  ]
}`
    },

    getLocations: {
        title: "Get Locations",
        response: `[
  {
    "_id": "66bbb390fbb07354a6838726",
    "name": "New York"
  },
  {
    "_id": "66bbb392fbb07354a6838727",
    "name": "Denver"
  }
]`
    },

    getLocation: {
        title: "Get Location",
        url: "GET https://cosphere.work/api/location/66bbb392fbb07354a6838727",
        response: `{
  "_id": "66bbb392fbb07354a6838727",
  "name:": "Denver",
  "tables": [
    "66bbb67ffbb07354a6838728",
    "66bbb67ffbb07354a6838729",
    "66bbb680fbb07354a683872a"
  ]
}`
    }
}
