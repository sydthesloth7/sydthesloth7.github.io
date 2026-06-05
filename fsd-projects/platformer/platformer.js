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
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     toggleGrid();
    // TODO 2 - Create Platforms
    createPlatform(100, 700, 50, 30, "red");
    createPlatform(200, 600, 50, 30, "orange");
    createPlatform(300, 500, 50, 30, "yellow");
    createPlatform(400, 400, 50, 30, "green");
    createPlatform(500, 300, 50, 30, "blue");
    createPlatform(600, 200, 400, 30, "purple");



    // TODO 3 - Create Collectables
    createCollectable("database", 800, 150, 0.5, 0.7);
     createCollectable("diamond", 900, 150, 0.5, 0.7);
      createCollectable("max", 850, 150, 0.5, 0.7);

    
    // TODO 4 - Create Cannons
    createCannon("top", 200, 700);
  createCannon("right", 300, 1200);
  createCannon("bottom", 800, 2);

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
