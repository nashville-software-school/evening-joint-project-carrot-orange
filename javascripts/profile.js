define(["jquery"], function($) {
    var firebaseRef = new Firebase("https://petdatingsite.firebaseio.com/");
    $("#submitButton").click(function(e){

         e.preventDefault();

         var petForm =  {
            "name": $("#name").val(),
            "age" : $("#age").val(),
            "location" : $("#location").val(),
            "breed" : $("#breed").val(),
            "species" : $("#species").val(),
            "profilePic": $("#profilePic").val(),
            "ownerName" : $("#ownerName").val(),
            "orientation" : $("#orientation").val(),
            "gender" : $("#gender").val()
        };

         var form = firebaseRef.push();
         form.set(petForm, function(error, data) {
            console.log(error);
            console.log(data);
         });
         // console.log(form);

    });
});