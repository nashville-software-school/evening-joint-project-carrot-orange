define(["jquery"], function($) {
    var registerRef = new Firebase("https://petdatingsite.firebaseio.com/");

    $('#registerButton').click(function(e) {
        e.preventDefault();
        var form = {
            firstName: $('#firstName').val(),
            lastName: $('#lastName').val(),
            email: $('#email').val(),
            password: $('#password').val()
        }

        registerRef.createUser(form, function(error, userData){
            if (error) {
                console.log(error);
            }
            console.log(userData);
        });
    });

});
