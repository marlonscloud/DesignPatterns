// Define the base Game class
class Game {
    constructor() {
        console.clear();
    }
  
    initialize() {
      // Implemented by subclasses
    }
  }
  
  // Define the GameFactory class
  class GameFactory {
    createGame(type) {
      if (type === '1') {
        return new BlocksGame();
      } else if (type === '2') {
        return new PlatformGame();
      }
      else if (type === '4') {
        return new rpgGame();
      }
      return null; // Invalid game type
    }
  }
  