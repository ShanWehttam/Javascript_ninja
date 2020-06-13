
let famo = {dad: "Matthew", mum: "Michelle", daughter: "Eva", son: "Robin"}
  //Transforming the values into uppercase, and return as an object
    Object.fromEntries(Object.entries(famo).map( ([key, val]) => [key, val.toUpperCase()]))
  //Transform the keys of an object into uppercase, and return the object - 1 way

