import patterns from '../patterns'

const modificatorsSchema = {
    type:"object",
    properties: {
        pattern:{
            type:["array","null"],
            uniqueItems: true,
            additionalItems: false,
            items:[
                {enum:patterns}
            ],
            minItems: 1,
            maxItems: 3
        }, 
        type:{
            type:"array",
            uniqueItems: true,
            additionalItems: false,
            items:[{type:"string"}],//ENUM
            minItems: 1,
        },
        description: {type: "string"},
    },
    required: ["pattern","description"],
    additionalProperties: false
}

export default modificatorsSchema;