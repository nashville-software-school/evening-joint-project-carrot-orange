define(["jquery"], function($) {
var ProfileRef = new Firebase("https://petdatingsite.firebaseio.com/");
   
  	 
  	 
  	 ProfileRef.on("value", function(snapshot) {
 console.log("snapshot", snapshot.val());



}, function (errorObject) {
 console.log("The read failed: " + errorObject.code);
});
  });
    	
