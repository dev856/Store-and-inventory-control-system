
  document.getElementsByClassName("i3")[0].onclick=function()
  {
  document.getElementsByClassName("add")[0].classList.toggle("down");
  document.getElementsByClassName("manage")[0].classList.toggle("down");
  };
  document.getElementsByClassName("i3")[1].onclick=function()
  {
  document.getElementsByClassName("add")[1].classList.toggle("down");
  document.getElementsByClassName("manage")[1].classList.toggle("down");
  };
  function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }