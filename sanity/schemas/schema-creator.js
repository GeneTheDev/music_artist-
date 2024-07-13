// schemas/schema-creator.js

import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

import heroSchema from './heroschema'
import bannerSchema from './bannerschem'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([heroSchema, bannerSchema]),
})
