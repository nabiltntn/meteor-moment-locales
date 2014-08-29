Package.describe({
  summary: "A Meteor 0.9 package for moment.js including support for locales",
  version: "0.0.1",
  git: "https://github.com/FLamparski/meteor-moment-locales"
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.0');
  api.addFiles(['./bower_components/moment/moment.js'], ['server', 'client']);
  api.addFiles(['en-au.js', 'en-gb.js'].map(function(f) { return './bower_components/moment/locale/' + f; }), ['client', 'server']);
  api.addFiles('flamparski:moment-locales.js', ['client', 'server']);
  api.export(['moment']);
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('flamparski:moment-locales');
  api.addFiles('flamparski:moment-locales-tests.js');
});
