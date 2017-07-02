var text = ["田", "由", "甲", "申", "甴", "电", "甶", "男", "甸", "甹", "町", "画", "甼", "甽", "甾", "甿", "畀", "畁", "畂", "畃", "畄", "畅", "畆", "畇", "畈", "畉", "畊", "畋", "界", "畍", "畎", "畏", "畐", "畑"];

//Gör så att tecknena inte blir på varandra
var screenWidth = window.innerWidth;
var columns = Math.floor(screenWidth / 20);

//copy pasta shuffle function?!?!?!?!
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

//Skapa Signs 
for(i=1; i<=columns; i++){
  $("#matrix").append("<div id="+i+" class='signs'></div>");
  shuffle(text);
  y = 3;
  while(y <= 32){
    document.getElementById(i).innerHTML += text[y];
    if (y == 32){
       $("#"+i+"").append("<div id="+i+"K class='firstLetter'>"+text[33]+"</div>");
    }
    y++;
  }
  y = 0;
}

//Skapa style och lägg till i head
var styleTag = document.createElement("style");
document.head.appendChild(styleTag); 

//Skapa css för tecknena
var cssRules = styleTag.sheet;

//Skapar random css values 

x = 0;

for(i=1; i<=columns; i++){
  var animationDelay = ((Math.random() * -20) - 1);
  var time = ((Math.random() * 6) + 2);
  var transY = Math.floor((Math.random() * 1000) + 1);
  cssRules.insertRule(".signs:nth-child("+i+") {position: absolute; animation: matrix "+time+"s cubic-bezier(0.27, 0.24, 0.5, 0.51) infinite reverse; animation-delay:"+animationDelay+"s; transform: translateY("+-transY+"px); left: "+x+"px; width: 19px;}", 0); //Lägger till olika css
  x=x+20;
}


//Byter innehållet i divana så att tecknena ändrar på sig
setInterval(function() {
  for(i=1; i<=columns; i++){
randText = shuffle(text);
randText = randText.join("");
document.getElementById(i).innerHTML = "<div class='lastLetter'>"+text[0]+"</div><div class='almostLastLetter'>"+text[1]+"</div><div class='almostAlmostLastLetter'>"+text[2]+"</div>"+randText+"<div id="+i+"K class='firstLetter'>"+text[33]+"</div>";
randText = randText.split();
}}, 50);

//Refreshar sidan när man ändrar storleken på sidan.
window.onresize = function(){ location.reload(); }

//"Best uppgift yet 10/10" -Maxemilian 2k16