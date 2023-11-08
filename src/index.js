const messages = [
    "Code is like art: there is always something new to learn.",
    "Programming is a way to create and transform the world.",
    "Programmers are the creators of the future.",
    "Programming is a passionate and challenging career.",
    "It doesn't matter if your code is perfect, as long as it works.",
    "Programmers are intelligent and creative people.",
    "Programming is a way to solve problems and make the world a better place.",
    "Don't be afraid to make mistakes: they are part of learning.",
    "Keep learning and growing as a programmer.",
    "Programming is a world of endless possibilities.",
    "Don't give up if it's hard to learn to program.",
    "Look for inspiration in other programmers.",
    "Programming is a rewarding career that will allow you to achieve your goals.",
    "If you have a passion for technology, programming is the right path for you.",
    "The world needs more programmers.",
    "Be the change you want to see in the world: become a programmer."
];

const funnyCommit = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(`\x1b[34m${message}\x1b[89m`);
}

module.exports = {
    funnyCommit
};