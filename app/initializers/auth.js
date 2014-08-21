export default {
  name: 'auth',
  initialize: function(container, app) {
    app.inject('route', 'auth', 'service:auth');
    app.inject('service:auth', 'store', 'store:main');
  }
};
