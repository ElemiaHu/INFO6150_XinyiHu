const canvas = document.querySelector("canvas");
const score = document.querySelector("#scores");
const context = canvas.getContext("2d");
canvas.width = 1024;
canvas.height = 576;

const platformLeft = document.querySelector("#platformLeft");
const platformMiddle = document.querySelector("#platformMiddle");
const platformRight = document.querySelector("#platformRight");
const goSign = document.querySelector("#goSign");
const marioMove = document.querySelector("#marioSprite");
const marioLeft = document.querySelector("#marioLeft");
const coin = document.querySelector("#coin");
const cloud1 = document.querySelector("#cloud1");
const cloud2 = document.querySelector("#cloud2");
const end = document.querySelector("#end");

const gravity = 0.5;

class Player {
    constructor() {
        this.position = {
            x: 100,
            y: 100
        }
        this.width = 50;
        this.height = 50;
        this.frames = 0;
        this.status = "stand";

        //the starting velocity of our player
        this.velocity = {
            x: 0,
            y: 0
        }
    }
    
    draw() {
        if (this.status === "stand"){
            context.drawImage(
                marioMove, 
                0, 
                0, 
                32, 32,
                this.position.x, this.position.y, this.width, this.height);
        } else if (this.status === "run") {
            context.drawImage(
                marioSprite, 
                32 * 2, 
                0, 
                32, 32,
                this.position.x, this.position.y, this.width, this.height);
        } else if (this.status === "standLeft") {
            context.drawImage(
                marioLeft, 
                32 * 14, 
                0, 
                32, 32,
                this.position.x, this.position.y, this.width, this.height);
        } else {
            context.drawImage(
                marioLeft, 
                32 * 12, 
                0, 
                32, 32,
                this.position.x, this.position.y, this.width, this.height);
        }
    }

    //change the player's position (with a basic gravity always pulling the player down)
    update() {
        this.draw();
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
        this.velocity.y += gravity;
    }
}

class Coin {
    constructor({x, y}) {
        this.position = {
            x,
            y
        }
        this.width = 30;
        this.height = 30;
    }
    
    draw() {
        context.drawImage(
            coin,
            0,
            0,
            16, 16,
            this.position.x, this.position.y, this.width, this.height);
    }
}

class Cloud {
    constructor({x, y}, ratio, flag) {
        this.position = {
            x,
            y
        }
        this.ratio = ratio * 0.5;
        this.flag = flag;
    }

    draw() {
        if (this.flag) 
            context.drawImage(cloud1, this.position.x, this.position.y, cloud1.width * this.ratio, cloud1.height * this.ratio);
        else
            context.drawImage(cloud2, this.position.x, this.position.y, cloud2.width * this.ratio, cloud2.height * this.ratio);
    }
}

class Go {
    constructor() {
        this.position = {
            x: 20,
            y: canvas.height - 95
        }
        this.width = 50;
        this.height = 50;
    }
    
    draw() {
        context.drawImage(goSign,this.position.x, this.position.y, this.width, this.height);
    }
}

class Platform {
    constructor({x, y}, n, hasCoins, numOfCoins) {
        this.position = {
            x,
            y
        }
        this.image = [platformLeft, platformMiddle, platformRight],
        this.n = n;
        if (n < 2) 
            this.width = this.image[0].width + this.image[2].width;
        else
            this.width = this.image[0].width + this.image[2].width + (n - 2) * this.image[1].width;
        this.height =  this.image[0].height

        this.hasCoins = hasCoins;
        this.numOfCoins = numOfCoins;
        this.coins = [];
        if (this.hasCoins) {
            let xPosition = this.width / this.numOfCoins / 2;
            for (let i = this.numOfCoins; i > 0; i--){
                let coin = new Coin({x: this.position.x + xPosition, y: this.position.y - 32})
                this.coins.push(coin);
                xPosition += this.width / this.numOfCoins;
            }
        }
    }

    draw() {
        let x = this.position.x;
        let i = this.n;
        if (i < 2) {
            context.drawImage(this.image[0], x, this.position.y);
            context.drawImage(this.image[2], x + this.image[0].width, this.position.y);
        } else {
            context.drawImage(this.image[0], x, this.position.y);
            x += this.image[0].width;
            i--;
            while (i > 0){
                context.drawImage(this.image[1], x, this.position.y);
                x += this.image[1].width;
                i--;
            }
            context.drawImage(this.image[2], x, this.position.y);
        }
        if (this.hasCoins) {
            this.coins.forEach((coin) => {
                coin.draw();
            })
        }
    }
}

let player = new Player();
const yPosition = canvas.height - platformLeft.height;
let platforms = [];
let go = new Go();
let clouds = [];
let keys = {
    right: {
        pressed: false
    },
    left: {
        pressed: false
    },
    jump: {
        pressed: false
    }
};

// document the distance Mario has moved forward.
let scrollOffSet = 0;

