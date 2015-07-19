export let settings = {
	title: 'Settings',
	type: 'object',
	properties: {
		canvas: {
	      title: 'Canvas settings',
	      type:'object',
	      properties: {
	        background: {type:'string', format:'color', description: 'The overall background color.', 'default': '#FFFFFF'},
	        canvasBackground: {type:'string', format:'color', description: 'Default canvas background color.', 'default': '#FFFFFF'},
	        fontColor: {type:'string', format:'color', description:  'Default font color.', 'default': '#000000'},
	        fontSize: {type:'string', description: 'Default font size.'}
	      }
	    },
	    title: {type:'string',description:'A string to be used as the page title (the name displayed on the tag).'},
	    preloadImages: {type:'array',items:{type:'string', format:'url'}, description:'An array of image urls to preload.', format:'table'},
	    skip:{type:'boolean', description: 'Whether to activate the skip and refresh option. If activated, clicking "ctrl r" reloads the current task (this feature may not be supported on older browsers), clicking escape and then the right or left arrows skips to the next or previous tasks.'}
	},
	defaultProperties: []
};

