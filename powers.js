/*
In the following code, replace `event` with the correct string to handle
a click event on the button. Then write the function that has instructions
for activating the corresponding power. The function should...
1. Remove the `disabled` class
2. Add the `enabled` class
*/
const flight = document.querySelector("#flight")
const mindreading = document.querySelector("#mindreading")
const xray = document.querySelector("#xray")
const section = document.querySelectorAll("section")


function changeClass(buttonName, newClass, anotherClass) {
  buttonName.classList.toggle(newClass)
  buttonName.classList.toggle(anotherClass)
}

document.querySelector("#activate-flight").addEventListener("click", function () {
  changeClass(flight, "power-disabled", "power-enabled")
})

/*
    Now write two more event handlers that activate the other two powers
    when the corresponding buttons are clicked.
*/


document.querySelector("#activate-mindreading").addEventListener("click", function () {
    changeClass(mindreading, "power-disabled", "power-enabled")
})

document.querySelector("#activate-xray").addEventListener("click", function () {
    changeClass(xray, "power-disabled", "power-enabled")
})


/*
    Write two more event handlers for activating and deactivating all powers
    when the corresponding buttons are clicked. You will need to use the
    `document.querySelectorAll()` method for these.
*/

document.querySelector("#activate-all").addEventListener("click", function() {
    section.forEach(function(power){
        power.className = ""
        power.classList.toggle("power-enabled")
    })
})

document.querySelector("#deactivate-all").addEventListener("click", function () {
    section.forEach(function (power) {
        power.className = ""
        power.classList.toggle("power-disabled")
    })
})
