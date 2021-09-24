class Character {
    constructor(name, health) {
        this.name = name;
        this.health = 100;
    }
}

class Hero extends Character {
    constructor({ heatlh } = {}) {
        super();
        this.health = 500;
        this.attacks = [{ Kick: 100 }, { Punch: 75 }, { Tackle: 20 }, { Bite: 10 }, { SplashPotion: 65 }];
    }
}


class Healer extends Hero {
    constructor({} = {}) {
        super();
        this.name = "Healer";
        this.health = 750;
        this.specialAttacks = [{ Roundhouse: 250}, { NinjiChop: 150}];  //eventually add magic method like increase health or other
    }
}

class Juggernaut extends Hero {
    constructor({ name, health, attacks } = {}) {
        super();
        this.name = "Juggernaut";
        this.health = 1000;
        this.specialAttacks = [ { ChokeSlam: 300} , { CurbStomp: 250 }];
    }
}

class Warlock extends Hero {
    constructor({ name, health, attacks } = {}) {
        super();
        this.name = 'Warlock';
        this.health = 1000;
        this.specialAttacks = [{Stunner: 300}, {PeoplesElbow: 250}];
    }
}

class Sorcerer extends Hero {
    constructor({ name, health, attacks } = {}) {
        super();
        this.name = "Sorcerer";
        this.health = 1000;
        this.specialAttacks = [{ MillDollarDream: 300},{ Dementor: 200}];
    }
}

class Rogue extends Hero {
    constructor({ name, health, attacks } = {}) {
        super();
        this.name = "Rogue";
        this.health = 1000;
        this.specialAttacks = [{DDT: 200},{Piledriver: 300}];
    }
}

class Monster extends Character {
    constructor({ name } = {}) {
        super();
        this.name = "Monster";
        this.health = 500;
        this.attacks = [{ Kick: 75 }, { Punch: 60 }, { Tackle: 20 }, { Bite: 10 }, { SplashPotion: 45 }];
    } //changed out values of health and values for attacks
}

class Enemy2 extends Character {
    constructor({ name } = {}) {
        super();
        this.name = "Mid-Level Bad Guy"; //needs better name 
        this.name = 750
        this.attacks = [{ Kick: 90}, { Punch: 75 }, { Tackle: 25 }, { Bite: 15 }, { SplashPotion: 65 }];
    } //changed out values of health and values for attacks
}

class Warlord extends Character {
    constructor({ name } = {}) {
        super();
        this.name = "Warlord";
        this.attacks = [{ Kick: 125}, { Punch: 100 }, { Tackle: 30 }, { Bite: 25 }, { SplashPotion: 75 }];
    } //changed out values for attacks
}

``


// class Team {
//     constructor() {
//         this.heros = [{...new Hero1}, {...new Hero2},{...new Hero3},{...new Hero4},{...new Hero5}];
//         this.enemies = [{...new Enemy}, {...new Enemy}, {...new Enemy}, {...new Enemy}, {...new Enemy}];
//     }
// }

class Game {
    constructor() {
        //this.heros = [{...new Hero1}, {...new Hero2},{...new Hero3},{...new Hero4},{...new Hero5}];
        // this.enemies = [{...new Enemy}, {...new Enemy}, {...new Enemy}, {...new Enemy}, {...new Enemy}];
        this.hero = [];
        this.enemy = [];
    }

    getCharacter() {

        chooseCharMessage.textContent = "Please Choose a Character";

        let heroSelection;
        heroSelectBtn.addEventListener('click', () => {
            heroSelection = selectElemHero.options[selectElemHero.selectedIndex].value;
            player1Display.textContent = `Player 1: ${heroSelection}`;

            switch (heroSelection) {
                case 'Hero1':
                    this.hero = new Hero1;
                    break;
                case 'Hero2':
                    this.hero = new Hero2;
                    break;
                case 'Hero3':
                    this.hero = new Hero3;
                    break;
                case 'Hero4':
                    this.hero = new Hero4;
                    break;
                case 'Hero5':
                    this.hero = new Hero5;
                    break;
                default:
                    this.hero = "ERROR";
            }
            console.log("Hero: ", this.hero);
            charSelectContainer.style.display = "none";
            attackSelectContainer.style.display = "block";
            player1Health.textContent = `Health: ${this.hero.health}`;
            this.selectAttackOptions(this.hero.attacks);

        });
    }
    selectAttackOptions(arr) {
        let str;
        for (let i = 0; i < arr.length; i++) {
            for (let property in arr[i]) {
                str += `<option value="${arr[i][property]}">${property}</option>`
            }
        }
        selectElemAttack.innerHTML = str;
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
        //let attackList = [{"Body Slam": 200}, {"Rage": 350}, {"Ice Hammer": 125}, {"Fire Punch": 425}, {"Burn": 175}, {"Explosion": 475}, {"Blast Beam": 230}, {"Sky Attack": 80}];
        this.enemy = [new Enemy(), new Enemy(), new Enemy()]; //this will change to Stephanie's extended enemy classes
        console.log(this.enemy);
        player2Health.textContent = `Health: ${this.enemy[0].health}`;
        console.log("Enemy: ", this.enemy);
    }

    randomizeAttackPower(value) {
        return Math.floor(Math.random() * parseInt(value));
    }

    enemyAttack() {
        console.log(this.enemy);
        let enemyAttackList = this.enemy[0].attacks;
        let randomIndex = Math.floor(Math.random() * enemyAttackList.length);
        console.log(randomIndex);
        console.log(enemyAttackList[randomIndex])
        console.log(Object.keys(enemyAttackList[randomIndex]))
        let enemyAttack = Object.keys(enemyAttackList[randomIndex])[0];
        let damageInflicted = this.randomizeAttackPower(Object.values(enemyAttackList[randomIndex])[0]);

        player2Message.textContent = `The computer used ${enemyAttack}!!! Minus ${damageInflicted} from the enemy's health!`
        console.log(this.hero.health)
        this.hero.health -= damageInflicted;
        player1Health.textContent = `Health: ${this.hero.health}`;
    }



    play() {

        attackSelectContainer.style.display = "none";
        let player1 = this.getCharacter();
        let player2 = this.randomizeEnemy();

        let attackSelectionValue;
        attackSelectBtn.addEventListener('click', () => {
            let selection = selectElemAttack.options[selectElemAttack.selectedIndex]
            attackSelectionValue = selection.value;
            let damageInflicted = this.randomizeAttackPower(selection.value);
            player1Message.textContent = `Player 1 used ${selection.innerHTML}!!! Minus ${damageInflicted} from the enemy's health!`
            this.enemy[0].health -= damageInflicted;
            player2Health.textContent = `Health: ${this.enemy[0].health}`;

            this.enemyAttack();

            this.isGameOver();
        });
    }
}


const charSelectContainer = document.querySelector('.choose-char-container');
const attackSelectContainer = document.querySelector('.choose-attack-container');
const chooseCharMessage = document.querySelector('.choose-char-message');
const selectElemHero = document.querySelector('#hero-select');
const selectElemAttack = document.querySelector('#attack-select');
const player1Display = document.querySelector('.player1-name');
//const player2Display = document.querySelector('.player2-name');
const player1Health = document.querySelector('.player1-health');
const player2Health = document.querySelector('.player2-health');
const player1Message = document.querySelector('.player1-attack-message');
const player2Message = document.querySelector('.player2-attack-message');
const heroSelectBtn = document.querySelector('.submit-hero-selection');
const attackSelectBtn = document.querySelector('.submit-attack-selection');

const game = new Game();
game.play();