//set the scene
function init() {
    player = new Player();
    platforms = [new Platform({x: 0, y: yPosition}, 10, false, 0), new Platform({x: 500, y: yPosition}, 6, true, 5), 
        new Platform({x: 700, y: 400}, 10, false, 0), new Platform({x: 1200, y: 250}, 6, true, 4),
        new Platform({x: 1500, y: yPosition}, 16, false, 0), new Platform({x: 1700, y: 350}, 4, true, 3), 
        new Platform({x: 2200, y: yPosition}, 10, false, 0), new Platform({x: 2700, y: 350}, 2, false, 0),
        new Platform({x: 2950, y: yPosition}, 20, false, 0), new Platform({x: 3000, y: 350}, 2, false, 0),
        new Platform({x: 3200, y: 200}, 6, true, 6), new Platform({x: 3500, y: 320}, 10, false, 0),
        new Platform({x: 4000, y: 320}, 8, false, 0), new Platform({x: 4350, y: yPosition}, 40, false, 0)];
    go = new Go();
    clouds = [new Cloud({x: 80, y: 80}, 0.6, true), new Cloud({x: 450, y: 200}, 0.6, true), 
        new Cloud({x: 850 , y: 120}, 0.6, true), new Cloud({x: 1300 , y: 220}, 0.6, true),
        new Cloud({x: 1750 , y: 130}, 0.6, true), new Cloud({x: 2200 , y: 30}, 0.6, true),
        new Cloud({x: 2650 , y: 200}, 0.6, true), new Cloud({x: 3100 , y: 120}, 0.6, true)];
    scrollOffSet = 0; 
}

init();

function animate() {
    requestAnimationFrame(animate);
    context.clearRect(0, 0, canvas.width, canvas.height);
    platforms.forEach((platform) => {
        platform.draw();
    })
    go.draw();
    clouds.forEach((cloud) => {
        cloud.draw();
    });
    player.update();

    if (keys.left.pressed && player.position.x > 100)
        player.velocity.x = -5;
    else if (keys.right.pressed && player.position.x < 500)
        player.velocity.x = 5;
    else {
        player.velocity.x = 0;

        // When Mario moves left or right, the platform moves the other way
        // so that it appears that the background is moving.
        if (keys.left.pressed && scrollOffSet >= 0){
            scrollOffSet -= 5;
            go.position.x += 5;
            platforms.forEach((platform) => {
                platform.position.x += 5;
                if (platform.hasCoins) {
                    platform.coins.forEach((coin) => {
                        coin.position.x += 5;
                    })
                }
            })
            clouds.forEach((cloud) => {
                cloud.position.x += 3;
            })
        }
        else if (keys.right.pressed && scrollOffSet < 4600) {
            scrollOffSet += 5;
            go.position.x -= 5;
            platforms.forEach((platform) => {
                platform.position.x -= 5;
                if (platform.hasCoins) {
                    platform.coins.forEach((coin) => {
                        coin.position.x -= 5;
                    })
                }
            })
            clouds.forEach((cloud) => {
                cloud.position.x -= 3;
            })
        }

    }

    //platform collision detection
    //rules: 1. When Mario is above a platform, he lands on that platform.
    //       2. When Mario is under a platform and he jumps, he hits the bottom of that platform.
    //       3. When Mario fails to jump on any platform, he falls
    platforms.forEach((platform) => {
        if (player.position.x + player.width > platform.position.x 
            && player.position.x < platform.position.x + platform.width) {
            if (player.position.y > platform.position.y + platform.height) {
                if (player.position.y + player.velocity.y <= platform.position.y + platform.height) {
                    player.velocity.y = 0;
                }
            } else if (player.position.y + player.height <= platform.position.y) {
                if (player.position.y + player.height + player.velocity.y >= platform.position.y) {
                    player.velocity.y = 0;
                }
            }
        } else if (player.position.x + player.width === platform.position.x
            && player.position.y + player.height + player.velocity.y > platform.position.y
            && player.position.y + player.velocity.y < platform.position.y + platform.height){
                player.velocity.x = 0;
        }
    })

    context.font = "25px Comic Sans MS";
    context.fillText(scrollOffSet, 510, 40);

    //wining condition
    if (scrollOffSet >= 4600) {
        context.fillStyle = "rgba(0, 0, 0, 0.5)";
        context.fillRect(0, 0, canvas.width, canvas.height);
        context.drawImage(end, canvas.width / 2 - 100, canvas.height / 2 - 100, 200, 200);
        context.fillStyle = "white";
        context.fillText("You Win!!", canvas.width / 2 - 50, canvas.height / 2 + 150);
    }

    //lose condition
    if (player.position.y > canvas.height) {
        init();
    }
}

animate();

addEventListener("keydown", (event) => {
    switch (event.key) {
        case 'd':
        case 'D':
        case 'ArrowRight':
            keys.right.pressed = true;
            player.status = "run";
            break;
        case 'a':
        case 'A':
        case 'ArrowLeft':
            keys.left.pressed = true;
            player.status = "runLeft";
            break;
        case ' ':
            if (player.velocity.y === 0){
                player.velocity.y -= 15;
            }
            break;
    }
})

addEventListener("keyup", (event) => {
    switch (event.key) {
        case 'd':
        case 'D':
        case 'ArrowRight':
            keys.right.pressed = false;
            player.status = "stand";
            break;
        case 'a':
        case 'A':
        case 'ArrowLeft':
            keys.left.pressed = false;
            player.status = "standLeft";
            break;
    }
})