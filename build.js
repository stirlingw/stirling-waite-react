process.env.NODE_ENV='production';
var fs = require('fs'),
  mkdirp = require('mkdirp'),
  page = require('./dev/bundleStaticPage.js'),
  paths = require('./paths'),
  webpack = require('webpack'),
  config = require('./webpack.config');

webpack(config[1], function(err, stats) {

  if(err) {

    console.log(err);

  } else {

    var assets = 'public/assets';
    mkdirp.sync(assets);
    fs.writeFileSync(assets + '/jquery.min.js', fs.readFileSync('bower_components/jquery/dist/jquery.min.js'));
    fs.writeFileSync(assets + '/bootstrap.min.js', fs.readFileSync('bower_components/bootstrap/dist/js/bootstrap.min.js'));
    fs.writeFileSync(assets + '/bootstrap.css', fs.readFileSync('bower_components/bootstrap/dist/css/bootstrap.min.css'));
    fs.writeFileSync(assets + '/style.css', fs.readFileSync('elements/style.css'));

    for(var path in paths.allPaths()) {
      if(path!=='posts') {
        mkdirp.sync('public' + path);
        fs.writeFileSync('public' + path + '/index.html', page(path));
        console.log(path);
      }
    }

    mkdirp.sync('public/blog');
    for(var post in paths.allPosts()) {
      fs.writeFileSync('public/blog/' + post + '.html', page('/blog/' + post));
      console.log('blog/' + post + '.html');
    }

  }

  console.log('build complete');

});
