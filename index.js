require("babel-register")({
  ignore: function(filename) {
    if (/node_modules\/react\/lib/.test(filename)) {
      return false;
    }
    if (/node_modules\/react-dom\/lib/.test(filename)) {
      return false;
    }
    return /node_modules/.test(filename);
  }
});
require("./benchmarkRunner");
