Grunt plugin for Closure FX Builder
===================================

Grunt plugin for Closure FX Builder is created to effectively use [Closure FX Builder](https://github.com/DigiArea/closurefx-builder) in your build tasks.

### Install

Use the following command to install the plugin:
```bash
$ npm install grunt-closurefx-builder
```

### Load

Load the task by adding the following line to your `grunt.js` gruntfile:
```javascript
grunt.loadNpmTasks('grunt-closurefx-builder');
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
