'use strict';
/*jshint laxbreak:true laxcomma:true unused:false*/
/**
 * Module dependencies.
 */

var express = require('express'),
     format = require('util').format,
     util = require('util'),
     fs = require('fs');

var app = module.exports = express();

// bodyParser in connect 2.x uses node-formidable to parse form data and uploads

app.use(express.bodyParser({
                            keepExtensions: true 
                            //uploadDir: __dirname + '/images/tmp'
                            }
                           ));

//This is lazy - we need to move all the files that go to the browser to a subdirectory
app.use(express.static(__dirname + '/'));

app.get('/', function(req, res){
  res.send('<form method="post" enctype="multipart/form-data">'
    + '<p>session: <input type="text" name="session" /></p>'
    + '<p>Image: <input type="file" name="image" /></p>'
    + '<p><input type="submit" value="Upload" /></p>'
    + '</form>');
});

app.post('/api/upload_file', function(req, res, next){
  // the uploaded file can be found as `req.files.image` and the
  // title field as `req.body.title`
  req.body.session = 'aaron';
  var destDir = __dirname + '/uploads/' + req.body.session;
  var destFilename = destDir  + '/' + req.files.image.name
  //if the output directory does not exist - create it
  try {
        fs.statSync(destDir);
    } catch (err) {
        fs.mkdirSync(destDir); 
    }
  
  //if the file upload is not there - log it.  Really should error out here
  if (!fs.statSync(req.files.image.path)){ console.log('Error - No file');}
 
  //copy file from its tmp upload space to /uploads/{sessionName}
  //fs.renameSync(req.files.image.path,destFilename);
  //cloud9 has /tmp and this dir on different partitions so a simple rename will not work.  Need to move the bits across in code
  var is = fs.createReadStream(req.files.image.path)
  var os = fs.createWriteStream(destFilename);
  util.pump(is, os, function() {
     //file is moved - del the tmp file
     fs.unlinkSync(req.files.image.path);
  });

  res.send({'send': format('"\nuploaded %s (%d Kb) to %s as %s under %s"'
    , req.files.image.name
    , req.files.image.size / 1024 | 0
    , req.files.image.path
    , req.body.title
    , req.body.session) });
});

if (!module.parent) {
  app.listen(process.env.PORT, process.env.IP);
  console.log('Express started on port' + process.env.PORT);
}