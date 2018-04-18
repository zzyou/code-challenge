/* Add the necessary code to wait for the DOM to load to make sure that anything you manipulate in the DOM has loaded. 
You can do this either using window.onload or adding an event listener for DOMContentLoaded.*/

// DOMContentLoaded can listen to multiple event functions.
document.addEventListener("DOMContentLoaded", function () {

});

// Another method using onload:
// if you have multiple window.onload functions, only the last window.onload function is returned.
window.onload = function() {

};



/* Replace the text "Change me" with "Hello World!". */

document.addEventListener("DOMContentLoaded", function () {
    let h1 = document.getElementById("change_heading");
    h1.innerText = "Hello World!";
});



/* When a user hovers over one of the colored boxes 
change the text to display the color that is being hovered over. */

document.addEventListener("DOMContentLoaded", function () {
    let colorDivs = document.querySelectorAll("section div");
    let span = document.querySelector(".selected");
    for (let colorDiv of colorDivs) {
        let color = colorDiv.className;    
        colorDiv.addEventListener("mouseover", function () {
            span.innerText = `${color}`;
        });
        colorDiv.addEventListener("mouseleave", function() {
            span.innerText = "";
        });
    }
});

// Another method listening on parent element:
document.addEventListener("DOMContentLoaded", function(){
    let section = document.querySelector("section");
    section.addEventListener("mouseover", function(event){
        let selectedColor = document.querySelector(".selected");
        selectedColor.innerText = event.target.className;
    });
});



/* Create a new div element. */

/* Give your new div a class of purple and style it 
so that it has a background color of purple. */

/* Append your new div to the page to the section tag. */

document.addEventListener("DOMContentLoaded", function () {
    let newDiv = document.createElement("div");
    newDiv.classList.add("purple");
    let section = document.querySelector("section");
    section.appendChild(newDiv);
});




/* Create a racing game with the two cars. 
When the race button is pressed, 
the two cars should move across the screen 
until one of them is at the end of the screen. 
When one of the blocks reaches the end
 - you should alert "winner!" */

 document.addEventListener("DOMContentLoaded", function () {
    let button = document.querySelector("button");

    let car1 = document.querySelector(".car1");
    let car2 = document.querySelector(".car2");

    car1.style.marginLeft = 0; // must set value to HTML attribute, otherwise NaN
    car2.style.marginLeft = 0; // you cannot grab the style value from CSS

    let speed1 = Math.floor(Math.random()*100);
    let speed2 = Math.floor(Math.random()*100);
    
    function reset(car1, car2) {
        clearTimeout(car1.timer);
        clearTimeout(car2.timer);

        car1.style.marginLeft = 0;
        car2.style.marginLeft = 0;

        button.disabled = false;
    }

    button.addEventListener("click", function(event) {
        button.disabled = true;

        car1.timer = setInterval(function() {
            car1.style.marginLeft = (parseInt(car1.style.marginLeft) + speed1).toString() + 'px';
            if (parseInt(car1.style.marginLeft) > window.innerWidth) {
                alert("Car 1 wins!");
                reset(car1, car2);
            }
        }, 1000);

        car2.timer = setInterval(function() {
            car2.style.marginLeft = (parseInt(car2.style.marginLeft) + speed2).toString() + 'px';
            if (parseInt(car2.style.marginLeft) > window.innerWidth) {
                alert("Car 2 wins!");
                reset(car1, car2);
            }
        }, 1000);
    });
});
