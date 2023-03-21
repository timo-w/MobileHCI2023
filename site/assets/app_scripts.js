// ----------------------------------------------
// Mobile HCI 2023 Coursework Application Scripts
// ----------------------------------------------

$(document).ready(function() {

    // Initial journey values
    let distance = 5;
    let milestones = 4;

    // On "Start Journey" click
    $("#button_start").click(function() {
        $("#journey-planner").fadeOut(200);
        showHUD(200);
    })

    $("#button_increase-distance").click(function() {
        distance++;
        $("#distance").text(distance + "km");
    })
    $("#button_decrease-distance").click(function() {
        distance--;
        $("#distance").text(distance + "km");
    })
    $("#button_increase-milestones").click(function() {
        milestones++;
        $("#milestones").text(milestones + " Milestones");
    })
    $("#button_decrease-milestones").click(function() {
        milestones--;
        $("#milestones").text(milestones + " Milestones");
    })

});


// Display HUD and start simulating values
function showHUD(delay) {
    $("#hud").fadeIn(delay);
    varyValues();
}