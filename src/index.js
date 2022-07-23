// // function numbers(myArray){
// //   let myArray=[1,2,3];
// //   for(let i=0; i<myArray.length; i++){
// //     if(myArray[i]%2===0){
// //       myArray[i]);
// //     }
// //   }
// //   return myArray;
// // }

// function students{
//   this.firstName = "Vaibhav",
//   this.lastName= "Kondapuram",
//   this.attendance ="Present",
//   goHome = "Home",
//   goSchool ="School;
// }
// set location(goHome){
//   if(this.location),
//   return true;
// }
// else false;
// set location(goSchool){
//   if(this.location),
//   return true;
// }
// else false;

// console.log(this);

// returns string "REturned value" after 5 secs
const pr = new Promise((resolve, reject) =>
   setTimeout(() => resolve("REturned value"), 5000)
);
 
 
async function test() {
  await setTimeout()=>{
    console.log('Console 1');

  },5000);
  let val = pr;// an async job
}  
async function test(){
  await setTimeout()=>{
 console.log(`Console 2: value is `, val);
 },5000);
async function test(){
  await setTimeout()=>{

  }
}
 console.log('Console 3')

 
test();