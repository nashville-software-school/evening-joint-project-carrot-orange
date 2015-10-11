define(function(require) {
  var _ = require("lodash");

  return {
    load: function(fn) {
    	console.log("in get books");
      // This XHR does belong here

      $.ajax("https://nss-book-store.firebaseio.com/books.json").done(function(books) {
      	console.log(books);
      	console.log(fn);
        fn(books);

      });

    }
  };
});