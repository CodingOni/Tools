// Instagram hacks

//  Search field
// let Searchtest= prompt("Please enter the hashtag you want to like","Trending");

// var search = document.querySelector('.x3qfX').value = "#" + Searchtest;

// document.querySelector(".glyphsSpriteSafari__outline__24__grey_9").click();


var pictureIsClicked = false; // declare the variable that tracks the state
var firstPicture = document.querySelector("div._9AhH0");

 function clickHandler (){
   pictureIsClicked = true;
 }


 firstPicture.addEventListener('click',clickHandler)
//  document.addEventListener("DOMContentLoaded",function(){ firstPicture.click() });

//  setTimeout(function(){ firstPicture.click();  console.log(`The first picture has been clicked = ${pictureIsClicked}`), 10000;});
 setInterval(() => {
  firstPicture.click();
  console.log("Picture clicked");
}, 5000);

let likesGiven = 0;
setInterval(() => {
  let heart = document.getElementsByClassName("glyphsSpriteHeart__outline__24__grey_9"),
    arrow = document.querySelector(".coreSpriteRightPaginationArrow");
    

     
  if (heart[1] && pictureIsClicked) {
    heart = heart[1].parentElement;
    likesGiven++, heart.click();
  }
  arrow.click();
  console.log(`You've liked ${likesGiven} post(s)!`);
}, 10000);

// Button Liker