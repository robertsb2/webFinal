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
                $(this).height("20px");
                $(this).width("100px");
                $(this).css({
                    "font-size": "1em",
                });
                large = false;
                console.log("test");
            }else{
                $(this).height("40px");
                $(this).width("200px");
                $(this).css({
                    "font-size": "2em",
                });
                large = true;
                console.log("test");
        }
    });
});