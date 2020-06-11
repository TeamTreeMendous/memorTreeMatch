$(() => {
    // * * * * WHEN FIRST BUTTON IS CLICKED IT GOES TO THE GAME PAGE
    $('.start').click(function () {
        $('html,body').animate({
            scrollTop: $(".game").offset().top
        },
            'slow');
    });

    // * * * * WHEN INFO BUTTON IS CLICKED IT GOES TO THE TREE INFO PAGE
    $('.info').click(function () {
        $('html,body').animate({
            scrollTop: $(".treeFormation").offset().top
        },
            'slow');
    });

    AOS.init();
}); // * * * * END OF DOCUMENT READY
