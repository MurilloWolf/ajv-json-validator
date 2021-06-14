import Ajv from 'ajv';

//= ================ DEFINIÇÕES =================
const primitiveTypes = [
    "integer",
    "boolean",
    "string",
    "double",

]

const primitivePermissions = [
    "public",
    "protect",
    "private"
]
const patterns = [
  'observer',
  'abstract factory',
  'builder',
  'prototype',
  'factory method',
  'adapter',
  'facade',
  'strategy',
];

const modificators = [
  'abstract',
  'interface',
  'static',
  'commun'
];

//= ================ Position V ==============

const positionSchema = {
  type: 'object',
  properties: {
    x: { type: 'integer' },
    y: { type: 'integer' },
    z: { type: 'integer' },
  },
  required: ['x', 'y', 'z'],
  additionalProperties: false,
};

const dataPosition = {
  x: 100,
  y: 100,
  z: 1,
};

//======================= Modificators V

const modificatorsSchema = {
  type: 'object',
  properties: {
    pattern: {
      type: ['array', 'null'],
      uniqueItems: true,
      additionalItems: false,
      items: [
        { enum: patterns },
      ],
      minItems: 1,
    },
    type: {
      type: 'array',
      uniqueItems: true,
      additionalItems: false,
      items: [{ enum: modificators }], // ENUM
      minItems: 1,
    },
    description: { type: 'string' },
  },
  required: ['pattern', 'description'],
  additionalProperties: false,
};

const dataModificators = {
  pattern: ['observer'],
  description: "Padrao observer",
  type:['commun']

};

// ==================== Attributos V


const attributesSchema = {
    type: 'object',
    properties: {
      name: { type: 'string' },
      type: { enum: primitiveTypes },
      permission: { enum: primitivePermissions },
      description: { type: 'string' },
    },
    required: ['name', 'permission', 'description', 'type'],
    additionalProperties: false,
};

const dataAttributes = {
    name: "atributo 1",
    type: "integer",
    permission: "public",
    description: "atributo 1 "
}

// ==================== Methods V
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
            items: paramsMethods
            
        }
    },
    required: ["name","permission", "description", "returnType"],
    additionalProperties: false
}

const dataMethods = {
    name:"add",
    returnType:"void",
    permission:"public",
    description:"Metodod que adiciona",
    params:[]
}


const ajv = new Ajv();
const validate = ajv.compile(modificatorsSchema);

const valid = validate( {
  pattern: ['Meu padrão'],
  description: "Padrao observer",
  type:['commun']
});
valid ? console.log('Diagrama Valido') : console.log('Diagrama Invalido');
