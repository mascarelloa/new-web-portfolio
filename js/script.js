// $(document).ready(function () {

//     $(".menu-btn a").click(function () {
//         $(".overlay").fadeToggle(200);
//         $(this).toggleClass('btn-open').toggleClass('btn-close');
//     });

//     $('.overlay').on('click', function () {
//         $(".overlay").fadeToggle(200);
//         $(".menu-btn a").toggleClass('btn-open').toggleClass('btn-close');
//     });

//     $('.menu a').on('click', function () {
//         $(".overlay").fadeToggle(200);
//         $(".menu-btn a").toggleClass('btn-open').toggleClass('btn-close');
//     });

// });


window.onscroll = function() {
    fixedHeader();
}

var header = document.getElementById("fixed-header");
var logo = document.getElementById("logo")
var sticky = header.offsetTop;


function fixedHeader(){
    logo.style.color = "white";

   if (window.pageYOffset > sticky) {
  header.classList.add("sticky");
  
  
} else {
    header.classList.remove("sticky");
   
}


}