export default {
  name: 'component-store',

  initialize: function(container, app) {
    app.inject('component', 'store', 'store:main');
    // app.register('route', 'foo', 'service:foo');
  }
};
