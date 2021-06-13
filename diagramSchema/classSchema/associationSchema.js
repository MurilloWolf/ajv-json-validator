const occurrencies = {
    type:"object",
    properties:{
        min:{type:"string"},
        max:{type:"string"}
    },
    required:["min","max"],
    additionalProperties: false
}

const associationSchema = {
    type:"object",
    properties:{
        type:{type:"string"},
        classId:{type:"string"},
        tag:{type:"string"},
        read:{type:"boolean"},
        navigation:{type:"boolean"},
        occurrencies: occurrencies
    },
    required:["type","classId","tag","read","navigation","ocurrencies"],
    additionalProperties: false
}
export default associationSchema;