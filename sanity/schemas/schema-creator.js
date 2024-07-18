// schemas/schema-creator.js

import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

import heroSchema from './heroschema'
import bannerSchema from './bannerschem'
import recentSchema from './recentschema'
import videoSchema from './videoschema'
import aboutschema from './aboutschema'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([heroSchema, bannerSchema, recentSchema, videoSchema, aboutschema]),
})
