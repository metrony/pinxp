/*jshint globalstrict:true laxbreak:true laxcomma:true unused:false es5:true  */
/*global require:true module:true __dirname:true console:true process:true*/

'use strict';

/**
 * Module dependencies.
 */

var express = require('express'),
     format = require('util').format,
     util = require('util'),
     fs = require('fs');

var app = module.exports = express();

// bodyParser in connect 2.x uses node-formidable to parse form data and uploads
//this library makes handling form uploads easy.  keepExtension keeps the '.png/.gif' ext in the name
app.use(express.bodyParser({
                            keepExtensions: true
                            //uploadDir: __dirname + '/images/tmp'
                            }
                           ));

//This is lazy - we need to move all the files that go to the browser to a subdirectory
//this magic line will send back any static file if the path matches
app.use(express.static(__dirname + '/'));

//this really should not be used, call index.html instead
app.get('/', function(req, res){
  res.send('<form method="post" enctype="multipart/form-data">'
    + '<p>session: <input type="text" name="session" /></p>'
    + '<p>Image: <input type="file" name="image" /></p>'
    + '<p><input type="submit" value="Upload" /></p>'
    + '</form>');
});

app.get('/api/get_files', function(req, res, next){
  var session = req.query.session;
  var images = fs.readdirSync(__dirname + '/uploads/' + session);
  var i = 1;
  images = images.map(function(x){return {name: 'drag' + i++, 'filepath': '/uploads/' + session + '/' + x};});
  res.send({'images': images});
});

app.post('/api/upload_file', function(req, res, next){
    
  // the uploaded file can be found as `req.files.image` and the
  // session is harcoded to aaron for now
  //req.body.session = 'aaron';
  var destDir = __dirname + '/uploads/' + req.body.session;
  var destFilename = destDir  + '/' + req.files.image.name;
  //if the output directory does not exist - create it
  //something like /uploads/aaron/
  try {
        fs.statSync(destDir);
    } catch (err) {
        fs.mkdirSync(destDir);
    }
  
  //if the file upload is not there - log it.  Really should error out here.  This is fatal
  if (!fs.statSync(req.files.image.path)){ console.log('Error - No file');}
 
  //copy file from its tmp upload space to /uploads/{sessionName}
  //fs.renameSync(req.files.image.path,destFilename);
  //cloud9 has /tmp and this dir on different partitions so a simple rename will not work.  Need to move the bits across in code
  var is = fs.createReadStream(req.files.image.path);
  var os = fs.createWriteStream(destFilename);
  util.pump(is, os, function() {
     //file is moved - del the tmp file
     fs.unlinkSync(req.files.image.path);
  });

  //let the browser know all is well.
  res.send({'send': format('"\nuploaded %s (%d Kb) to %s as %s under %s"'
    , req.files.image.name
    , req.files.image.size / 1024 | 0
    , req.files.image.path
    , req.body.title
    , req.body.session) });
});

if (!module.parent) {
  var port = process.env.PORT || 8000;
  var ip = process.env.IP || "0.0.0.0";
  app.listen(port, ip);
  console.log('Express started on port ' + port);
}