![Grunt Plugin for Closure FX Builder](https://lh6.googleusercontent.com/-7FawEk8cIXE/UxoQfjfg-dI/AAAAAAAAAJY/cTBvkTLei04/w699-h178-no/ClosureFXBuilderGrunt.png)

Grunt plugin for Closure FX Builder is created to use [Closure FX Builder](https://github.com/DigiArea/closurefx-builder) and [Closure Compiler](https://developers.google.com/closure/compiler/) in your build tasks.

[![NPM](https://nodei.co/npm/grunt-closurefx-builder.png?compact=true)](https://nodei.co/npm/grunt-closurefx-builder/)

### Prepare

To use the plugin, you need to [download the latest build of Closure FX Builder](https://github.com/DigiArea/closurefx-builder/releases). The builder is distributed as a simple zip archive. To install the builder, just download and unzip the archive.
 
 - [Download Closure FX Builder](https://github.com/DigiArea/closurefx-builder/releases)
 - [How to install Closure FX Builder?](https://github.com/DigiArea/closurefx-builder#installation-and-running)
 - [How to use Closure FX Builder?](https://github.com/DigiArea/closurefx-builder#usage)


### Install

From the same directory as your project's Gruntfile and package.json, install the plugin using the following command:
```bash
$ npm install grunt-closurefx-builder
```

### Load

Load the task by adding the following line to your project's Gruntfile:
```javascript
grunt.loadNpmTasks('grunt-closurefx-builder');
```

### Use
Run Closure Build Configuration calling:
```javascript
grunt.initConfig({
  'closurefx-builder': {
    frontend: {
      builder: 'libs/closurefx-builder/',
      closure: 'build.closure',
      log: 'error.log'
    }
  }
});
```

### Options

```builder``` - a path to Closure FX Builder installation directory. 
  - For example: /home/john/ClosureFXBuilder/

```closure``` - a path to the Closure Build Configuration file (*.closure).
  - The path can be absolute or related to your project.
  - For example: build/build.closure

```log``` - (optional) a path to the log file to report the compiler's errors and warnings. 
  - The path can be absolute or related to your project.
  - If not specified, errors and warnings will be reported to the console. 
  - If specified and file does not exist, it will be created. Otherwise, the file will be overrided.
  - For example: logs/error.log

### Links
 
 - [Closure FX Builder GitHub project](https://github.com/DigiArea/closurefx-builder)
 - [Closure FX Builder Grunt Plugin NPM package](https://www.npmjs.org/package/grunt-closurefx-builder)

### License

This software is licensed under the Apache V2 License. See the LICENSE file for details.
