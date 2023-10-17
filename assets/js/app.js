$(function () {
    //Toggle Search Modal
    $("#search_btn").on("click", function () {
        $("#search_modal").addClass("show");
    });
    $("#search_close_btn").on("click", function () {
        $("#search_modal").removeClass("show");
    });

    //New Product Slider
    $(".new_product_slider").slick({
        slidesToShow: 4,
        prevArrow:
            '<i class="fa-solid fa-chevron-left new_product_slider_arrow"></i>',
        nextArrow:
            '<i class="fa-solid fa-chevron-right new_product_slider_arrow"></i>',
        swipe: false,
        autoplay: true,
    });

    //Countdown Activation
    $("#deals_countdown").countdown("2023/12/10", function (event) {
        var $this = $(this).html(
            event.strftime(
                "" +
                    "<div><h4>%D</h4><p>Days</p></div> " +
                    "<span>:</span>"+
                    "<div><h4>%H</h4><p>Hour</p></div> " +
                    "<span>:</span>"+
                    "<div><h4>%M</h4><p>Minute</p></div> " +
                    "<span>:</span>"+
                    "<div><h4>%S</h4><p>Sec</p></div>"
            )
        );
    });
});

//Activate Tooltip
const tooltipTriggerList = document.querySelectorAll(
    '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
    (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);
