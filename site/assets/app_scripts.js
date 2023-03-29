// ----------------------------------------------
// Mobile HCI 2023 Coursework Application Scripts
// ----------------------------------------------

// Initial journey values
let distance = 5;
let milestones = 4;
let pace = 10;

$(document).ready(function() {

    // On "Start Journey" click
    $("#button_start").click(function() {
        $("#journey-planner").fadeOut(200);
        showHUD(200);
    });

    // Adjust planner fields
    $("#button_increase-distance").click(function() {
        if (distance < 100) {
            distance++;
            $("#distance").text(distance + "km");
        }
    });
    $("#button_decrease-distance").click(function() {
        if (distance > 1) {
            distance--;
            $("#distance").text(distance + "km");
        }
    });
    $("#button_increase-milestones").click(function() {
        if (milestones < 20) {
            milestones++;
            $("#milestones").text(milestones + " Milestones");
        }
    });
    $("#button_decrease-milestones").click(function() {
        if (milestones > 1) {
            milestones--;
            $("#milestones").text(milestones + " Milestones");
        }
    });
    $("#button_increase-pace").click(function() {
        if (pace < 120) {
            pace += 5;
            $("#pace").text(pace + " Minutes");
        }
    });
    $("#button_decrease-pace").click(function() {
        if (pace > 5) {
            pace -= 5;
            $("#pace").text(pace + " Minutes");
        }
    });

    // On "Begin another Journey" click
    $("#button_restart").click(function() {
        location.reload();
    });

    // Stats page navigation
    let current_stats_page = 1;
    $("#button_next-stats").click(function() {
        switch(current_stats_page) {
            case 1:
                current_stats_page = 2;
                showStats2();
                break;
            case 2:
                current_stats_page = 3;
                showStats3();
                break;
            case 3:
                current_stats_page = 1;
                showStats1();
                break;
        }
    });
    $("#button_previous-stats").click(function() {
        switch(current_stats_page) {
            case 1:
                current_stats_page = 3;
                showStats3();
                break;
            case 2:
                current_stats_page = 1;
                showStats1();
                break;
            case 3:
                current_stats_page = 2;
                showStats2();
                break;
        }
    });

});

// Display HUD and start simulating values
function showHUD(delay) {
    $("#hud").fadeIn(delay);
}
function hideHUD(delay) {
    $("#hud").fadeOut(delay);
    $("#journey-stats").fadeIn(delay);
}

// Stats navigation functions
function resetStatsPage() {
    $("#stats_page-1").hide();
    $("#stats_page-2").hide();
    $("#stats_page-3").hide();
    $("#stats_page-1_circle").removeClass("current-stats");
    $("#stats_page-2_circle").removeClass("current-stats");
    $("#stats_page-3_circle").removeClass("current-stats");
}
function showStats1() {
    resetStatsPage();
    $("#stats_page-1").show();
    $("#stats_page-1_circle").addClass("current-stats");
}
function showStats2() {
    resetStatsPage();
    $("#stats_page-2").show();
    $("#stats_page-2_circle").addClass("current-stats");
}
function showStats3() {
    resetStatsPage();
    $("#stats_page-3").show();
    $("#stats_page-3_circle").addClass("current-stats");
}
