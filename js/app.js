$(document).ready(function() {

    $('.ryu').mouseenter(function() {
        $('.ryu-still').hide();
        $('.ryu-ready').show();
    })

    .mouseleave(function() {
        $('.ryu-ready').hide();
        $('.ryu-still').show();
    })

    .mousedown(function() {
            playHadouken();
            $('.ryu-still').hide();
            $('.ryu-ready').hide();
            $('.ryu-throwing').show();
            $('.hadouken').show().animate({
                    'left': '500px'
                },
                600,
                function() {
                    $(this).hide();
                    $(this).css('left', '-212px');
                }
            );
            $('.hadouken').finish().show().animate({
                    'left': '500px'
                },
                600,
                function() {
                    $(this).hide();
                    $(this).css('left', '-212px');
                }
            );
        })
        .mouseup(function() {
            $('.ryu-throwing').hide();
            $('.ryu-ready').show();
            //ready position

        })

    $(document).keydown(function(event) {
        if (event.which == 88) {
            $('.ryu-still').hide();
            $('.ryu-ready').hide();
            $('.ryu-cool').show()
        };
    });
    $(document).keyup(function(event) {
        if (event.which == 88) {
            $('.ryu-cool').hide();
            $('.ryu-ready').hide();
            $('.ryu-throwing').hide();
            $('.ryu-still').show()
        };
    });

});




function playHadouken() {
    $('#hadouken-sound')[0].volume = 0.3;
    $('#hadouken-sound')[0].load();
    $('#hadouken-sound')[0].play();
}