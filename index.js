var song = new Audio("sounds/songs2.mp3");

document.querySelector("button").addEventListener("click",function (){
  document.body.style.backgroundColor = "black";
  document.querySelector("h1").style.color = "white";
  document.querySelector("h1").innerHTML = "❤️THIS❤️ <br> IS <br> FOR YOU <br> 🫵";
  document.querySelector("button").remove();


  window.setInterval(function() {
    document.querySelector("h1").innerText = "3";
    document.querySelectorAll("div")[1].innerHTML = "<img src='images/heart.gif'>";
  }, 4000);

  window.setInterval(function() {
    document.querySelector("h1").innerText = "2";
  }, 5000);

  window.setInterval(function() {
    document.querySelector("h1").innerText = "1";
  }, 6000);

  window.setInterval(function() {
    document.querySelector("h1"). remove();
    document.querySelectorAll("div")[0].innerHTML = "<p>❤️LOVE❤️ <br>YOU BUDDY<br>❤️</p>";
    document.querySelectorAll("div")[1].innerHTML = "<img src='images/pr.jpeg'>";
    song.play();
  }, 7000);

});
