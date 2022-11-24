$(document).ready(function () {
  console.log("start");

  $(".scroll").on("click", function (e) {
    let alamat = $(this).attr("href");
    let addressTo = $(alamat);
    console.log(addressTo.offset().top);
    //   $("html,body").animate({scrollTop: addressTo.});
  });
});

// buat efect untuk pricing atau paralax
$(window).scroll(function () {
  let wScroll = $(this).scrollTop();

  if (wScroll > $("#pricing").offset().top - 200) {
    // ambil semua element
    $("#pricing .fade-in").each(function (i) {
      setTimeout(function () {
        $("#pricing .fade-in").eq(i).addClass("munculKiri");
      }, 400 * (i + 1));
      return 0;
    });
  }
});
