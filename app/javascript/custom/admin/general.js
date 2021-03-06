// Enable reload with turbolinks
(function () {
  var scrollPosition;

  document.addEventListener(
    "turbolinks:load",
    function () {
      if (scrollPosition) {
        window.scrollTo.apply(window, scrollPosition);
        scrollPosition = null;
      }
    },
    false
  );

  Turbolinks.reload = function () {
    scrollPosition = [window.scrollX, window.scrollY];
    Turbolinks.visit(window.location, { action: "replace" });
  };
})();

$(document).on("ready turbolinks:load", function () {
  "use strict"; // Start of use strict

  // Toggle the side navigation
  $("#sidebarToggle, #sidebarToggleTop").on("click", function (e) {
    $("body").toggleClass("sidebar-toggled");
    $(".sidebar").toggleClass("toggled");
    if ($(".sidebar").hasClass("toggled")) {
      $(".sidebar .collapse").collapse("hide");
    }
  });

  // Oculta al cargar la página
  if ($(window).width() < 768) {
    if ($(".sidebar .collapse").length) {
      $(".sidebar").addClass("toggled");
      $(".sidebar .collapse").collapse("hide");
    }
  }

  // Close any open menu accordions when window is resized below 768px
  $(window).resize(function () {
    if ($(window).width() < 768) {
      if ($(".sidebar .collapse").length) {
        $(".sidebar").addClass("toggled");
        $(".sidebar .collapse").collapse("hide");
      }
    }
  });

  // Prevent the content wrapper from scrolling when the fixed side navigation hovered over
  $("body.fixed-nav .sidebar").on("mousewheel DOMMouseScroll wheel", function (
    e
  ) {
    if ($(window).width() > 768) {
      var e0 = e.originalEvent,
        delta = e0.wheelDelta || -e0.detail;
      this.scrollTop += (delta < 0 ? 1 : -1) * 30;
      e.preventDefault();
    }
  });

  // Scroll to top button appear
  $(document).on("scroll", function () {
    var scrollDistance = $(this).scrollTop();
    if (scrollDistance > 100) {
      $(".scroll-to-top").fadeIn();
    } else {
      $(".scroll-to-top").fadeOut();
    }
  });

  // Smooth scrolling using jQuery easing
  $(document).on("click", "a.scroll-to-top", function (e) {
    var $anchor = $(this);
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $($anchor.attr("href")).offset().top,
        },
        1000,
        "easeInOutExpo"
      );
    e.preventDefault();
  });

  if ($("#dataTable_filter").length < 1) {
    $("#dataTable").DataTable({
      paging: false,
      bLengthChange: false,
      bInfo: false,
      pageLength: 5,
      language: {
        lengthMenu: "Mostrar _MENU_ registros",
        sSearch: "Buscar:",
        zeroRecords: "No se encontraron resultados",
        info: "Página _PAGE_ de _PAGES_",
        infoEmpty: "No hay registros disponibles",
        infoFiltered: "(filtered from _MAX_ total records)",
        paginate: {
          previous: "<",
          next: ">",
        },
      },
    });
  }
}); // End of use strict
