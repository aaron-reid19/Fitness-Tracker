const exc = document.getElementById('excer');
const reps = document.getElementById('reps');
const sets = document.getElementById('sets');
const send = document.getElementById('send');
const display1 = document.getElementById('display1');
const display2 = document.getElementById('display2');
const display3 = document.getElementById('display3');

function displayExercise(){
    display1.innerHTML = "excercise: "+exc.value;
    display2.innerHTML = "reps: "+reps.value;
    display3.innerHTML = "sets: "+sets.value;
}

send.addEventListener("click", displayExercise);