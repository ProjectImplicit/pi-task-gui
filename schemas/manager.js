let jsonfile = require('jsonfile');
jsonfile.spaces = 4;

import {Task} from './core/taskConstructor';
import {taskElement} from './manager/taskElement';
import {settings} from './manager/managerSettings';

var task = new Task('Manager');

task.registerElement('task', taskElement);
task.registerRootSequence('task');
task.registerSettings(settings);

export default task.render();