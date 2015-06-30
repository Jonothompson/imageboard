import Ember from 'ember';

export default Ember.Component.extend({
	tagName: 'ul',
	
	pins: [
		{title: 'One', url: 'https://google.com'},
		{title: 'Two', url: 'https://google.com'},
	]
});
