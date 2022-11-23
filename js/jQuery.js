$(document).ready(function () {
  console.log("start");

  $(".scroll").on("click", function (e) {
    let alamat = $(this).attr("href");
    let addressTo = $(alamat);
    $("html,body").animate({scrollTop: addressTo.});
  });
});
