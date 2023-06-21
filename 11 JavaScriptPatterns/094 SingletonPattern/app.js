const Singleton = (function() {
    let instace;

    function createInstance() {
        const object = new Object({ name: 'Brad' });
        return object;
    }

    return {
        getInstance: function() {
            if (!instace) {
                instace = createInstance();
            }
            return instace;
        }
    }
})();

const instanceA = Singleton.getInstance();
const instanceB = Singleton.getInstance();

console.log(instanceA === instanceB);

console.log(instanceA);