var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];

var userClickedPattern = [];
var n = true;
var level = 0;
$(document).keypress(function () {
    if (n) {
        $("#level-title").text("Level " + level);
        nextSequence();
        n = false;
    }
});


$(".btn").click(function () {
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    console.log(userClickedPattern);
    play_sound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length - 1);
});

function nextSequence() {
    level++;
    userClickedPattern = [];
    $("#level-title").text("Level " + level);
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    var len = (gamePattern.length) - 1;
    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    play_sound(randomChosenColour);
    console.log(gamePattern);
}

function play_sound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

function checkAnswer(currentLevel) {

    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {

        console.log("success");

        //4. If the user got the most recent answer right in step 3, then check that they have finished their sequence with another if statement.
        if (userClickedPattern.length === gamePattern.length) {

            //5. Call nextSequence() after a 1000 millisecond delay.
            setTimeout(function () {
                nextSequence();
            }, 1000);

        }

    } else {

        console.log("wrong");
        var audio = new Audio("sounds/wrong.mp3");
        audio.play();
        $("body").addClass("game-over");
        setTimeout(function () {
            $("body").removeClass("game-over");
        }, 200);
        $("h1").html("Game over press any key to continue");
        startover();
    }

}

function animatePress(currentColor) {

    $("#" + currentColor).addClass("pressed");
    setTimeout(function () {
        $("#" + currentColor).removeClass("pressed");
    }, 100);
}


function startover() {
    level = 0;
    gamePattern = [];
    n = true;
}
/*var game_colors = ["red", "blue", "green", "yellow"];
var game_sequence = [];
var game_pressed = [];

var red = new Audio("sounds/red.mp3");
var blue = new Audio("sounds/blue.mp3");
var green = new Audio("sounds/green.mp3");
var yellow = new Audio("sounds/yellow.mp3");
$("#red").click(function () {
    red.play();
    $("#red").fadeOut(100).fadeIn(100);
});
$("#blue").click(function () {
    blue.play();
    $("#blue").fadeOut(100).fadeIn(100);
});
$("#green").click(function () {
    green.play();
    $("#green").fadeOut(100).fadeIn(100);
});
$("#yellow").click(function () {
    yellow.play();
    $("#yellow").fadeOut(100).fadeIn(100);
});
var n = true;
$(".btn").click(function () {


    var userChosenColour = $(this).attr("id");


    game_pressed.push(userChosenColour);

    //console.log(userClickedPattern);

});
var n = true;
startgame();


function startgame() {
    if (n) {
        $(document).keypress(function () {
            n = false;
            nextSequence();

        });
    } else {
        return;
    }
    getcolorani(game_sequence);

}


function nextSequence() {

    var count = 1;
    $("#level-title").html("Level " + count);
    var rand = Math.floor(Math.random() * 4);
    game_sequence.push(game_colors[rand]);
    var leng = game_sequence.length - 1;
    $("#" + game_sequence[leng]).fadeOut(100).fadeIn(100);
    var flag = playgame(game_sequence, game_pressed);
    console.log(game_sequence);
}
//}




function getcolorani(game_sequence) {
    var len = (game_sequence.length) - 1;
    $("#" + game_sequence[len]).fadeOut(100).fadeIn(100);
    console.log(len);
    console.log(game_sequence[len]);
}



function playgame(game_seq, game_press) {
    var leng = game_seq.length - 1;
    for (var i = 0; i <= leng; i++) {
        if (game_seq[i] == game_press[i]) {
            var flag = 1;
        } else {
            var flag = 0;
            return flag;
        }
    }
    console.log(game_press);
    return flag;
}*/