import positionSchema from './positionSchema';
import modificatorsSchema from './modificatorsSchema';
import methodsSchema from './methodsSchema';
import attributesSchema from './attributesSchema';
import associationSchema from './associationSchema';

const classSchema = {
  type: 'object',
  properties: {
    uuid: { type: 'string' },
    title: { type: 'string' },
    type: { type: 'string' },
    position: positionSchema,
    modificators: modificatorsSchema,
    methods: {
      type: ['array', 'null'],
      items: methodsSchema,
      uniqueItems: true,
      additionalItems: false,
      minItems: 1,
    },
    attributes: {
      type: ['array', 'null'],
      items: attributesSchema,
      uniqueItems: true,
      additionalItems: false,
      minItems: 1,
    },
    association: {
      type: ['array', 'null'],
      items: associationSchema,
      uniqueItems: true,
      additionalItems: false,
      minItems: 1,
    },
  },
  required: ['uuid', 'title', 'type', 'position', 'modificator', 'attributes', 'methods', 'association'],
  additionalProperties: false,
};

export default classSchema;
