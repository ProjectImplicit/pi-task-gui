var jsonfile = require('jsonfile');
jsonfile.spaces = 4;

import {Task} from './schemas/taskConstructor';
import {taskElement} from './schemas/taskElement';

let task = new Task('Task');

task.registerElement('task', taskElement);
task.registerRootSequence('task');
// task.registerSettings(settings);



let outputFilename = './json/managerTask.json';
jsonfile.writeFile(outputFilename, task.render(), function (err) {
  console.error(err);
});