$(function() {
    $('#slider').nivoSlider({
        directionNav: false,
        effect:"sliceDownRight"
    });

    $("#helpdesk__send").on("click", function(e) {
        e.preventDefault();
        $("#helpdeskmodal").modal("hide");
        $("#helpdesk__success").addClass("show");
        setTimeout(function(){
            $("#helpdesk__success").removeClass("show");
        }, 5000);
    });

    $("#helpdesk__success").on("click", ".close", function(e) {
        $("#helpdesk__success").removeClass("show");
    });
});