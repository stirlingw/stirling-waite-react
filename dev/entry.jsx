var React = require('react'),
  Router = require('react-router'),
  Routes = require('../elements/Routes.jsx');

require('../bower_components/jquery/dist/jquery.min.js');
require('../bower_components/bootstrap/dist/css/bootstrap.min.css');
require('../bower_components/bootstrap/dist/js/bootstrap.min.js');
//require('../bower_components/pure/pure.css');
require('../elements/style.css');

Router.run(Routes, Router.HistoryLocation,  function (Handler) {
  React.render(React.createElement(Handler, null), document);
});
