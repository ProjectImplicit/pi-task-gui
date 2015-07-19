import {deepTemplate} from './deepTemplate';

let sequence = {
  id: 'sequence',
  title: 'Sequence',
  type:'array',
  required:true,
  items: {
    type:'object',
    oneOf: [
      {$ref:'#/definitions/<%= elementName %>Element'},
      {$ref:'#/definitions/<%= elementName %>Mixer'}
    ]
  }
};

let mixer = {
  title:'mixer',
  oneOf: [
    {
      title:'Random',
      type:'object',
      description: 'Randomize the order of elements within the sub-sequence.',
      additionalProperties:false,
      properties:{
        mixer: {type:'string','enum':['random'], required:true, options:{hidden:true}},
        data: {$ref:'#/definitions/<%= elementName %>Sequence'}
      }
    },
    {
      title:'Repeat',
      type:'object',
      description:'Repeat the sub-sequence "times" times.',
      additionalProperties:false,
      properties:{
        mixer: {type:'string','enum':['repeat'], required:true, options:{hidden:true}},
        times: {type:'integer'},
        data: {$ref:'#/definitions/<%= elementName %>Sequence'}
      }
    },
    {
      title:'Weighted random',
      type:'object',
      description:'Randomly pick an element out of the sub-sequence, according to the set weights.',
      additionalProperties:false,
      properties:{
        mixer: {type:'string','enum':['weightedRandom'], required:true, options:{hidden:true}},
        weights: {type:'array',items:{type:'number'},format:'table'},
        data: {$ref:'#/definitions/<%= elementName %>Sequence'}
      }
    },
    {
      title:'Choose',
      type:'object',
      description: 'Randomly choose n elements out of the sub-sequence.',
      additionalProperties:false,
      properties:{
        mixer: {type:'string','enum':['choose'], required:true, options:{hidden:true}},
        n: {type:'number','default':1},
        data: {$ref:'#/definitions/<%= elementName %>Sequence'}
      }
    },
    {
      title:'Wrapper',
      type:'object',
      description:'A sort of parenthesis; delays evaluation of the sub-sequence until it is reached.',
      additionalProperties:false,
      properties:{
        mixer: {type:'string','enum':['wrapper'], required:true, options:{hidden:true}},
        data: {$ref:'#/definitions/<%= elementName %>Sequence'}
      }
    }
  ]
};

export function registerSequence(elementName, options){
  let definitions = this.schema.definitions;
  let properties = this.schema.properties;
  let context = {elementName};

  definitions[`${elementName}Sequence`] = deepTemplate(sequence,context);
  definitions[`${elementName}Mixer`] = deepTemplate(mixer,context);

  options.rootSequence && (properties.sequence = {$ref:`#/definitions/${elementName}Sequence`});
}