let display = document.getElementById("display");

function add(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    display.value = eval(display.value);
}

function square() {
    display.value = display.value ** 2;
}

function squareRoot() {
    display.value = Math.sqrt(display.value);
}

function sin() {
    display.value = Math.sin(display.value * Math.PI / 180);
}

function cos() {
    display.value = Math.cos(display.value * Math.PI / 180);
}

function tan() {
    display.value = Math.tan(display.value * Math.PI / 180);
}