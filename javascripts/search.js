define(["jquery"], function($) {
    var loginRef = new Firebase("https://petdatingsite.firebaseio.com/");
    var userAuth = loginRef.getAuth();
    $(document).on('click', '.like', function(e) {
        var petUserId = this.id;
        var updateURL = new Firebase("https://petdatingsite.firebaseio.com/profiles/" + petUserId + '/likes');
        updateURL.push({userId: userAuth.uid});
    });
});
