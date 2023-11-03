window.onload = () => {

    document.querySelector('#excuse').innerHTML = generateExcuse();

};

let generateExcuse = () => {
    let pronoun = ["A", "The"];
    let subjet = ["cat", "jocker", "Clown", "Guy"];
    let action = ["took", "broke", "break", "stole"];
    let where = ["at the beach", "in my house", "at the gym" ];
    let stuff = ["my tools", "my apple", "my keys"];

    let pronIdex = Math.floor(Math.random()*pronoun.length);
    let subjetIndex = Math.floor(Math.random()*subjet.length);
    let actionIndex = Math.floor(Math.random()*action.length);
    let whereIndex = Math.floor(Math.random()*where.length);
    let stuffIndex = Math.floor(Math.random()*stuff.length);


    return pronoun[pronIdex]+ ' '+subjet[subjetIndex]+' '+action[actionIndex]+ ' '+ stuff[stuffIndex] + ' '+ where[whereIndex];

};