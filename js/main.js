$(document).ready(function () {
  $("#toggle").click(function () {
    $(this).toggleClass("open");
    $("#overlay").toggleClass("open");
    $("#header-fix").toggleClass("open");
  });
  $("#overlay li a").on("click", function () {
    $("#overlay").toggleClass("open");
    // $('#header-fix').toggleClass('open');
  });

  $(".owl-works").owlCarousel({
    loop: true,
    center: true,
    margin: 30,
    nav: false,
    dots: false,
    // autoWidth:true,
    // autoplay: true,
    // autoplayTimeout: 3000,
    // autoplaySpeed: 1500,
    responsive: {
      0: {
        items: 1,
      },
      500: {
        items: 2,
      },
      768: {
        items: 3,
      },
      1000: {
        items: 3.97,
      },
    },
  });

  $(".owl-banner").owlCarousel({
    loop: true,
    center: true,
    margin: 400,
    nav: false,
    dots: false,
    // autoWidth:true,
    // autoplay: true,
    // autoplayTimeout: 3000,
    // autoplaySpeed: 1500,
    items: 1,
  });

  $(window).on("load scroll", function () {
    //現時点のスクロールの高さ取得
    const scrollPosition = $(window).scrollTop();
    if (scrollPosition > 109) {
      $("#header").css({
        background: "var(--c-gray-2)",
      });
    } else {
      $("#header").css({ background: "unset" });
    }

    //ウィンドウの高さ取得
    const windowHeight = $(window).height();

    $(".animation_box").each(function () {
      //要素の位置（高さ）を取得
      const elemPosition = $(this).offset().top;
      //スクロールの高さが要素の位置を超えたら以下のスタイルを適用
      if (elemPosition < scrollPosition + windowHeight) {
        $(this).css({
          opacity: 1,
          transform: "translateX(0)",
        });
      }
    });
  });
});
