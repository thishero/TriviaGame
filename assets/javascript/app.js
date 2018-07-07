
    // Global Variables
    var timer = 30;
    var interval = 1;
    var x;
    var trueCount = 0;
    var falseCount = 0;

    $('.showHide').hide();
    $('#hider').hide();

    // This is the start timer
    function startTimer() {
        x = setInterval(function() {
            // start a timer and display it on the page
            timer = timer - interval;
            $('#timer').text(timer);
            // once the function reaches 0, a game over message is displayed and the game if finished;
            if (timer <= 0) {
                // once the timer === 0, stop running the setInterval function
                clearInterval(x);
                $('#spanCorrect').text(trueCount);
                $('#spanIncorrect').text(falseCount);
                $('#hider').show();
                $('.showHide').hide();
                if (trueCount >=5) {
                    alert("You know your Javascript!")
                } else if (trueCount <= 4) {
                    alert("You need to work on your Javascript!")
                };
            }
        }, 1000);
    }

    // ==========================================

    // if the startTimer function has been activated, allow the true / false buttons to then be selected;

    $('#starter').on('click', function() {
        $('.showHide').show();
        startTimer();
    })

    // ==========================================

    $('#1true').on('click', function() {
        trueCount++;
    });

    $('#2false').on('click', function() {
        falseCount++;
    });

    $('#3false').on('click', function() {
        falseCount++;
    });

    $('#4true').on('click', function() {
        trueCount++;
    });

    $('#5false').on('click', function() {
        falseCount++;
    });

    $('#6true').on('click', function() {
        trueCount++;
    });

    $('#7false').on('click', function() {
        falseCount++;
    });

    $('#8true').on('click', function() {
        trueCount++;
    });

    // Key:
    // 1: true
    // 2: false
    // 3: false
    // 4: true
    // 5: false
    // 6: true
    // 7: false
    // 8: true

    // =========================================





    // function timerFunction() {
    //     if (timer <= 0) {
    //     $('.correctResults').text(trueCount);
    //     $('.incorrectResults').text(falseCount);
    //     $('.correctResults').show();
    //     $('.incorrectResults').show();
    //     }
    // };

    // timerFunction();

    // if TrueCount is >= 5, return message "You are well on your way to digital greatness, young padowan. Good job!"
    // else return message ("Digital greatness remains elusive for you, young padowan")