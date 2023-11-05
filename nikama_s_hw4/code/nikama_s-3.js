class Warrior {
    constructor(level, rank, experience, achievements) {
        this.Level = 1;
        this.Rank = "Pushover";
        this.Experience = 100;
        this.Achievements = [];
        this.availRank = ["Pushover", "Novice", "Fighter", "Warrior", "Veteran", "Sage", "Elite", "Conqueror", "Champion", "Master", "Greatest"];
    }
    level() {
        console.log(this.Level);
    }
    rank() {
        console.log(this.Rank);
    }
    experience() {
        console.log(this.Experience);
    }
    achievements() {
        console.log(this.Achievements);
    }
    update() {
        if (this.Experience >= 10000) {
            this.Experience = 10000;
        }
        this.Level = Math.floor(this.Experience / 100);
        if (this.Level >= 100) {
            this.Level = 100;
        }
        this.Rank = this.availRank[Math.floor(this.Level / 10)];
    }
    training(event) {
        if (this.Level >= event[2]) {
            this.Achievements.push(event[0]);
            this.Experience += event[1];
            this.update();
            console.log(event[0]);
        } else console.log("Not strong enough");
    }
    battle(enemy_level) {
        if (enemy_level >= 1 && enemy_level <= 100) {
            if (enemy_level === this.Level) {
                this.Experience += 10;
                this.update();
                console.log("A good fight");
            } else if (enemy_level === this.Level - 1) {
                this.Experience += 5;
                this.update();
                console.log("A good fight");
            } else if (enemy_level <= this.Level - 2) console.log("Easy fight");
            else if (enemy_level >= this.Level + 5 && Math.floor(this.Level / 10) <= Math.floor(enemy_level / 10) - 1) console.log("You've been defeated");
            else {
                let diff = enemy_level - this.Level;
                this.Experience += 20 * diff * diff;
                this.update();
                console.log("An intense fight");
            }
        }
        else console.log("Invalid level");
    }
}