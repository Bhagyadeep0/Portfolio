class Player {
  constructor(game) {
    this.game = game;
    this.width = 100; //player width
    this.height = 100; // player height
    this.x = this.game.width * 0.5 - this.width * 0.5;
    this.y = this.game.height - this.height;
    this.speed = 5; // player movement speed
  }
  draw(context) {
    context.fillStyle = "#1b9d";
    context.fillRect(this.x, this.y, this.width, this.height);
  }
  update() {
    // -------------------------------horizontal movements------------------------//

    this.game.keys.indexOf("ArrowLeft") > -1
      ? (this.x -= this.speed)
      : this.game.keys.indexOf("ArrowRight") > -1
      ? (this.x += this.speed)
      : "";

    // ---------------horizontal boundaries------------------------------
    this.x < -this.width * 0.5
      ? (this.x = -this.width * 0.5)
      : this.x > this.game.width - this.width
      ? (this.x = this.game.width - this.width)
      : "";
    // -------------------------------vertical movements------------------------//

    this.game.keys.indexOf("ArrowUp") > -1
      ? (this.y -= this.speed)
      : this.game.keys.indexOf("ArrowDown") > -1
      ? (this.y += this.speed)
      : "";

    // ---------------vertical boundaries------------------------------
    this.y < -this.width * 0.5
      ? (this.y = -this.width * 0.5)
      : this.y > this.game.height - this.height
      ? (this.y = this.game.height - this.height)
      : "";
  }

  shoot() {
    const projectile = this.game.getProjectiles();
    projectile ? projectile.start(this.x + this.width * 0.5, this.y) : "";
  }
}
// ---------------------------------laser object--------------------------------
class Projectile {
  constructor() {
    this.width = 10;
    this.height = 30;
    this.speed = 20;
    this.x = 0;
    this.y = 0;
    this.free = true;
  }

  // laser drawn
  draw(context) {
    if (!this.free) {
      context.fillRect(this.x, this.y, this.width, this.height);
    }
  }
  // laser movement
  update() {
    !this.free ? (this.y -= this.speed) : "";
    this.y < this.height ? this.reset() : "";
  }
  // new laser draw false
  start(x, y) {
    this.x = x - this.width * 0.5;
    this.y = y;
    this.free = false;
  }

  //new laser draw true
  reset() {
    this.free = true;
  }
}

// ---------------------------------enemy object--------------------------------
class Enemy {}

// ---------------------------------main object--------------------------------
class Game {
  constructor(canvas) {
    this.canvas = canvas;
    this.width = this.canvas.width; //game width
    this.height = this.canvas.height; //game height
    this.keys = []; // game keys container
    this.player = new Player(this); // passing main game object to the player class

    this.projectilePool = []; // projectile container || pool
    this.numberOfProjectile = 10;
    this.createProjectiles();
    console.log(this.projectilePool);
    //-------------------------------player controls------------------------------//
    //add movement
    window.addEventListener("keydown", (e) => {
      // add key to keys if not present
      this.keys.indexOf(e.key) === -1 ? this.keys.push(e.key) : "";
      e.key === "0" ? this.player.shoot() : "";
    });
    //remove movement
    window.addEventListener("keyup", (e) => {
      // remove key from keys if present
      this.keys.indexOf(e.key) > -1 ? this.keys.splice(e.key) : "";
    });
  }
  // -----render elements-----
  render(context) {
    this.player.draw(context); // draw player
    this.player.update(); // move player

    // projectile render
    this.projectilePool.forEach((projectile) => {
      projectile.update();
      projectile.draw(context);
    });
  }

  // create projectiles object pool
  createProjectiles() {
    // -----------------------projectile drawn---------------------//
    for (let i = 0; i < this.numberOfProjectile; i++) {
      this.projectilePool.push(new Projectile());
    }
  }
  // get projectiles object pool
  getProjectiles() {
    // -----------------------projectile drawn---------------------//
    for (let i = 0; i < this.numberOfProjectile; i++) {
      if (this.projectilePool[i].free) return this.projectilePool[i];
    }
  }
}

window.addEventListener("load", () => {
  const canvas = document.getElementById("canvas");
  const context = canvas.getContext("2d");
  canvas.width = window.innerWidth; //main canvas width
  canvas.height = window.innerHeight; // main canvas height

  const game = new Game(canvas);

  //animate loop
  function animate() {
    context.clearRect(0, 0, canvas.width, canvas.height); // one rect per frame
    game.render(context);
    window.requestAnimationFrame(animate); //main window object
  }
  animate();
});
