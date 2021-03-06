# Grunt Comic Extractor

> Extract comic book files using Grunt

## Getting Started
This plugin requires Grunt `0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-comic-extract --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-comic-extract');
```

## The "comic" task

### Overview
In your project's Gruntfile, add a section named `comic` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  comic: {
    marvel: {
		src: ['deadpool.cbr', 'cable.cbz']
		dest: 'extracted/'
	}
  }
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## License
Licensed under [MIT](https://github.com/theaccordance/grunt-comic-extractor/blob/master/LICENSE) (C) 2016 Joe Mainwaring.
