
$(document).ready(function(){
    $("#tbody").bind("click",function(e){
        $(e.target).closest(".tdbox").toggleClass("tdclick");
        $('#myModal').modal('show');
    });

    $("td").click(function(){
        var content = $(this).text();
        var cliffName = $(".thead").eq($(this).index()).text();

        if (content !="Not Avaiable"){
            $(this).toggleClass("tdhighlight");

            if ($(this).hasClass("tdhighlight")){
                $('#myModal').css("visibility","visible");
                $('#myModal').css("margin-top","2em");
                $('.modal-body').append("<p>" + content + " at " + cliffName +"</p>");
            } else {
                $('.modal-body p:contains('+content+')').remove();

                if ($('.modal-body').has('p').length == false){
                    $('#myModal').css("visibility","hidden");
                    $('#myModal').css("margin-top",'0')
                }
            }
        }
    });
});
