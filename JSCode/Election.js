
 const _ = require('lodash');
function winner(arr, n){
    const names = new Map();
    arr.map( name => {
        const value = names.get(name) || 0;
        names.set(name, value + 1);
    });

    const maxOccurence = Math.max(...names.values());
    const keys = [...names.keys()].sort();

    for(let i =0; i < keys.length ; i++){
        const occurence = names.get(keys[i]);
        if(occurence == maxOccurence){
            return [keys[i], maxOccurence];
        }
    }
}

const value = winner(["john","johnny","jackie","johnny","john" ,
    "jackie","jamie","jam","john","jam","jam",
    "jam","john"],13)
    console.log(value);

    