function openDialog(pageUrl, title, callback) {
    var options = {
        url: pageUrl,
        title: title,
        allowMaximize: false,
        showClose: true,
        width: 500,
        height: 500,
        dialogReturnValueCallback: callback,
    };
    SP.SOD.execute('sp.ui.dialog.js', 'SP.UI.ModalDialog.showModalDialog', options);
}

function helpDeskCallback(result) {
    if (result == SP.UI.DialogResult.OK) {
        alert("Su solicitud fue enviada. Se le mandara un correo de confirmaci\u00F3n");
    }
}

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