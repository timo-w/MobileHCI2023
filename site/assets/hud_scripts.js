// --------------------------------------
// Mobile HCI 2023 Coursework HUD Scripts
// --------------------------------------


// Generate a random integer between a specified range
function generateRandom(min, max) {
    let difference = max - min;
    let rand = Math.random();
    rand = Math.floor( rand * difference);
    rand = rand + min;
    return rand;
}

// Calculate distance covered as a percentage
function calculateRidePercentage(distance_travelled, total_distance) {
    return Math.floor( (distance_travelled / total_distance) * 100 );
}

// Fill progress bar to specified percentage
function setProgressBar(percentage) {
    if (percentage < 100) {
        // Calculate width to set progress bar
        let width_to_fill = (percentage / 100) * 6;
        let width_attribute = "width: " + width_to_fill + "; height: 0.4";
        document.querySelector("#progress-bar").setAttribute("geometry", width_attribute);
        // Calculate X position offset
        let translate_x = -( 3 - (width_to_fill / 2) );
        let position_attribute = translate_x + " 0 0.01"
        document.querySelector("#progress-bar").setAttribute("position", position_attribute);
        // Set progress bar text
        document.querySelector("#progress-bar-text").setAttribute("value", percentage + "%");
    }
    else {
        // Set progress bar to finished text
        document.querySelector("#progress-bar-text").setAttribute("value", "Ride Finished! Press BACK to show stats.");
    }
}

// Simulate HUD values
function varyValues() {
    // Vary speed
    setInterval(function(){
        document.querySelector("#value_speed").setAttribute("value", generateRandom(12, 18));
    }, 2000);
    // Vary heartrate
    let bpm = 115;
    setInterval(function(){
        plus_or_minus = generateRandom(0, 2);
        if (plus_or_minus == 0) {
            bpm += generateRandom(0, 3);
        } else {
            bpm -= generateRandom(0, 3);
        }
        if (bpm < 90) {
            bpm += 4;
        } else if (bpm > 150) {
            bpm -= 4;
        }
        document.querySelector("#value_heartrate").setAttribute("value", bpm);
    }, 270);
    // Increase distance
    let travelled_distance = 0;
    setInterval(function(){
        travelled_distance += generateRandom(0, 2);
        document.querySelector("#value_distance").setAttribute("value", travelled_distance/10);
        // Set progress bar
        distance_in_metres = travelled_distance * 100;
        setProgressBar(calculateRidePercentage(distance_in_metres, distance*1000));
    }, 700 /*7000*/)
    // Increment calorie counter
    let kcal = 0;
    setInterval(function(){
        kcal++;
        document.querySelector("#value_calories").setAttribute("value", kcal);
    }, 3000); 
}


$(document).keydown(function(e) {
    switch(e.which) {
        // Left
        case 37:
            break;
        // Up
        case 38:
            break;
        case 39:
        // Right
            break;
        // Down
        case 40:
            break;
    };
});