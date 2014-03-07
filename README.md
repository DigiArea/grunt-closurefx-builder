Grunt plugin for Closure FX Builder
===================================

Grunt plugin for Closure FX Builder is created to effectively use [Closure FX Builder](https://github.com/DigiArea/closurefx-builder) in your build tasks.

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

 - **builder** - a path to Closure FX Builder installation directory. 
  - For example: /home/john/ClosureFXBuilder/

 - **closure** - a path to the Closure Build Configuration file (*.closure).
  - For example: /home/john/myproject/build.closure

 - **log** - a path to the log file to report the compiler's errors and warnings. 
  - If not specified, errors and warnings will be reported to the console. 
  - If specified and file does not exist, it will be created. Otherwise, the file will be overrided.

 
