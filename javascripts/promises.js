requirejs.config({
  baseUrl: './javascripts',
  paths: {
    'jquery': '../lib/bower_components/jquery/dist/jquery.min',
    'lodash': '../lib/bower_components/lodash/lodash.min',
    'hbs': '../lib/bower_components/require-handlebars-plugin/hbs',
    'bootstrap': '../lib/bower_components/bootstrap/dist/js/bootstrap.min'
     
  },
  shim: {
    'bootstrap': ['jquery']
  }
});

requirejs(
  ["jquery", "hbs", "bootstrap", "get-books", "search"], 
  function($, Handlebars, bootstrap, books, search) {
    console.log("in promise");
    books.load(function(bookArray) {
      console.log("in load");
      require(['hbs!../templates/books'], function(bookTpl) {
        console.log("inside templates")
        console.log(bookTpl);
        console.log(bookArray);
        $("#bookList").html(bookTpl({ books:bookArray }));
      });
    });
  }
);
