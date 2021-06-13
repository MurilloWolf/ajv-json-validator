const attributesSchema = {
    type:"object",
    properties: {
        name:{type:"string",}, 
        type:{type:"string",}, 
        permission:{type:"string",}, 
        description:{type:"string",}, 
    },
    required: ["name","permission", "description", "type"],
    additionalProperties: false
}

export default attributesSchema;