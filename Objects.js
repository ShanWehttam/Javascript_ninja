
let famo = {dad: "Matthew", mum: "Michelle", daughter: "Eva", son: "Robin"}
  //Transforming the values into uppercase, and return as an object
    Object.fromEntries(Object.entries(famo).map( ([key, val]) => [key, val.toUpperCase()]))
let siblings = {siblings: ["brad","holly","James"]}
  //Merging a cloned siblings object into a cloned famo Object to create 1 object 
    newObj = {...famo, ...siblings}
  //Making a change to one of the properties, ensuring the original object hasn't mutated
    newObj.dad = "matt"
  //Deep cloning the array inside the siblings object
    newSiblings = {...siblings, siblings: [...siblings['siblings']]}
  //Adding a new property to an object
    famo['brother'] = "brad"
  //Deleteing a property from an object
    delete famo['brother']
  //Checking if a property is present in an object
    if ('dad' in famo) { "do something if property key exists" }
    if (famo.dad) { "do something if property key exists" }
    if (famo['dad']) { "do something if property key exists" }
  //Writing a function that accepts an object as an argument, deconstructs it and has a default argument
    function acceptobject({me, you="you"}){ return you }
    acceptobject({})
  //Iterating over an object
    for (key in famo){ famo[key] }





