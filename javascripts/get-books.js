define(function(require) {
  var _ = require("lodash");

  return {
    load: function(fn) {
    	console.log("in get books");
      // This XHR does belong here

      $.ajax("https://petdatingsite.firebaseio.com/profiles.json").done(function(books) {
      	console.log(books);
      	console.log(fn);
        fn(books);

      });

    }
  };
});