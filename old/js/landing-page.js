var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};

$(function() {
    var param = getUrlParameter("signup");
    if (param === "bad") {
        $('#bad_email').removeClass("hidden");
        $('#sign_up_button').addClass("hidden");
        $('#sign_up_form').fadeIn();
    } else if (param === "thanks") {
        $('#sign_up_button').addClass("hidden");
        $('#say_thanks').removeClass("hidden");
    }
    $('#sign_up_btn').on('click', function() {
       $('#sign_up_form').fadeIn(); 
        return false;
    });
});