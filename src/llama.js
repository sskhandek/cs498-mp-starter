class Llama {
    constructor(name) {
        this.name = name;
    }

    speak() {
        return `I am the one true web llama, ${this.name}`;
    }
}

module.exports = Llama;
