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
    ["jquery", "hbs", "bootstrap", "get-books", "profile", "button", "register", "search"],
    function($, Handlebars, bootstrap, books, profile, button, register, search) {
        books.load(function(bookArray) {
            require(['hbs!../templates/books'], function(bookTpl) {
                $("#bookList").html(bookTpl({
                    books: bookArray
                }));
            });
        });


    });
