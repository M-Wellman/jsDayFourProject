function genNumbers(){
  //takes in input one and assigns it to a variable
  let one = document.getElementById("numberOne");
  let oneVal = one.value;
  let numberOne = parseInt(oneVal);

  //takes in input two and assigns it to a variable
  let two = document.getElementById("numberTwo");
  let twoVal = two.value;
  let numberTwo = parseInt(twoVal);

  //creates a variable for temporary reassignment within the for loop
  let numberThree = 0;


for(let x = 0; x <= 20; x++){
  console.log(numberOne);
  //reassigns the sum (numberThree) to the second number and the second number to the first
  numberThree = numberOne + numberTwo;
  numberOne = numberTwo;
  numberTwo = numberThree;
}

}
