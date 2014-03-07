/*
 * grunt-closurefx-builder
 * http://digi-area.com/ClosureFX/
 *
 * Copyright (c) 2014 DigiArea, Inc.
 * Licensed under the Apache v2.0 License.
 */

'use strict';

module.exports = function(grunt) {

  'use strict';

  var exec = require('child_process').exec,
      fs = require('fs'),
      path = require('path'),
      gzip = require('zlib').gzip;

  grunt.registerMultiTask('closurefx-builder', 'Grunt plugin for Closure FX Builder', function() {

    var closure = '',
        builder = '',
        data = this.data,
        done = this.async();

    if (data.builder) {
      builder = data.builder;
    } else if (process.env.CLOSURE_FX_BUILDER_PATH) {
      builder = process.env.CLOSURE_FX_BUILDER_PATH;
    } else {
      grunt.log.error('' +
          '/!\\'.red +
          ' Set an environment variable called ' +
          'CLOSURE_FX_BUILDER_PATH'.red + ' or the option' + 'builder'.red +
          ' that\nshould be pointed to your installation directory of Closure FX Builder.' +
          '\n');
      return false;
    }

    var command = 'java -jar "' + builder + 'ClosureFXBuilder.jar"';

    data.cwd = data.cwd || './';

   // build file path is required
    if (!data.closure || !data.closure.length) {
      grunt.warn('Missing closure property.');
      return false;
    }

    //resolve build file path
    if (!grunt.file.isPathAbsolute(data.closure)) {
        data.closure = path.resolve("./") + "/" + data.closure;
    }

if(data.log){
//resolve log file path
    if (!grunt.file.isPathAbsolute(data.log)) {
        data.log = path.resolve("./") + "/" + data.log;
    }
}

    // command
    command += ' -closure "' + data.closure + '"';

    exec(command, function(err, stdout, stderr) {
      if (err) {
        grunt.warn(err);
        done(false);
      }

if(data.log){
fs.writeFile(data.log, '', function(){})
}

      if (stdout) {
if(data.log){
           // save info to file
            fs.appendFile(data.log, stdout, function(err) {
              if (err) {
                grunt.warn(err);
              }
              grunt.log.writeln('Information and warnings are saved in ' + data.log + '.');
            });
}else{
 grunt.log.writeln(stdout);
}
       
      }

        if (stderr) {
if(data.log){
           // save errors to file
            fs.appendFile(data.log, stderr, function(err) {
              if (err) {
                grunt.warn(err);
              }
              grunt.log.writeln('Errors are saved in ' + data.log + '.');
            });
}else{
          grunt.log.error(stderr);
done(false);
}
        }

        done();

    });

  });
};
