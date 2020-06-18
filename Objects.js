
let famo = {dad: "Matthew", mum: "Michelle", daughter: "Eva", son: "Robin"}
  //Transforming the values into uppercase, and return as an object
    Object.fromEntries(Object.entries(famo).map( ([key, val]) => [key, val.toUpperCase()]))
let siblings = {siblings: ["brad","holly","James"]}
  //Merging a cloned siblings object into a cloned famo Object to create 1 object 
    newObj = {...famo, ...siblings}
  //Making a change to one of the properties, ensuring the original object hasn't mutated
    newObj.dad = "matt"
  //Deep cloning the array inside the siblings object.  CLoning duplicates the pointer for a collections
    newSiblings = {...siblings, siblings: [...siblings['siblings']]}
    me = {matt: ["matthew", 35]}
    {matt: Array(2)}
    its = {...me, matt: [...me.matt]}
    {matt: Array(3), age: 35}
    let {matt, ...otherproperties } = me

  //If you have an array of hashes, you can clone them all using .map, which will create a new object
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
  //Checking two objects for equality
    JSON.stringify(famo) === JSON.stringify(famo)
  //Using computed values to change an array of arrays to an array of hashes
    [[1,2],[3,4]].map( ([key,val]) => ({[key]: val}) )
  //Destructuring properties from an array of hashes
    [{me: "matthew"}, {you: "michelle"}].map(({me,you}, ind) => me || you )
  //Pretify an object or the returning JSON
    JSON.stringify(famo, ['dad', 'mum'], "\t")
  //Place a variable in an object
    const me = "Matthew"
    {me}
  //Maps have better performance over an Object
  //Cause side effects inside of a map function
    moodifiedWords = words.filter( (word, index, arr) => {
      arr.splice(index, 1, `${word} extra`)
      return word.length < 6
    })
  //A nodelist is not an array but it can be converted with [...nodelist]
  //Anonymous functions that have no name use more memory, always name them, especially the ones you provide to add event listener
  //Cloning an array is just creating a new space in memory for the array.  The elements inside the array are still the same, so if you change that value it’s still reflected in the new one









