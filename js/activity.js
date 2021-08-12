
$(document).ready(function(){
    $("#tbody").bind("click",function(e){
        $(e.target).closest(".tdbox").toggleClass("tdclick");
    });

    $("td").click(function(){
        var content = $(this).text();
        var cliffName = $(".thead").eq($(this).index()).text();

        if (content !="Not Avaiable"){
            $(this).toggleClass("tdhighlight");

            if ($(this).hasClass("tdhighlight")){
                $('#displaySelected').css("visibility","visible");
                $('#displaySelected').css("margin-top","2em");
                $('#result').append("<p>" + content + " at " + cliffName +"</p>");
            } else {
                $('#result p:contains('+content+')').remove();

                if ($('#result').has('p').length == false){
                    $('#displaySelected').css("visibility","hidden");
                    $('#displaySelected').css("margin-top",'0')
                }
            }
        }
    });
});