var sequence = {
  id: 'sequence',
  title: 'Sequence',
  type:'array',
  items: {
    type:'object',
    oneOf: [
      {$ref:'#/definitions/mixer'},
      {$ref:'#/definitions/basicItem'}
    ]
  }
};

var mixer = {
  title:'mixer',
  oneOf: [
    {
      title:'Random',
      type:'object',
      description: 'Randomize the order of elements within the sub-sequence.',
      additionalProperties:false,
      properties:{
        mixer: {type:'string','enum':['random'], options:{hidden:true}},
        data: {$ref:'#/definitions/sequence'}
      }
    },
    {
      title:'Repeat',
      type:'object',
      description:'Repeat the sub-sequence "times" times.',
      additionalProperties:false,
      properties:{
        mixer: {type:'string','enum':['repeat'], options:{hidden:true}},
        times: {type:'integer'},
        data: {$ref:'#/definitions/sequence'}
      }
    },
    {
      title:'Weighted random',
      type:'object',
      description:'Randomly pick an element out of the sub-sequence, according to the set weights.',
      additionalProperties:false,
      properties:{
        mixer: {type:'string','enum':['weightedRandom'], options:{hidden:true}},
        weights: {type:'array',items:{type:'number'},format:'table'},
        data: {$ref:'#/definitions/sequence'}
      }
    },
    {
      title:'Choose',
      type:'object',
      description: 'Randomly choose n elements out of the sub-sequence.',
      additionalProperties:false,
      properties:{
        mixer: {type:'string','enum':['choose'], options:{hidden:true}},
        n: {type:'number','default':1},
        data: {$ref:'#/definitions/sequence'}
      }
    },
    {
      title:'Wrapper',
      type:'object',
      description:'A sort of parenthesis; delays evaluation of the sub-sequence until it is reached.',
      additionalProperties:false,
      properties:{
        mixer: {type:'string','enum':['wrapper'], options:{hidden:true}},
        data: {$ref:'#/definitions/sequence'}
      }
    }
  ]
};

module.exports = {
  sequence: sequence,
  mixer: mixer
}
