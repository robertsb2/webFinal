// $(window).load(function() { //start after HTML, images have loaded
//     var InfiniteRotator =
//     {
//         init: function()
//         {
//             //initial fade-in time (in milliseconds)
//             var initialFadeIn = 1000;
//             //interval between items (in milliseconds)
//             var itemInterval = 5000;
//             //cross-fade time (in milliseconds)
//             var fadeTime = 2500;
//             //count number of items
//             var numberOfItems = $('.rotating-item').length;
//             //set current item
//             var currentItem = 0;
//             //show first item
//             $('.rotating-item').eq(currentItem).fadeIn(initialFadeIn);
//             //loop through the items
//             var infiniteLoop = setInterval(function(){
//                 $('.rotating-item').eq(currentItem).fadeOut(fadeTime);
//                 if(currentItem == numberOfItems -1){
//                     currentItem = 0;
//                 }else{
//                     currentItem++;
//                 }
//                 $('.rotating-item').eq(currentItem).fadeIn(fadeTime);
//             }, itemInterval);
//         }
//     };
//     InfiniteRotator.init();
// });


var slideIndex = 0;
carousel();

function carousel(){
    var slideshowImages = document.getElementsByClassName("rotating-item");
    for (var i = 0; i < slideshowImages.length; i++) {
            slideshowImages[i].style.display = "none"; 
    }

    if (slideIndex = slideshowImages.length) {
        slideIndex = 0
    } 
    slideIndex++;
    
    slideshowImages[slideIndex-1].style.display = "block"; 
    setTimeout(carousel, 2000); // Change image every 2 seconds
}