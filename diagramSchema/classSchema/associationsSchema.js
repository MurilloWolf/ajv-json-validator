const occurencesTypesMax = ["1", "*"]
const occurencesTypesMin = ["1", "0"]
const occurencesType = {
    type:"object",
    properties:{
        min:{enum:occurencesTypesMin},
        max:{enum:occurencesTypesMax},
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
        occurences:occurencesType
    },
    required:["type","classId","tag","read","navigation","occurences"],
    additionalProperties: false
}
module.exports = associationsSchema;