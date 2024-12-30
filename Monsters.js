const goblin = { name: "Goblin", health: 50, attack: 10 };
const dragon = { name: "Dragon", health: 100, attack: 20 };
const monsters = [goblin, dragon];
const player = { health: 50, attack: 15 };

function getRandomMonster() {
    const monster = monsters[Math.floor(Math.random() * monsters.length)];
    console.log(`A wild ${monster.name} appears!`);
    return { ...monster }; // Create a new instance to avoid mutation
}

function fight(monster) {
    let playerHealth = player.health;
    let monsterHealth = monster.health;

    while (playerHealth > 0 && monsterHealth > 0) {
        console.log(`Your health: ${playerHealth}`);
        console.log(`${monster.name}'s health: ${monsterHealth}`);

        // Player attacks
        monsterHealth -= player.attack;
        console.log(`You attack the ${monster.name} and deal ${player.attack} damage.`);

        if (monsterHealth <= 0) {
            console.log(`You defeated the ${monster.name}!`);
            return "win";
        }

        // Monster attacks
        playerHealth -= monster.attack;
        console.log(`${monster.name} attacks you and deals ${monster.attack} damage.`);

        if (playerHealth <= 0) {
            console.log(`You were defeated by the ${monster.name}.`);
            return "lose";
        }
    }
}

function playGame() {
    const readline = require("readline");
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    let score = 0;

    function playRound() {
        const monster = getRandomMonster();
        const result = fight(monster);

        if (result === "win") {
            score++;
            console.log(`Your score: ${score}`);
        } else {
            console.log("Game Over.");
            score = 0; // Reset score on game over
        }

        rl.question("Do you want to play again? (yes/no): ", (answer) => {
            if (answer.toLowerCase() === "yes") {
                playRound();
            } else if (answer.toLowerCase() === "no") {
                console.log("Thanks for playing!");
                rl.close();
            } else {
                console.log("Please answer with 'yes' or 'no'.");
                playRound(); // Restart the question
            }
        });
    }

    playRound(); // Start the first round
}

playGame(); // Start the game
