const testLink = document.querySelector('#testLink');
testLink.addEventListener('click', function(event){
   let text = prompt('Введите текст, на который хотите поменять!');
   testLink.textContent = text;
   event.preventDefault();
})
