import Ember from 'ember';

export default Ember.Route.extend({
	model: function() {
		return [
			{title: 'Free Hug', url: 'https://google.com'},
			{title: 'Free Hate', url: 'https://google.com'},
		];
	}
});
