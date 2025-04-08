// DOMContentLoaded Event
document.addEventListener("DOMContentLoaded", function () {
    let onLoadEl = document.getElementById("onload");
    onLoadEl.innerHTML = "<h1> I loaded cause the DOM was fully loaded</h1>";
  });
  
  // Keydown Event
  let directionEl = document.getElementById("direction");
  
  document.addEventListener("keydown", function (e) {
    directionEl.innerText = `The Key you pressed is ${e.code}`;
  });
  
// Click Event
let clickMeBtn = document.getElementById("clickMe");

clickMeBtn.addEventListener("click", function () {
    clickMeBtn.innerText = "You clicked me!";
  });

  // Need to have a section to have the random background color event 
let randomColorBtn = document.getElementById("randomColorBtn");

randomColorBtn.addEventListener("click", function () {
  const randomColor = `hsl(${Math.floor(Math.random() * 360)}, 70%, 80%)`;
  document.body.style.backgroundColor = randomColor;
});

  