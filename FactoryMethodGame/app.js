// Create a new instance of the GameFactory
const factory = new GameFactory();

// Function to start the game
function startGame() {
  const gameType = prompt('Enter game type (1 for Blocks or 2 for Platformer or 4 for an RPG game):');
  const game = factory.createGame(gameType);
  if (game === null) {
    alert('Invalid game type!');
    return;
  }

  game.initialize();
}