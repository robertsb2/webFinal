$(document).ready(function () {
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


    //Table stuff
    $('#set0').on('mouseover', function () {
        $('#item0').css({
            "background-color": "#F8DE7E"
        });
        $('#item1').css({
            "background-color": "#F8DE7E"
        });
    });
    $('#set0').on('mouseout', function () {
        $('#item0').css({
            "background-color": "#ffc"
        });
        $('#item1').css({
            "background-color": "#ffc"
        });
    });

    $('#set1').on('mouseover', function () {
        $('#item2').css({
            "background-color": "#F8DE7E"
        });
        $('#item3').css({
            "background-color": "#F8DE7E"
        });
    });
    $('#set1').on('mouseout', function () {
        $('#item2').css({
            "background-color": "#ffc"
        });
        $('#item3').css({
            "background-color": "#ffc"
        });
    });

    $('#set2').on('mouseover', function () {
        $('#item4').css({
            "background-color": "#F8DE7E"
        });
        $('#item5').css({
            "background-color": "#F8DE7E"
        });
    });
    $('#set2').on('mouseout', function () {
        $('#item4').css({
            "background-color": "#ffc"
        });
        $('#item5').css({
            "background-color": "#ffc"
        });
    });

    $('#set3').on('mouseover', function () {
        $('#item6').css({
            "background-color": "#F8DE7E"
        });
        $('#item7').css({
            "background-color": "#F8DE7E"
        });
    });
    $('#set3').on('mouseout', function () {
        $('#item6').css({
            "background-color": "#ffc"
        });
        $('#item7').css({
            "background-color": "#ffc"
        });
    });

    $('#set4').on('mouseover', function () {
        $('#item8').css({
            "background-color": "#F8DE7E"
        });
        $('#item9').css({
            "background-color": "#F8DE7E"
        });
    });
    $('#set4').on('mouseout', function () {
        $('#item8').css({
            "background-color": "#ffc"
        });
        $('#item9').css({
            "background-color": "#ffc"
        });
    });

    $('#set5').on('mouseover', function () {
        $('#item10').css({
            "background-color": "#F8DE7E"
        });
        $('#item11').css({
            "background-color": "#F8DE7E"
        });
    });
    $('#set5').on('mouseout', function () {
        $('#item10').css({
            "background-color": "#ffc"
        });
        $('#item11').css({
            "background-color": "#ffc"
        });
    });


    $('#set6').on('mouseover', function () {
        $('#item12').css({
            "background-color": "#F8DE7E"
        });
        $('#item13').css({
            "background-color": "#F8DE7E"
        });
    });
    $('#set6').on('mouseout', function () {
        $('#item12').css({
            "background-color": "#ffc"
        });
        $('#item13').css({
            "background-color": "#ffc"
        });
    });
});