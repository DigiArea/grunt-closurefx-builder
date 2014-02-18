Grunt plugin for Closure FX Builder
===================================

Grunt plugin for Closure FX Builder is created to effectively use [https://github.com/DigiArea/closurefx-builder Closure FX Builder] in your build tasks.

### Install

Use the following command to install the plugin:
```bash
$ npm install grunt-closurefx-builder
```

### Load

Load the task by adding the following line to your `grunt.js` gruntfile:
```javascript
grunt.loadNpmTasks('grunt-closure-compiler');
```

### Use
Then you can minify JavaScript calling:
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
