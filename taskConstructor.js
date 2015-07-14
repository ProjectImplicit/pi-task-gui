import {element, inherit, createElementSet} from './element';
import {mixers, createSequence} from './sequence';


const defaultProperties = {
	current: {type:'object'},
	global: {type:'object'}
};

const defaultDefinitions = {element, inherit, mixers};

export class Task {
	constructor(){
		this.schema = {
			properties: Object.assign({}, defaultProperties),
			definitions: Object.assign({}, defaultDefinitions)
		};
	}

	toString(){
		return JSON.stringify(this.schema);
	}

	setElement(elementName, element){
		this.schema.definitions[`${elementName}Element`] = element;

		this.schema.properties[`${elementName}Set`] = {$ref:`#/definitions/${elementName}Sets`};
		this.schema.definitions[`${elementName}Sets`] = createElementSet(elementName);
	}

	setSequence(elementName){
		this.schema.properties.sequence = {$ref:`#/definitions/sequence`};
		this.schema.definitions.sequence = createSequence(elementName);
	}

	setSettings(settings){
		this.schema.properties.settings = {$ref:`#/definitions/settings`};
		this.schema.definitions.settings = settings;
	}

	render(){
		if (!this.schema.definitions.sequence){
			throw new Error('Sequence must be set.');
		}

		if (!this.schema.properties.settings){
			console.warn('Settings where not defined');
		}

		return this.toString();
	}
}