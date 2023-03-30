# Mobile HCI 2023 Coursework (Group 22)

## Overview
This is a prototype for a mixed-reality application which uses AR to display a Heads-Up Display (HUD) for cyclists during their rides.

The application is web-based and is built on the A-Frame framework, with a live site available on [Glitch](https://odd-chip-prose.glitch.me).

## Features
- A journey planning interface that lets the user enter how far they want to cycle and how many milestones they want along the route.
- A HUD that includes various user statistics and a route progress bar.
- Milestone markers that represent the progress along the ride.
- A journey completion interface that generates a report on all the info kept track of over the course of the ride.

## Installation
To run the site locally:
- Clone the repository
- Navigate to the `site` directory of the repository
- Setup a local HTTP server to serve files from the directory
  - If Python is installed, a simple HTTP server can be setup with `python -m http.server`
- Open a browser to the server (e.g. `localhost:8000`)

To change the simulation speed:
- Open the `hud_scripts.js` file which can be found in `site/assets/`
- Change the `SIMULATION_SPEED_MULTIPLIER` constant on line 10
  - Default value is 1, larger numbers increase the time multiplier, making the simulation run faster and vice versa
  - (For example, 2 = 2x speed, 0.5 = 0.5x speed)

## Key Binds
When in the AR view, use the arrow keys:
- `UP` to start metrics tracking and recording
- `LEFT` to view the first HUD metrics
- `RIGHT` to view the second set of HUD metrics
- `DOWN` to end the ride and bring up the complete screen

## Limitations & Bugs
- The video background often will not load in time, leading to a black background when the `Start Journey` button is pressed
  - To fix this, press `DOWN` to being up the complete screen, then press `Begin another Journey`. Wait a few seconds, then press `Start Journey`
  - The background video should work from then onwards
- Changing the `Number of Milestones` does not alter the number of milestones in the AR view
  - Due to implementation complexities the milestones are hard-coded at 4
- Sometimes pressing the `Start Journey` button too quickly after the page loads results in visual bugs
  - To mitigate this, wait a few seconds after the page loads before pressing the `Start Journey` button
  
 ## Contributions
 This project was developed by:
 - Daniel Szittya (2575425s@student.gla.ac.uk)
 - Lucy Stumpf (2574266s@student.gla.ac.uk)
 - Nash Waugh (2517003w@student.gla.ac.uk)
 - Timothy Wang (2556936w@student.gla.ac.uk)

 
 Assets:
 - The background video is by Virtual Running Videos on [YouTube](https://www.youtube.com/watch?v=aYDnqzU_lb8).
 - All other assets were created by Timothy Wang
