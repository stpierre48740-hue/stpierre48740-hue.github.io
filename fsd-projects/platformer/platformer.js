$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(
      -50,
      canvas.height - 10,
      canvas.width + 100,
      200,
      "grey",
      null,
      null,
      1,
      null,
      null,
      1,
      false,
    ); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    //toggleGrid(0);

    // TODO 2 - Create Platforms
    createPlatform(0, 155, 1200, 20);
    createPlatform(300, 275, 1200, 20);
    createPlatform(
      300,
      275,
      -300,
      20,
      "#5a2e1b",
      null,
      null,
      1,
      null,
      null,
      1,
      false,
    );
    createFakePlatform(280, 275, 20, 225, "#3b1f14");
    createBadPlatform(0, 730, 1500, 20);
    createPlatform(0, 450, 300, 20);
    createPlatform(400, 450, 270, 20);
    createPlatform(800, 450, 250, 20);
    createPlatform(1200, 450, 250, 20, "grey", null, null, 0, 450, 650, 1);
    createBadPlatform(0, 475, 1100, 20);
    createPlatform(
      0,
      485,
      1100,
      20,
      "grey",
      null,
      null,
      1,
      null,
      null,
      1,
      false,
    );
    createPlatform(800, 700, 300, 20);
    createPlatform(400, 700, 250, 20);
    createPlatform(0, 700, 250, 20);
    // TODO 3 - Create Collectables
    collectableList.steve.image = "images/source-image-rotating.gif";
    createCollectable("steve", 300, 375);
    createCollectable("steve", 700, 375);
    createCollectable("steve", 300, 600);
    createCollectable("steve", 700, 600);
    // TODO 4 - Create Cannons
    createCannon("right", 475, 1500);
    createCannon("left", 600, 1500);
    createCannon("right", 200, 1500);
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
