let pipTask = {
  title: 'PIP',
  type:'object',
  properties: {
    type: {type:'string', 'enum': ['pip'], options:{hidden:true}},
    script: {type:'string', description:'The actual script object for the quest or pip tasks.'},
    scriptUrl: {type:'string', description:'The url for the quest or pip script.'}
  },
  defaultProperties: ['type','name','scriptUrl']
};

let messageTask = {
  title: 'Message',
  type:'object',
  properties: {
    type: {type:'string', 'enum': ['message'], options:{hidden:true}},
    template: {type:'string', description:'The actual html to display as a string.'},
    templateUrl: {type:'string', description:'The url for the message html file.'},
    keys: {
      type:'array',
      items:{type:'string'},
      description:'Controls the proceed key: either a key (i.e. \'a\') a keyCode (i.e. 65).'
    }
  },
  defaultProperties: ['type','name','templateUrl']
};

export let taskElement = {
  title: 'Task',
  type:'object',
  properties: {
    name: {type:'string',description:'The name of the task, used for recording information.',required:true},
    title: {type:'string',description:'A string to be used as the page title (the name displayed on the tag). It is reset at the end of the task.'}
  },
  oneOf: [pipTask, messageTask],
  additionalProperties: false
};
