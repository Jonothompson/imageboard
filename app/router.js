import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('pins', function() {
    this.route('create');
    this.route('show');
    this.route('loading');
  });
});

export default Router;
