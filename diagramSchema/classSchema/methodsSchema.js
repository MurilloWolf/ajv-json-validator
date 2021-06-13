const paramsMethods = {
    type:"object",
    properties: {
        name:{type:"string",}, 
        type:{type:"string",}, 
    },
    required: ["name","type"]
}

const methodsSchema = {
    type:"object",
    properties: {
        name:{type:"string",}, 
        returnType:{type:"string",}, 
        permission:{type:"string",}, 
        description:{type:"string",}, 
        params:{
            type:["array","null"],
            properties: {
                items: paramsMethods
            }
        }
    },
    required: ["name","permission", "description", "returnType"],
    additionalProperties: false
}

export default methodsSchema;