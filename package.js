Package.describe({
  summary: "A Meteor 0.9 package for moment.js including support for locales",
  version: "0.2.8.2",
  git: "localhost"
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.0');
  api.addFiles(['en-au.js', 'en-gb.js'].map(function(f) { return 'bower_components/moment/locale/' + f; }), ['client', 'server']);
  api.addFiles(['bower_components/moment/min/moment.js'], ['client', 'server']);
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('flamparski:moment-locales');
  api.addFiles('flamparski:moment-locales-tests.js');
});
