define(["jquery"], function($) {
    var loginRef = new Firebase("https://petdatingsite.firebaseio.com/");

    $("#loginPage").click(function(e) {
        e.preventDefault();
        var loginForm = {
            email: $("#email").val(),
            password: $("#password").val()
        };

        loginRef.authWithPassword(loginForm, function(error, authData) {
            if (error) {
            } else {
                window.location = "/profile.html"
            }
        });
    });
});
