import {deepTemplate} from './deepTemplate';

export let inherit = {
  title: 'Inherit',
  type: 'object',
  format:'grid',
  properties: {
    set: {type: 'string',description: 'Which set are we inheriting from.'},
    type:{'enum':['random','exRandom','sequential','byData'], description:'The inheritance method.'},
    seed:{type:'string'},
    repeat:{type:'boolean'}
  },
  defaultProperties: ['set','type']
};

export let basicElementProperties = {
  inherit: inherit,
  data: {type:'object', options:{no_additional_properties:false}, description:'Sets up some local variables.'},
  merge: {type:'array',uniqueItems: true,format:'table',items:{type:'string'}, description:'Attributes inheritance extends instead of overriding.'},
  regenerateTemplate: {type:'boolean', description:'Regenerate templates each time they are encountered.'}
};

export let set = {
  title: '<%= cappedElementName %> set',
  type: 'array',
  items: {
    type:'object',
    properties: {
      set: {type:'string', description:'Set name'},
      elements: {type:'array', items:{$ref:'#/definitions/<%=elementName%>Element'}}
    }
  }
};

export function registerElement(elementName, element){
  let definitions = this.schema.definitions;
  let properties = this.schema.properties;

  let context = {
    elementName,
    cappedElementName: capitalizeFirstLetter(elementName)
  };

  // assigned shared properties
  element.properties || (element.properties = {});
  Object.assign(element.properties,basicElementProperties);

  definitions[`${elementName}Element`] = deepTemplate(element,context);
  definitions[`${elementName}Set`] = deepTemplate(set,context);

  properties[`${elementName}Set`] = {$ref:`#/definitions/${elementName}Set`};
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}