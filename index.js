                  // Dice1
var randomNumber1=Math.floor((Math.random())*6)+1;
var image1="images/dice"+randomNumber1+".png";
document.querySelectorAll("img")[0].setAttribute("src",image1);
               // Dice2
var randomNumber2=Math.floor((Math.random())*6)+1;
var image2="images/dice"+randomNumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src",image2);

              // winner
            if(randomNumber1>randomNumber2){
              document.querySelector("h1").innerHTML="🚩Player 1 Won";
            }
            else if(randomNumber1<randomNumber2){
              document.querySelector("h1").innerHTML="Player 2 Won🚩";
            }
            else{
              document.querySelector("h1").innerHTML="Draw";
            }
