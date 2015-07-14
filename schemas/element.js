export let element = {
  title: 'Basic element',
  type:'object',
  properties:{
    inherit: {$ref:'#/definitions/inherit'},
    data: {type:'object', options:{no_additional_properties:false}, description:'Sets up some local variables.'},
    merge: {type:'array',uniqueItems: true,format:'table',items:{type:'string'}, description:'Attributes inheritance extends instead of overriding.'},
    regenerateTemplate: {type:'boolean', description:'Regenerate templates each time they are encountered'}
  },
  defaultProperties: ['inherit']
}

export let inherit = {
  title: 'inherit',
  type: 'object',
  format:'grid',
  properties: {
    set: {type: 'string',description: 'Which set are we inheriting from.'},
    type:{'enum':['random','exRandom','sequential','byData'], description:'The inheritance method.'},
    seed:{type:'string'},
    repeat:{type:'boolean'}
  },
  defaultProperties: ['set','type']
}
