const permissionTypes = require('../permissions')

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
        permission:{enum: permissionTypes}, 
        description:{type:"string",}, 
        params:{
            type:["array","null"],
            items: paramsMethods
        }
    },
    required: ["name","permission", "description", "returnType","params"],
    additionalProperties: false
}

module.exports = methodsSchema;