let pipTask = {
  title: 'PIP',
  type:'object',
  format:'grid',
  properties: {
    type: {type:'string', 'enum': ['pip'], options:{hidden:true}},
    script: {type:'string', description:'The actual script object for the pip task.'},
    scriptUrl: {type:'string', description:'The url for the pip script.', format:'url'}
  },
  defaultProperties: ['type','name','scriptUrl']
};

let questTask = {
  title: 'Questionnaire',
  type:'object',
  format:'grid',
  properties: {
    type: {type:'string', 'enum': ['quest'], options:{hidden:true}},
    script: {type:'string', description:'The actual script object for the quest task.'},
    scriptUrl: {type:'string', description:'The url for the quest script.', format:'url'}
  },
  defaultProperties: ['type','name','scriptUrl']
};


let messageTask = {
  title: 'Message',
  type:'object',
  properties: {
    type: {type:'string', 'enum': ['message'], options:{hidden:true}},
    template: {type:'string', description:'The actual html to display as a string.', format: 'html',options:{wysiwyg:true}},
    templateUrl: {type:'string', description:'The url for the message html file.'},
    keys: {
      type:'array',
      items:{type:'string'},
      description:'Controls the proceed key: either a key (i.e. \'a\') a keyCode (i.e. 65).'
    }
  },
  defaultProperties: ['type','name','template']
};

export let taskElement = {
  title: 'Task',
  type:'object',
  properties: {
    name: {type:'string',description:'The name of the task, used for recording information.',required:true},
    title: {type:'string',description:'A string to be used as the page title (the name displayed on the tag). It is reset at the end of the task.'},
    canvas: {
      title: 'Canvas settings',
      type:'object',
      properties: {
        background: {type:'string', format:'color', description: 'The overall background color.', 'default': '#FFFFFF'},
        canvasBackground: {type:'string', format:'color', description: 'Default canvas background color.', 'default': '#FFFFFF'},
        fontColor: {type:'string', format:'color', description:  'Default font color.', 'default': '#000000'},
        fontSize: {type:'string', description: 'Default font size.'}
      }
    }
  },
  oneOf: [pipTask, questTask, messageTask],
  additionalProperties: false
};
