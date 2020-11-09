let navIcon = document.getElementById("navIcon")
navIcon.addEventListener("click", function(){
    navIcon.classList.toggle("open");
});

function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}