const occurrenciesTypesMax = ["1", "*"]
const occurrenciesTypesMin = ["1", "0"]
const occurrencies = {
    type:"object",
    properties:{
        min:{enum:occurrenciesTypesMin},
        max:{enum:occurrenciesTypesMax},
    },
    required:["min","max"],
    additionalProperties: false
}

const associationsSchema = {
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
module.exports = associationsSchema;