$(document).ready(function(){
    $(".box").on('mouseover',function(){
        $(this).css({
            "background-color": "#F8DE7E",
        });
    });

    $('.box').on('mouseleave', function(){
        $(this).css({
            "background-color": "#ffc",
        });
    });


    var large = false;
        $(".contact").on("click",function(){
            if(large){
                $(this).height("50px");
                $(this).width("100px");
                $(this).css({
                    "font-size": "1em",
                });
                large = false;
            }else{
                $(this).height("100px");
                $(this).width("200px");
                $(this).css({
                    "font-size": "2em",
                });
                large = true;
        }
    });
});