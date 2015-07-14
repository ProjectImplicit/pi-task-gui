// import {definitions, mixinElement, mixinSequence} from './schemas/core';
// import {element, inherit} from './schemas/element';

let properties = {
	settings:{$ref:'#/definitions/settings'},
	taskSets: {$ref:'#/definitions/taskSets'},
	sequence:{$ref:'#/definitions/taskSequence'}
};

function buildProperties({elements, rootElement}){
	let properties = {
		sequence: {$ref:`#/definitions/${rootElement}Sequence`},
		settings:{$ref:'#/definitions/settings'},
		current: {type:'object'},
		global: {type:'object'}
	};

	elements.forEach(name => {
		properties[`${name}Sets`] = {$ref:`#/definitions/${name}Sets`};
	});

	return properties;
}

console.log(buildProperties({elements:['page','questions'],rootElement: 'page'}));

// var study = {
// 	title: 'piTask',
// 	properties
// }

// Object.assign(study.definitions, core, mixinElement('task', task), mixinSequence('task');

// mixinElement // define element and set
// mixinSequence(elementName) // define sequence

// // names are prefixed by element type


let task = new Task('Manager');

task.registerElement('page', page);
task.registerElement('question', question);
task.registerRootSequence('page');
task.registerSettings(settings);
task.render(); // throws if sequence or settings were'nt set
