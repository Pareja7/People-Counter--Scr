
let countEl = document.getElementById("count-el")
console.log(countEl)
let count = 0


function increment(){
  //console.log("The button was clicked")
  //console.log(count + 1)
  count = count + 1
  countEl.innerText = count
  
}//countEl ties Count in browser (h2) to the increment btn and onClick event listener -increment function that tells it to add one to the current count upon each click

//console.log(count)
//let lap1 = 34
//let lap2 = 33
//let lap3 = 36 //Global scope

//create fn that logs out the sum of all the lap times

//function totalLapTime() {
  //let totalTime = lap1 + lap2 + lap3
  //console.log(totalTime)
//}
//call the function to get it to work
//totalTime()
//totalLapTime()

//Create a fn that increments the lapsCompleted variable with one
//Run it three times to get output 3 in console

//let lapsCompleted =0
//function addOneLap(){
//console.log(lapsCompleted + 1)  
  //lapsCompleted = lapsCompleted + 1
//}
//addOneLap()
//addOneLap()
//addOneLap()

//console.log(lapsCompleted)
