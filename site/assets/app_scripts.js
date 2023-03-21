// ----------------------------------------------
// Mobile HCI 2023 Coursework Application Scripts
// ----------------------------------------------

// Initial journey values
let distance = 5;
let milestones = 4;

$(document).ready(function() {

    // On "Start Journey" click
    $("#button_start").click(function() {
        $("#journey-planner").fadeOut(200);
        showHUD(200);
    })

    // Adjust planner fields
    $("#button_increase-distance").click(function() {
        if (distance < 100) {
            distance++;
            $("#distance").text(distance + "km");
        }
    })
    $("#button_decrease-distance").click(function() {
        if (distance > 1) {
            distance--;
            $("#distance").text(distance + "km");
        }
    })
    $("#button_increase-milestones").click(function() {
        if (milestones < 20) {
            milestones++;
            $("#milestones").text(milestones + " Milestones");
        }
    })
    $("#button_decrease-milestones").click(function() {
        if (milestones > 1) {
            milestones--;
            $("#milestones").text(milestones + " Milestones");
        }
    })


});

// Display HUD and start simulating values
function showHUD(delay) {
    $("#hud").fadeIn(delay);
    varyValues();
}
