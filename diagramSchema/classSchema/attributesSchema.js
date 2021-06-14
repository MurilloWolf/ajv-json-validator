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

module.exports = attributesSchema;
