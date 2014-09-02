Package.describe({
  summary: "Hello.js repackaged for Meteor"
});

Package.on_use(function (api, where) {
  api.add_files('hello.js/dist/hello.all.min.js', 'client');
});
