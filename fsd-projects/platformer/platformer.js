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
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     toggleGrid(1);


    // TODO 2 - Create Platforms
createPlatform(100,150, 250, 25);
createPlatform(400, 500, 600, 25);
createPlatform(1050,150, 250, 25);
createPlatform(100, 625, 250, 25);
createPlatform(400, 625, 800, 25);
createPlatform(100, 625, 25, 125);
createPlatform(400, 625, 25, 125);
createPlatform(250, 400, 25, 25);
createPlatform(400, 275, 25, 25);
createPlatform(600, 200, 300, 25);
    // TODO 3 - Create Collectables
createCollectable("database", 200, 700);
createCollectable("database", 600, 100);
createCollectable("database", 400, 300);
createCollectable("database", 800, 700);
createCollectable("database", 900, 100);
    
    // TODO 4 - Create Cannons
createCannon("top", 600, 600);
createCannon("right", 300, 800);
createCannon("left", 200, 650);



    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
