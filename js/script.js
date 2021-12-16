// $(document).ready(function () {

// const { HostNotReachableError } = require("sequelize/types");

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

window.onscroll = function () {
  fixedHeader();
};

const header = document.querySelector(".fixed-header");

function fixedHeader() {
  var top = window.scrollY;
  if (top >= 75) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
}
