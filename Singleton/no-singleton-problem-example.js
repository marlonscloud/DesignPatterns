
class SuperBoss {
    constructor(name){
        this.name = name;
        console.log('New boss created with the name ' + name);
    }
}

function createSuperBoss() {
    const name = prompt('What should the boss name be?');
    window.superBoss = new SuperBoss(name);
}