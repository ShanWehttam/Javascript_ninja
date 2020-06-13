function dave(){
 
 return matt()
 .then( (returned) =>  console.log(returned))
 .then( (returned) => {console.log("dave"); return 5})
 
}
 
console.log(dave())
 
// async await
 
function matt() {
 const promise = new Promise( (resolve, reject) => {
 const name = ['matt','brad','holly','james','tim','clicw']
 resolve(name[0])
 })
 return promise
}
 
async function dave(){
 try{
   const something = await matt()
   let arr = [1,2,3,4,5]
   for (const elem of something){
     console.log(elem)
   }
 } catch {
   console.log('promise not resolved')
 }
}
 
dave()
