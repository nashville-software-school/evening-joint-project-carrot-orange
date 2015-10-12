define(function(require) {
  var _ = require("lodash");

  return {
    load: function(fn) {

       $.ajax("https://petdatingsite.firebaseio.com/profiles.json").done(function(profiles) {
       	console.log(profiles);
       	console.log(fn);
         fn(profiles);

       });

     }
   };
});