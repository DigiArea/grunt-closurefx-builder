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

  // ==========================================================================
  // TASKS
  // ==========================================================================

  grunt.registerMultiTask('closurefx-builder', 'Grunt plugin for Closure FX Builder', function() {

    var closure = '',
        builder = '',
        reportFile = '',
        data = this.data,
        done = this.async();

    // Check for closure path.
    if (data.builder) {
      builder = data.builder;
    } else if (process.env.CLOSURE_FX_BUILDER_PATH) {
      builder = process.env.CLOSURE_FX_BUILDER_PATH;
    } else {
      grunt.log.error('' +
          '/!\\'.red +
          ' Set an environment variable called ' +
          'CLOSURE_FX_BUILDER_PATH'.red + ' or the build parameter' + 'builder'.red +
          ' and\nmake it point to your root install of Closure FX Builder.' +
          '\n');
      return false;
    }

    var command = 'java -jar "' + builder + 'ClosureFXBuilder.jar"';

    data.cwd = data.cwd || './';

    data.closure = grunt.file.expand({cwd: data.cwd}, data.closure);

    // Sanitize options passed.
    if (!data.closure.length) {
      // This task requires a minima an input file.
      grunt.warn('Missing closure property.');
      return false;
    }

    // Build command line.
    command += ' -closure "' + data.closure + '"';

    //if (data.jsOutputFile) {
    //  if (!grunt.file.isPathAbsolute(data.jsOutputFile)) {
    //    data.jsOutputFile = path.resolve('./') + '/' + data.jsOutputFile;
    //  }
    //  command += ' --js_output_file "' + data.jsOutputFile + '"';
    //  reportFile = data.reportFile || data.jsOutputFile + '.report.txt';
    //}

    //if (data.externs) {
    //  data.externs = grunt.file.expand(data.externs);
    //  command += ' --externs ' + data.externs.join(' --externs ');
//
    //  if (!data.externs.length) {
    //    delete data.externs;
    //  }
    //}

    //if (data.options.externs) {
    //  data.options.externs = grunt.file.expand(data.options.externs);
//
    //  if (!data.options.externs.length) {
    //    delete data.options.externs;
    //  }
    //}

    //for (var directive in data.options) {
    //  if (Array.isArray(data.options[directive])) {
    //    command += ' --' + directive + ' ' + data.options[directive].join(' --' + directive + ' ');
    //  } else if (data.options[directive] === undefined || data.options[directive] === null) {
    //    command += ' --' + directive;
    //  } else {
    //    command += ' --' + directive + ' "' + String(data.options[directive]) + '"';
    //  }
    //}

    // because closure compiler does not create dirs.
    //grunt.file.write(data.jsOutputFile, '');

    // Minify WebGraph class.
    exec(command, function(err, stdout, stderr) {
      if (err) {
        grunt.warn(err);
        done(false);
      }

      if (stdout) {
        grunt.log.writeln(stdout);
      }

      // If OK, calculate gzipped file size.
      //if (reportFile.length) {
      //  var min = fs.readFileSync(data.jsOutputFile, 'utf8');
      //  min_info(min, function(err) {
      //    if (err) {
      //      grunt.warn(err);
      //      done(false);
      //    }
//
      //    if (data.noreport) {
       //     done();
       //   } else {
       //     // Write compile report to a file.
       //     fs.writeFile(reportFile, stderr, function(err) {
       //       if (err) {
       //         grunt.warn(err);
       //         done(false);
       //       }
//
       //       grunt.log.writeln('A report is saved in ' + reportFile + '.');
      //        done();
      //      });
      //    }
//
      //  });
      //} else {
      //  if (data.report) {
      //    grunt.log.error(stderr);
      //  }
      //  done();
      //}

        if (stderr) {
          grunt.log.error(stderr);
        }
        done();

    });

  });
};
