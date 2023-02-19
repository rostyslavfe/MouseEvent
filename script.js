// Завдання №1

function changetoDefault(){
    event.target.style.backgroundColor = 'purple'
}
let count = 3;
document.querySelector('.box1').addEventListener('mouseover', function(){
   if(count === 3){
        event.target.style.backgroundColor = 'red'
        count--;
   }
   else if (count === 2){
        event.target.style.backgroundColor = 'yellow'
        count--;
   }
   else if(count === 1){
        event.target.style.backgroundColor = 'green'
        count--;
   }
    if (count === 0){
        count = 3
   }
});
document.querySelector('.box1').addEventListener('mouseout', changetoDefault);

//Завдання №2

document.querySelector('.one').addEventListener('click', function(){
    let a = prompt('write an image url adress');
    document.querySelector('.one').insertAdjacentHTML('beforeend', ` <img src="${a}">`)
});

document.querySelector('.two').addEventListener('click', function(){
    let a = prompt('write an image url adress');
    document.querySelector('.two').insertAdjacentHTML('beforeend', ` <img src="${a}">`)
});

document.querySelector('.three').addEventListener('click', function(){
    let a = prompt('write an image url adress');
    document.querySelector('.three').insertAdjacentHTML('beforeend', ` <img src="${a}">`)
});

//Завдання №3

document.querySelector('.box3').addEventListener('mousedown', function(){
    event.target.style.backgroundColor = 'black';
    event.target.style.color = 'white';
    event.target.textContent = 'А я тобі не скажу'
});
document.querySelector('.box3').addEventListener('mouseup', function(){
    event.target.style.backgroundColor = 'yellow';
    event.target.style.color = 'blue';
    event.target.textContent = 'Хочеш знати який?'
});
document.querySelector('.box3').addEventListener('mouseover', function(){
    event.target.style.backgroundColor = 'yellow';
    event.target.style.color = 'blue';
    event.target.textContent = 'Хочеш знати який?'
});
document.querySelector('.box3').addEventListener('mouseout', function(){
    event.target.style.backgroundColor = 'purple';
    event.target.style.color = 'black';
    event.target.textContent = 'У мене є секрет'
});


// Завдання №4
function changeListColor(){
    event.target.style.color = event.target.textContent
}



