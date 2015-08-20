/**
 * Utilities module
 */
var fs = require('fs'),
  pathUtil = require('path');

module.exports = {
  basePath: __dirname + '/../../../..',
  getFilename: function(f) {
    var filenameArray = f.split('/'),
      filename = filenameArray[filenameArray.length - 1];

    return filename;
  },

  /**
   * Check if changed file
   * was a _data.json of a module
   */
  wasDataOfModule: function(f) {
    return f.indexOf('modules') !== -1 && f.indexOf('_data.json') !== -1;
  },

  /**
   * Check if changed file
   * was a *.js of a module
   */
  wasJavascriptOfModule: function(f) {
    return f.indexOf('modules') !== -1 && pathUtil.extname(f) === '.js';
  },

  /**
   * Check if changed file
   * was a *.scss, *.sass, *.less or *.styl of a module
   */
  wasStylesheetOfModule: function(f) {
    var ext = pathUtil.extname(f);
    return f.indexOf('modules') !== -1 && (ext === '.scss' || ext === '.sass' || ext === '.less' || ext === '.styl');
  },

  /**
   * Check if changed file
   * was a directory of a module
   */
  wasDirectory: function(removed, f) {
    var filename = this.getFilename(f);
    if (!removed) {
      return fs.lstatSync(f).isDirectory();
    } else {
      return filename.indexOf('_') === 1 && filename.indexOf('.') === -1;
    }
  },

  /**
   * Check if changed file
   * was the main _data.json
   */
  wasBaseDataFile: function(f) {
    var filenameArray = f.split('/'),
      folder = filenameArray[filenameArray.length - 2],
      filename = this.getFilename(f);

    return folder === 'styleguide' && filename === '_data.json';
  },

  /**
   * Outputs command line stdout
   */
  puts: function(error, stdout) {
    console.log(stdout);
  }
};
