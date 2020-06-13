
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



