import {registerElement} from './element';
import {registerSequence} from './sequence';

const commonProperties = {
	current: {type:'object'},
	global: {type:'object'}
};

export class Task {
	constructor(name){
		this.schema = {
			title:`${name}`,
			type:'object',
			properties: Object.assign({}, commonProperties),
			definitions: {},
			defaultProperties: ['sequence']
		};
	}

	toString(){
		return JSON.stringify(this.schema);
	}

	registerElement(elementName, element){
		registerElement.call(this,elementName, element);
	}

	registerSequence(elementName){
		registerSequence.call(this, elementName);
	}

	registerRootSequence(elementName){
		registerSequence.call(this, elementName,{rootSequence:true});
	}

	registerSettings(settings){
		this.schema.properties.settings = {$ref:`#/definitions/settings`};
		this.schema.definitions.settings = settings;
	}

	render(){
		if (!this.schema.properties.sequence){
			throw new Error('Sequence must be set.');
		}

		if (!this.schema.definitions.settings){
			console.warn('Settings where not defined');
		}

		return this.schema;
	}
}