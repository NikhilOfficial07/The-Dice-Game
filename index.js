//changes for first dice
var randomNumer1=Math.floor(Math.random()*6)+1;

var randomImage1="dice"+ randomNumer1 +".png";

var image1src= "images/"+randomImage1;

document.querySelectorAll("img")[0].setAttribute("src",image1src);

//changes for second dice

var randomNumber2=Math.floor(Math.random()*6)+1;

var randomImage2="dice"+randomNumber2+".png";

var image2src="images/" + randomImage2;

document.querySelectorAll("img")[1].setAttribute("src",image2src);

var changeH1to=document.querySelector("h1");

if(randomNumber2>randomNumer1){
    changeH1to.innerHTML="Player 2 wins!🚩";
}
else if(randomNumber2<randomNumer1){
    changeH1to.innerHTML="🚩Player 1 wins!";
}
else if(randomNumber2===randomNumer1)
    changeH1to.innerHTML="🚩Match Drawn🚩";
