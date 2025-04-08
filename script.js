//When the dom is fully loaded, this will be fired
document.addEventListener("DOMContentLoaded", function(){

//Get the element with an id of onload
let onLoadEl = document.getElementById("onload");

//Add some HTML within the element we grabbed
onLoadEl.innerHTML = "<h1> I loaded cause the DOM was fully loaded</h1>";
    });

let directionEI = document.getElementByID("direction");

document.addEventListener("click",function(e){
    directionEI.innerText = 'The Key you pressed is ${e.code}';

});