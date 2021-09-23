class Character {
    constructor(name, health) {
        this.name = name;
        this.health = 100;
    }
}

class Hero extends Character {
    constructor() {
    }
}

class Healer extends Hero {
    constructor({ name, health, attacks } = {}) {
        this.name = "Healer";
        this.health = 750;
        this.attacks = [{ kick: 100 }, { punch: 75 }, { Tackle: 20 }, { Bite: 10 }, { SplashPotion: 65 }]  //eventually add magic method like increase health or other
    }
}

class Juggernaut extends Hero {
    constructor({ name, health, attacks } = {}) {
        this.name = "Juggernaut";
        this.health = 1000;
        this.attacks = [{ kick: 100 }, { punch: 75 }, { Tackle: 20 }, { Bite: 10 }, { SplashPotion: 65 }]
    }
}

class /*Attack/Offense*/ extends Hero {
    constructor({ name, health, attacks } = {}) {
        this.health = 1000;
        this.attacks = [{ kick: 100 }, { punch: 75 }, { Tackle: 20 }, { Bite: 10 }, { SplashPotion: 65 }]
    }
}

class /*Attack/Offense*/ extends Hero {
    constructor({ name, health, attacks } = {}) {
        this.health = 1000;
        this.attacks = [{ kick: 100 }, { punch: 75 }, { Tackle: 20 }, { Bite: 10 }, { SplashPotion: 65 }]
    }
}

class /*Sheild/Defenseive*/ extends Hero {
    constructor({ name, health, attacks } = {}) {
        this.health = 1000;
        this.attacks = [{ kick: 100 }, { punch: 75 }, { Tackle: 20 }, { Bite: 10 }, { SplashPotion: 65 }]
    }
}

class Enemy extends Character {
    constructor({ name } = {}) {
        this.name = name;
        super(health);
        this.attacks = [{ kick: 100 }, { punch: 75 }, { Tackle: 20 }, { Bite: 10 }, { SplashPotion: 65 }]
    }
    }


class Team {
    constructor() {
        this.heros = [];
        this.enemies = [];
    }
}

class Game {
    constructor() {

    }

    getCharcter() {
        const player1 = new Healer();
        const player2 = new Enemy();

    }
    //method getCharacter() -> this.player1 = new Hero(); this.player2 = new Enemy();
}










