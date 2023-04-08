var dice1Value=Math.floor(Math.random()*6+1);
var dice2Value=Math.floor(Math.random()*6+1);

var finalDice1Image="images/dice"+dice1Value+".png";
document.querySelectorAll("img")[0].setAttribute("src",finalDice1Image);

var finalDice2Image="images/dice"+dice2Value+".png";
document.querySelectorAll("img")[1].setAttribute("src",finalDice2Image);

if (dice1Value>dice2Value){
  document.querySelector("h1").innerHTML="🚩 Play 1 Wins!";
}
else if (dice2Value>dice1Value) {
  document.querySelector("h1").innerHTML=" Play 2 Wins! 🚩";
}
else{
  document.querySelector("h1").innerHTML = "Draw!";
}























// if (dice1Value ==1 || dice2Value==1)  {
//   document.getElementById("img1").src="images/dice1.png";
//   document.getElementById("img2").src="images/dice1.png";
// }
// if (dice1Value ==2 || dice2Value==2)  {
//   document.getElementById("img1").src="images/dice2.png";
//   document.getElementById("img2").src="images/dice2.png";
// }
// if (dice1Value ==3 || dice2Value==3)  {
//   document.getElementById("img1").src="images/dice3.png";
//   document.getElementById("img2").src="images/dice3.png";
// }
// if (dice1Value ==4 || dice2Value==4)  {
//   document.getElementById("img1").src="images/dice4.png";
//   document.getElementById("img2").src="images/dice4.png";
// }
// if (dice1Value ==5 || dice2Value==5)  {
//   document.getElementById("img1").src="images/dice5.png";
//   document.getElementById("img2").src="images/dice5.png";
// }
// if (dice1Value ==6 || dice2Value==6)  {
//   document.getElementById("img1").src="images/dice6.png";
//   document.getElementById("img2").src="images/dice6.png";
// }
