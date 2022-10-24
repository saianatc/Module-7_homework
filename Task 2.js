const scietist = {
    name: "Sheldon Cooper",
    age: 39,
    field: physics,
};
const position = 'researcher';
function searchPropertiesInObj (scientist, position) {
    let answer;
    for (let key in scientist) {
        if (scientist.hasOwnProperty ('position'))
            answer = true
            else answer = false;
    }
    return console.log (answer);
};
searchPropertiesInObj(scientist, position);

