
function createSingleton() {
    const name = prompt('What should the boss name be?');
    window.superBoss = Singleton.createSuperBoss(name);
}

const Singleton = (function () {
    //In language with access modifiers, such as C# - you can declare a constructor as private, since JavaScript doesn't offer
    //this option, we will use a variable to track whether the object has been created or not yet
    let instance;
    debugger;
    class SingletonClass {
      constructor(name) {
        this.name = name;
        console.log('New boss created with the name ' + name);
      }
    }
  
    return {
        createSuperBoss(name) {
            debugger;
        if (!instance) {
          instance = new SingletonClass(name);
        }
        else{
          console.log('Only one Super Boss can exist! Their name is ' + instance.name);
        }
        return instance;
      }
    };
  })();