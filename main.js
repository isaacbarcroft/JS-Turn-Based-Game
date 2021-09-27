class Character {
    constructor(name, health) {
        this.name = name;
        this.health = 1000;
    }
}

class Hero extends Character {
    constructor({ heatlh } = {}) {
        super();
        this.health = 1000;
        this.attacks = [{ Kick: 100 }, { Punch: 75 }, { Tackle: 20 }, { Bite: 10 }, { SplashPotion: 65 }];
    }
}

class Enemy extends Character {
    constructor({ heatlh } = {}) {
        super();
        this.attacks = [{ Kick: 100 }, { Punch: 75 }, { Tackle: 20 }, { Bite: 10 }, { SplashPotion: 65 }];
    }
}

class Healer extends Hero {
    constructor({} = {}) {
        super();
        this.name = "Healer";
        this.specialAttacks = [{ CometPunch: 250}, { Curse: 150}];  
    }
}

class Juggernaut extends Hero {
    constructor({ name, health, attacks } = {}) {
        super();
        this.name = "Juggernaut";

    }
}

class Warlock extends Hero {
    constructor({ name, health, attacks } = {}) {
        super();
        this.name = 'Warlock';

    }
}

class Sorcerer extends Hero {
    constructor({ name, health, attacks } = {}) {
        super();
        this.name = "Sorcerer";
        this.specialAttacks = [{ PoinsonJab: 300, count: 5},{ Boomburst: 200}];
    }
}

class Rogue extends Hero {
    constructor({ name, health, attacks } = {}) {
        super();
        this.name = "Rogue";

    }
}

class Monster extends Enemy {
    constructor({ name } = {}) {
        super();
        this.name = "Monster";
        this.attacks = [{ Kick: 75 }, { Punch: 60 }, { Tackle: 20 }, { Bite: 10 }, { SplashPotion: 45 }];
    } 
}

class Deathspawn extends Enemy {
    constructor({ name } = {}) {
        super();
        this.name = "Death Spawn"; 
        this.name = 750
        this.attacks = [{ Kick: 90}, { Punch: 75 }, { Tackle: 25 }, { Bite: 15 }, { SplashPotion: 65 }];
    } 
}

class Warlord extends Enemy {
    constructor({ name } = {}) {
        super();
        this.name = "Warlord";
        this.attacks = [{ Kick: 125}, { Punch: 100 }, { Tackle: 30 }, { Bite: 25 }, { SplashPotion: 75 }];
    } 
}

class Game {
    constructor() {
        this.hero = [];
        this.enemy = [];
    }

    getCharacter() {
        startGameMessage.textContent = "Enter Your Name & Choose a Character:";

        let heroSelection;
        let attackSelectionValue;
        let name;

        gameStartBtn.addEventListener('click', () => {
            heroSelection = selectElemHero.options[selectElemHero.selectedIndex].value;
            name = playerNameInputBox.value;
            player1Display.textContent = `${name}: ${heroSelection}`;

            switch (heroSelection) {
                case 'Healer':
                    this.hero = new Healer;
                    break;
                case 'Juggernaut':
                    this.hero = new Juggernaut;
                    break;
                case 'Warlock':
                    this.hero = new Warlock;
                    break;
                case 'Sorcerer':
                    this.hero = new Sorcerer;
                    break;
                case 'Rogue':
                    this.hero = new Rogue;
                    break;
                default:
                    this.hero = "ERROR";
            } 

            charSelectContainer.style.display = "none";
            nameSelectContainer.style.display = "none";
            attackSelectContainer.style.display = "block";
            player1Health.textContent = `${this.hero.health}`;
            this.selectAttackOptions(this.hero.attacks);
            
            attackBtnNodeList.forEach((element)=> {
                element.addEventListener('click', () => {
                    console.log("event listener fired")
                    attackSelectionValue = element.value;
                    let damageInflicted = this.randomizeAttackPower(element.value);
                    player1Message.textContent = `Player 1 used ${element.textContent}!!! Minus ${damageInflicted} from the enemy's health!`
                    this.enemy[0].health -= damageInflicted;
                    player2Health.textContent = `${this.enemy[0].health/10 + "%"}`;

                    setTimeout(() => {
                        this.enemyAttack();
                        this.healthChange();
                        setTimeout(() => {
                            player1Message.textContent = ``;
                            player2Message.textContent = ``;
                        }, 2500)
                    }, 1000);
        
                    this.healthChange(); 
                    this.isGameOver();
                });
            });

        });
    }

    selectAttackOptions(arr) {
        let str = "";
        
        for (let i = 0; i < arr.length; i++) {
            for (let property in arr[i]) {
                str += `<button id="${i}" value="${arr[i][property]}">${property}</button>`
            }
        }
        attackBtnContainer.innerHTML = str;
        attackBtnNodeList = attackBtnContainer.childNodes;
    }

    isGameOver() {
        if (this.hero.health <= 0) {
            console.log("GAME OVER YOU LOST");
            attackSelectBtn.disabled = true;
        } else if (this.enemy[0].health <= 0 && this.enemy.length >= 2) {
            this.enemy.shift();
            console.log("An enemy has died!")
        } else if (this.enemy[0].health >= 0) {
            return;
        } else {
            attackSelectBtn.disabled = true;
            console.log('YOU WON!!')
        }
    }
    
    randomizeEnemy() {
        this.enemy = [new Enemy(), new Enemy(), new Enemy()];
        player2Health.textContent = `${this.enemy[0].health}`;
    }
    
    healthChange() {
        player1Health.style.width = this.hero.health/10 + "%";
	    player2Health.style.width =  this.enemy[0].health/10 + "%";
    }   

    randomizeAttackPower(value) {
        return Math.floor(Math.random() * parseInt(value));
    }
   
    enemyAttack() {
        let enemyAttackList = this.enemy[0].attacks;
        let randomIndex = Math.floor(Math.random() * enemyAttackList.length);

        let enemyAttack = Object.keys(enemyAttackList[randomIndex])[0];
        let damageInflicted = this.randomizeAttackPower(Object.values(enemyAttackList[randomIndex])[0]);

        player2Message.textContent = `The computer used ${enemyAttack}!!! Minus ${damageInflicted} from the enemy's health!`

        this.hero.health -= damageInflicted; 
        player1Health.textContent = `${this.hero.health/10 + "%"}`;
    }


    play() {
        attackSelectContainer.style.display = "none";
        this.getCharacter();
        this.randomizeEnemy();
    }
    
}

window.addEventListener('load', (event) => {
    outerContainer.style.display = 'none';
    gameStartBtn.addEventListener('click', () => {
        outerContainer.style.display = 'block';
        splashPage.style.display = 'none';
    })
  });



const splashPage = document.querySelector('.splash-page');
const outerContainer = document.querySelector('.outer-container');
const nameSelectContainer = document.querySelector('.name-input-container');
const charSelectContainer = document.querySelector('.choose-char-container');
const attackSelectContainer = document.querySelector('.choose-attack-container');
const startGameMessage = document.querySelector('.start-game-message');
const selectElemHero = document.querySelector('#hero-select');
const attackBtnContainer = document.querySelector('#attack-select');
let attackBtnNodeList;
const playerNameInputBox = document.querySelector('#player-name');
const player1Display = document.querySelector('.player1-name');
const player1Health = document.querySelector('#player1-health-bar');
const player2Health = document.querySelector('#player2-health-bar');
const player1Message = document.querySelector('.player1-attack-message');
const player2Message = document.querySelector('.player2-attack-message');
const gameStartBtn = document.querySelector('.submit-game-start');
const reset = document.querySelector('.reset');





const game = new Game();
game.play();











