// Enemies our player must avoid
// var Enemy = function() {
//     // Variables applied to each of our instances go here,
//     // we've provided one for you to get started

//     // The image/sprite for our enemies, this uses
//     // a helper we've provided to easily load images
//     this.sprite = 'images/enemy-bug.png';
// };

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
// Enemy.prototype.update = function(dt) {
//     // You should multiply any movement by the dt parameter
//     // which will ensure the game runs at the same speed for
//     // all computers.
// };

// Draw the enemy on the screen, required method for game
// Enemy.prototype.render = function() {
//     ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
// };

class Enemy{

    constructor(x, y, speed){
        this.sprite = 'images/enemy-bug.png'
        this.x = x
        this.y = y
        this.speed = speed
    }

    update(dt){
        // You should multiply any movement by the dt parameter
        // which will ensure the game runs at the same speed for
        // all computers.
        
        this.x += (dt * this.speed)

        if(this.x >= 400){
            this.x = 0
        }

    }

    render(){
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
}

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

class Player{

    constructor(x, y){
        this.sprite = 'images/char-boy.png'
        this.x = x
        this.y = y
    }

    update(){
        // You should multiply any movement by the dt parameter
        // which will ensure the game runs at the same speed for
        // all computers.
        
        
        allEnemies.forEach(el => { //to check with all the enemies
            let intX = Math.round( el.x ) //first we have to convert it to int so we can compare with the player's location
            if(this.x == intX && this.y == el.y){ //Handling Collision with the enemy
                this.x = 200
                this.y = 400
                console.log('collision');
                
            }

        })
    }

    render(){
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }

    handleInput(keyCode){
        
        if(keyCode == 'up' && this.y > 0){
            this.y = this.y - 100
        }
        if(keyCode == 'down' && this.y < 400){
            this.y = this.y + 100
        }
        if(keyCode == 'right' && this.x < 400){
            this.x = this.x + 100
        }
        if(keyCode == 'left' && this.x > 0){
            this.x = this.x - 100
        }


        if(this.y == 0){//Winning Condition
            this.x = 200
            this.y = 400
            console.log('you win!!!');
        }
        
        
    }
}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
const player = new Player(200,400)
const enemy = new Enemy(0,100,100)
const enemy1 = new Enemy(0,200,50)

var allEnemies = []
var allPlayers = []
allEnemies.push(enemy)
allEnemies.push(enemy1)



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
