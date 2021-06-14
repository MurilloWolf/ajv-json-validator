const positionSchema = {
    type:"object",
    properties: {

        x: {type: "integer"},
        y: {type: "integer"},
        z: {type: "integer"}
    },
    required: ["x","y","z"],
    additionalProperties: false
}

module.exports = positionSchema;