// --------------------------------------
// Mobile HCI 2023 Coursework HUD Scripts
// --------------------------------------

$(document).ready(function() {
    showHud1();
});

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
    if (percentage <= 100) {
        // Calculate width to set progress bar
        let width_to_fill = (percentage / 100) * 6;
        let width_attribute = "width: " + width_to_fill + "; height: 0.4";
        document.querySelector("#progress-bar").setAttribute("geometry", width_attribute);
        // Calculate X position offset
        let translate_x = -( 3 - (width_to_fill / 2) );
        let position_attribute = translate_x + " 0 0.01"
        document.querySelector("#progress-bar").setAttribute("position", position_attribute);
        // Set progress bar text
        if (percentage >= 25) {
            document.querySelector("#pace-line-label").setAttribute("value", "");
            document.querySelector("#milestone-1").setAttribute("src", "#complete");
            document.querySelector("#progress-bar-text").setAttribute("value", "First milestone reached! Keep going!");
        }
        if (percentage >= 50) {
            document.querySelector("#milestone-2").setAttribute("src", "#complete");
            document.querySelector("#progress-bar-text").setAttribute("value", "Second milestone reached! You got this!");
        }
        if (percentage >= 75) {
            document.querySelector("#milestone-3").setAttribute("src", "#complete");
            document.querySelector("#progress-bar-text").setAttribute("value", "Third milestone reached! Nearly there!");
        }
    }
    else {
        // Set progress bar to finished text, remove pace line
        document.querySelector("#milestone-4").setAttribute("src", "#complete");
        document.querySelector("#progress-bar-text").setAttribute("value", "Ride Finished! Press BACK to show stats.");
        document.querySelector("#pace-line").setAttribute("visible", false);
    }
}

let bpm = 115;
let travelled_distance = 0;
let kcal = 0;
let ride_duration_in_seconds = 0;
let pace_in_seconds = pace * 60;
let minutes_elapsed = 0;
let seconds_elapsed = 0;
let ride_duration = "0:00";
let velocity = 0;
let gradient = 0;

// Simulate HUD values
function varyValues() {
    // Vary speed
    setInterval(function(){
        velocity = generateRandom(20, 30);
        document.querySelector("#value_speed-km").setAttribute("value", velocity);
        document.querySelector("#value_speed-mi").setAttribute("value", Math.floor(velocity*0.621371));
    }, 2500);
    // Vary heartrate
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
    }, 770);
    // Increase distance
    setInterval(function(){
        travelled_distance += generateRandom(0, 2);
        document.querySelector("#value_distance-km").setAttribute("value", travelled_distance/10);
        document.querySelector("#value_distance-mi").setAttribute("value", Math.floor(travelled_distance*0.621371)/10);
        // Set progress bar
        distance_in_metres = travelled_distance * 100;
        setProgressBar(calculateRidePercentage(distance_in_metres, distance*1000));
    }, 7000)
    // Increment calorie counter
    setInterval(function(){
        kcal++;
        document.querySelector("#value_calories").setAttribute("value", kcal);
    }, 3000);
    // Track ride duration
    setInterval(function(){
        ride_duration_in_seconds++;
        minutes_elapsed = Math.floor(ride_duration_in_seconds / 60);
        seconds_elapsed = ride_duration_in_seconds - (minutes_elapsed*60);
        ride_duration = minutes_elapsed + ":" + seconds_elapsed.toString().padStart(2, "0");
        document.querySelector("#value_duration").setAttribute("value", ride_duration);
        // Set pace line
        let pace_positionx_translation = ((ride_duration_in_seconds / pace_in_seconds) * 6) - 3;
        let pace_position = pace_positionx_translation + " 0 0.1";
        console.log(pace_position);
        document.querySelector("#pace-line").setAttribute("position", pace_position);
    }, 1000);
    // Vary gradient
    setInterval(function(){
        plus_or_minus = generateRandom(0, 2);
        if (plus_or_minus == 0) {
            gradient += generateRandom(0, 2);
        } else {
            gradient -= generateRandom(0, 2);
        }
        if (gradient < -6) {
            gradient += 2;
        } else if (gradient > 6) {
            gradient -= 2;
        }
        document.querySelector("#value_gradient").setAttribute("value", gradient + "%");
    }, 1400);
}

// Send stats to stats page
function setRideStats() {
    $("#stats_distance").text(travelled_distance/10 + "km / " + Math.floor((travelled_distance)*0.621371)/10 + "mi");
    $("#stats_duration").text(ride_duration);
    $("#stats_calories").text(kcal + "kcal / " + Math.floor(kcal*4.184) + "kJ");
}

// Functions to switch between HUD elements
function showHud1() {
    for (let i=0; i<document.querySelectorAll(".hud1").length; i++) {
        document.querySelectorAll(".hud1")[i].setAttribute("visible", true);
        document.querySelectorAll(".hud2")[i].setAttribute("visible", false);
    }
}
function showHud2() {
    for (let i=0; i<document.querySelectorAll(".hud1").length; i++) {
        document.querySelectorAll(".hud1")[i].setAttribute("visible", false);
        document.querySelectorAll(".hud2")[i].setAttribute("visible", true);
    }
}

// Keypress events (for simulating handlebar button presses)
$(document).keydown(function(e) {
    switch(e.which) {
        // Left
        case 37:
            showHud1();
            break;
        // Up
        case 38:
            break;
        // Right
        case 39:
            showHud2();
            break;
        // Down
        case 40:
            setRideStats();
            hideHUD(200);
            break;
    };
});