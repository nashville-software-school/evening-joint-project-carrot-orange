define(["jquery"], function($) {
    var loginRef = new Firebase("https://petdatingsite.firebaseio.com/");
    var userAuth = loginRef.getAuth();
    if (!userAuth){
    	document.location = "/";
    }
    $(document).on('click', '.like', function(e) {
        var petUserId = this.id;
        var updateURL = new Firebase("https://petdatingsite.firebaseio.com/profile/" + petUserId);
    		console.log(updateURL.ref());
    });
});
