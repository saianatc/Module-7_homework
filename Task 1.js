const scietist = {
    name: "Sheldon Cooper",
    age: 39,
    field: physics
};
function getObj (scientist) {
    for (let key in scientist) {
        if (scientist.hasOwnProperty(key))
            console.log (key+ ": " + scientist[key])
    }
};
getObj(scietist)
