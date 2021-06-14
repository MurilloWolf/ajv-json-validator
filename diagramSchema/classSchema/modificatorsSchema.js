const patterns = require('../patterns')

const modificators = [
  'abstract',
  'interface',
  'static',
  'commun'
];

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
  required: ['pattern', 'description', 'type'],
  additionalProperties: false,
};
module.exports = modificatorsSchema;
