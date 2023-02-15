// Set variables
let count = 0;
let counter = document.querySelector('h1 span');
let add = document.querySelector('#increase');
let remove = document.querySelector('#decrease');
let reset = document.querySelector('#reset');

// Clicking for increment
add.addEventListener('click', function(){
    count += 1;
    counter.textContent = count;
    red_green();
});
// Clicking for reduction
remove.addEventListener('click', function(){
    count -= 1;
    counter.textContent = count;
    red_green();
});
// Reset Click
reset.addEventListener('click', function() {
    resetr();
});
// function declarations
function red_green (){
    if(count > 0){
        counter.style.color = 'green';
    } else if (count != 0) {
        counter.style.color = 'red';
    } 
}
function resetr (){
    count = 0;
    counter.textContent = count;
    counter.style.color = 'blue';
}
