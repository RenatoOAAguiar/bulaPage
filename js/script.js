const URL = "http://localhost:4500/bula"

function find(question) {
    var data = {"question" : question};

    $.ajax({
        type: "GET",
        url: URL + "?question=" + question,
        //data: data,
        success: success,
        error: error,
        dataType: "json"
    });
}

$(document).ready(function() {
	$('#txtPergunta').focus();
});

$(document).keypress(function(e) {
    if(e.which == 13) {
        send();
    }
});

function error(jqXHR, exception){
    console.log("Status: " + jqXHR.status);
    console.log("Message: " + jqXHR.responseText);
    if(jqXHR.responseText != undefined){
        $("#txtResposta").text(jqXHR.responseText)
        $('#divResposta').removeClass("d-none");
    }
}

function success(data) {
    console.log(data);
    $("#txtResposta").text(data.response)
    $('#divResposta').removeClass("d-none");
}

$('#btnEnviar').on('click', function(){
    send();
});

function send(){
    var question = $('#txtPergunta').val();
    if(question != '' && question != undefined){
        find(question);
    }
}

$('#btnLimpar').on('click', function(){	
    $('#txtResposta' ).empty();
    $('#divResposta').addClass("d-none");
    $('#txtPergunta').val('');
});
